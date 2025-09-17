'use client'

import { useRouter } from 'next/navigation'
import { useLoading } from './simple-loading'

interface SimpleLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const SimpleLink = ({ href, children, className, onClick }: SimpleLinkProps) => {
  const router = useRouter()
  const { showLoading, hideLoading } = useLoading()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (onClick) {
      onClick()
    }
    
    showLoading()
    
    // Navigate after a brief delay
    setTimeout(() => {
      router.push(href)
      // Hide loading after navigation
      setTimeout(hideLoading, 500)
    }, 150)
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
