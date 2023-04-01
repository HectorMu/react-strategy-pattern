import { DealResponse } from '../response-objects/Interfaces'

export const DealListAdapter = (item: DealResponse) => ({ title: item.sa })
