'use client'

import { useState, useCallback } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { ProductGrid } from '@/components/product-grid'
import { FAQ } from '@/components/faq'
import { Reviews } from '@/components/reviews'
import { Footer } from '@/components/footer'
import { CartDropdown } from '@/components/cart-dropdown'
import { Product } from '@/data/products'

interface CartItem {
  product: Product
  quantity: number
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showCartFeedback, setShowCartFeedback] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id)
      
      if (existingItem) {
        // Increase quantity if product already exists
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Add new product to cart
        return [...prev, { product, quantity: 1 }]
      }
    })
    
    // Show visual feedback
    setShowCartFeedback(true)
    setTimeout(() => setShowCartFeedback(false), 2000)
    
    console.log('Item added to cart:', product.title)
  }, [])

  const handleRemoveFromCart = useCallback((productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }, [])

  const handleUpdateQuantity = useCallback((productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId)
      return
    }

    setCartItems(prev => 
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }, [handleRemoveFromCart])

  const handleClearCart = useCallback(() => {
    setCartItems([])
    setIsCartOpen(false)
  }, [])

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} onCartClick={toggleCart} />
      <Hero />
      <Categories />
      <ProductGrid onAddToCart={handleAddToCart} />
      <FAQ />
      <Reviews />
      <Footer />
      
      {/* Cart Dropdown */}
      <CartDropdown
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
      
      {/* Cart Feedback Toast */}
      {showCartFeedback && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Item added to cart!</span>
          </div>
        </div>
      )}
    </main>
  )
}
