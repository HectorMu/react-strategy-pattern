import { UseQueryResult } from '@tanstack/react-query'
import ACStrategy from './ac-strategy'
import SAStrategy from './sa-strategy'

export enum implementations {
  ActiveCampaign = 'ACTIVE_CAMPAIGN'
}

export const getImplementation = () => {
  switch (import.meta.env.VITE_STRATEGY) {
    case 'SA':
      return SAStrategy

    default:
      return ACStrategy
  }
}

interface FormattedDeal {
  title: string
}

export interface Implementation {
  useDeals: () => UseQueryResult<FormattedDeal[]> | null
}
