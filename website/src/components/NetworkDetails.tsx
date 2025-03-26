import { NetworkType } from '@pinax/graph-networks-registry'

import { ExperimentalDescriptionList, Grid } from '@edgeandnode/gds'

import { useI18n } from '@/i18n'

interface NetworkDetailsProps {
  network: {
    id: string
    fullName: string
    networkType: NetworkType
    protocol: string
    chainId: number
    nativeCurrency: string
    docs: string
  }
  stats?: {
    queries: string
    activeSubgraphs: string
    activeIndexers: string
    averageLatency: string
  }
}

export function NetworkDetails({ network }: NetworkDetailsProps) {
  const { t } = useI18n()

  return (
    <Grid className="gap-4">
      <div className="col-span-2">
        <div>
          <ExperimentalDescriptionList size="small">
            <ExperimentalDescriptionList.Item label={t('supportedNetworks.type')}>
              {network.networkType}
            </ExperimentalDescriptionList.Item>
            <ExperimentalDescriptionList.Item label={t('supportedNetworks.protocol')}>
              {network.protocol}
            </ExperimentalDescriptionList.Item>
            <ExperimentalDescriptionList.Item label={t('supportedNetworks.identifier')}>
              {network.id}
            </ExperimentalDescriptionList.Item>
            <ExperimentalDescriptionList.Item label={t('supportedNetworks.chainId')}>
              {network.chainId}
            </ExperimentalDescriptionList.Item>
            <ExperimentalDescriptionList.Item label={t('supportedNetworks.nativeCurrency')}>
              {network.nativeCurrency}
            </ExperimentalDescriptionList.Item>
            <ExperimentalDescriptionList.Item label={t('supportedNetworks.docs')}>
              <a href={network.docs} target="_blank" rel="noopener noreferrer">
                {network.docs}
              </a>
            </ExperimentalDescriptionList.Item>
          </ExperimentalDescriptionList>
        </div>
      </div>
    </Grid>
  )
}
