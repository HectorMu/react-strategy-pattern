import { createContext } from 'react'
import { Implementation, getImplementation } from './implementations'

const value: Implementation = getImplementation()

export const StrategyContext = createContext<Implementation>({
  useDeals: () => null
})

export const StrategyProvider = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  return (
    <StrategyContext.Provider value={value}>
      {children}
    </StrategyContext.Provider>
  )
}
