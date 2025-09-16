'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useCallback } from 'react'
import { products, categories, Product } from '@/data/products'
import { ProductCard } from '@/components/product-card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartDropdown } from '@/components/cart-dropdown'
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown, 
  X, 
  ShoppingBag,
  TrendingUp
} from 'lucide-react'

interface CartItem {
  product: Product
  quantity: number
}

export default function ProductsPage() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showCartFeedback, setShowCartFeedback] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  // Filter and sort states
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000])
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name' | 'rating'>('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Calculate cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prev, { product, quantity: 1 }]
      }
    })

    // Show feedback
    setShowCartFeedback(true)
    setTimeout(() => setShowCartFeedback(false), 2000)
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
  }, [])

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev)
  }, [])

  useEffect(() => {
    setMounted(true)
    
    // Handle URL parameters for category filtering
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const categoryParam = urlParams.get('category')
      if (categoryParam && categories.includes(categoryParam)) {
        setSelectedCategories([categoryParam])
      }
    }
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-96 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.title.localeCompare(b.title)
      case 'rating':
        return 5 - 4.5 // Mock rating sort
      default:
        return 0
    }
  })

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage)

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategories([])
    setPriceRange([0, 3000])
    setCurrentPage(1)
  }

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={toggleCart} />
      
      <CartDropdown
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Cart feedback toast */}
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

      <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            <span>All Products</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block text-foreground">Premium Gaming</span>
            <span className="relative">
              <span className="text-foreground">Collection</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our complete collection of premium gaming peripherals, PC components, 
            and professional accessories. Find exactly what you need to elevate your setup.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-accent transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {(selectedCategories.length > 0 || searchTerm) && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {selectedCategories.length + (searchTerm ? 1 : 0)}
                  </span>
                )}
              </button>

              {/* Desktop Category Filters */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap">
                {categories.slice(0, 6).map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategories.includes(category)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border text-foreground hover:bg-accent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                
                {selectedCategories.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-1 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span className="text-sm">Clear</span>
                  </button>
                )}
              </div>

              {/* Results Count */}
              <div className="flex items-center space-x-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  {filteredProducts.length} products found
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-low' | 'price-high' | 'name' | 'rating')}
                  className="appearance-none bg-card border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="lg:hidden mt-6 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedCategories.includes(category)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-accent'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {selectedCategories.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-accent transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear All Filters</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {paginatedProducts.length > 0 ? (
          <>
            <div className={`grid gap-8 mb-12 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {paginatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard
                    product={product}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
                >
                  Previous
                </button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNumber = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                          currentPage === pageNumber
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card border border-border text-foreground hover:bg-accent'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    )
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">No products found</h3>
            <p className="text-muted-foreground mb-8">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Clear Filters</span>
            </button>
          </div>
        )}
        </div>
      </div>
      
      <Footer />
    </>
  )
}
