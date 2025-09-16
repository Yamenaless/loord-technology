'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    onAddToCart()
  }

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.images[currentImageIndex]}
          alt={`${product.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Navigation arrows for multiple images */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous image"
              tabIndex={0}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Next image"
              tabIndex={0}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-primary-foreground'
                    : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
                }`}
                aria-label={`View image ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </div>
        )}

        {/* Stock status badge */}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-semibold rounded-full">
            Out of Stock
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        {/* Product Title */}
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 leading-tight">
          {product.title}
        </h3>
        
        {/* Product Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Price and Button Section */}
        <div className="mt-auto space-y-4">
          {/* Price Display */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground">USD</span>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label={`Add ${product.title} to cart`}
            tabIndex={0}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}