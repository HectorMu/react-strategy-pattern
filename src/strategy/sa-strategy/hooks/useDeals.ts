import { useQuery, useQueryClient } from '@tanstack/react-query'
import { API } from '../API'
import { DealResponse } from '../response-objects/Interfaces'
import { DealListAdapter } from '../adapters/deal.list.adapter'

const useDeals = () => {
  const queryClient = useQueryClient()

  const dealsQuery = useQuery<DealResponse[]>({
    queryFn: async () => {
      const res = await fetch(API + '/deals.json')
      return await res.json()
    },
    queryKey: ['sa-deals'],
    onSuccess: (data) => {
      queryClient.setQueryData(['sa-deals'], () => {
        return data.map(DealListAdapter)
      })
    }
  })

  return dealsQuery
}

export default useDeals
