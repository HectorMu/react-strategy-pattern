import './App.css'
import { StrategyProvider } from './strategy/StrategyProvider'
import DealsList from './components/DealsList'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <StrategyProvider>
        <DealsList />
      </StrategyProvider>
    </QueryClientProvider>
  )
}

export default App
