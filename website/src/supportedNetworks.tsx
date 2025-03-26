import { NetworksRegistry } from '@pinax/graph-networks-registry'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { Table } from '@/components'
import { useI18n } from '@/i18n'

// Networks with Token API support TO EXTERNALIZE @hayderkg
const tokenAPINetworks = ['mainnet', 'base', 'bsc', 'arbitrum-one', 'matic', 'optimism']

export async function getSupportedNetworks() {
  const registry = await NetworksRegistry.fromLatestVersion()

  return registry.networks
    .flatMap((network) => {
      const subgraphs = Boolean(network.services.subgraphs?.length)
      const substreams = Boolean(network.services.substreams?.length)
      const firehose = Boolean(network.services.firehose?.length)
      if (!subgraphs && !substreams && !firehose) {
        return []
      }
      return [
        {
          ...network,
          subgraphs,
          substreams,
          firehose,
          tokenAPI: tokenAPINetworks.includes(network.id),
        },
      ]
    })
    .sort((a, b) => a.fullName.localeCompare(b.fullName))
}

export function SupportedNetworksTable({ networks }: { networks: Awaited<ReturnType<typeof getSupportedNetworks>> }) {
  const { t } = useI18n()
  const router = useRouter()
  const locale = router.locale || router.defaultLocale || 'en'

  return (
    <Table>
      <tbody>
        <tr>
          <th>{t('supportedNetworks.name')}</th>
          <th>{t('supportedNetworks.id')}</th>
          <th align="center">{t('supportedNetworks.subgraphs')}</th>
          <th align="center">{t('supportedNetworks.substreams')}</th>
          <th align="center">{t('supportedNetworks.firehose')}</th>
          <th align="center">Token API</th>
        </tr>
        {networks.map((network) => (
          <tr key={network.id}>
            <td>
              <NextLink className="underline" href={`/${locale}/supported-networks/${network.id}`} passHref>
                {network.fullName}
              </NextLink>
            </td>
            <td>
              <code className="font-mono">{network.id}</code>
            </td>
            <td align="center" className="font-mono">
              {network.subgraphs ? '✓' : null}
            </td>
            <td align="center" className="font-mono">
              {network.substreams ? '✓' : null}
            </td>
            <td align="center" className="font-mono">
              {network.firehose ? '✓' : null}
            </td>
            <td align="center" className="font-mono">
              {network.tokenAPI ? '✓' : null}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
