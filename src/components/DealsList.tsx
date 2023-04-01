import { useStrategy } from '../hooks/useStrategy'

const DealsList = () => {
  const { useDeals } = useStrategy()

  const data = useDeals()

  return <div>{JSON.stringify(data?.data)}</div>
}

export default DealsList
