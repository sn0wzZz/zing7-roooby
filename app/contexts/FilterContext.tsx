'use client'
import { createContext, useContext, useState } from 'react'

interface FilterContextType {
  filterValue: any
  setFilterValue: React.Dispatch<React.SetStateAction<any>>
}

const FilterContext = createContext<FilterContextType | null>(null)

function FilterContextProvider({ children }: any) {
  const [filterValue, setFilterValue] = useState<any>('*')

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  )
}

function useFilterContext() {
  const context = useContext(FilterContext)
  if (context === null)
    throw new Error(
      'useFilterContext must be used within a FilterContextProvider'
    )
  return context
}

export { FilterContextProvider, useFilterContext }
