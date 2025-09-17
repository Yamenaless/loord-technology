'use client'

import { createContext, useContext, useState } from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingContextType {
  isLoading: boolean
  showLoading: () => void
  hideLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    return {
      isLoading: false,
      showLoading: () => {},
      hideLoading: () => {}
    }
  }
  return context
}

interface LoadingProviderProps {
  children: React.ReactNode
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const showLoading = () => setIsLoading(true)
  const hideLoading = () => setIsLoading(false)

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
      
      {/* Simple Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-background border border-border rounded-lg p-6 shadow-xl flex items-center space-x-3">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
            <span className="text-foreground font-medium">Loading...</span>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  )
}
