import { StrategyContext } from '../strategy/StrategyProvider'
import { useContext } from 'react'

export const useStrategy = () => useContext(StrategyContext)
