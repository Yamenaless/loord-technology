'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { categories } from '@/data/products'
import { ArrowRight, Zap, TrendingUp, Award } from 'lucide-react'

export const Categories = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-32 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  const getCategoryIcon = (category: string) => {
    const icons = {
      'PC Parts': '⚙️',
      'Full PCs': '🖥️',
      'Keyboards': '⌨️',
      'Mice': '🖱️',
      'Headsets': '🎧',
      'Microphones': '🎤',
      'Mouse Pads': '🖱️',
      'Bluetooth AirPods': '🎵',
      'Apple AirPods': '🍎'
    }
    return icons[category as keyof typeof icons] || '📦'
  }

  const featuredCategories = ['PC Parts', 'Full PCs', 'Keyboards', 'Headsets']
  const otherCategories = categories.filter(cat => !featuredCategories.includes(cat))

  return (
    <section id="categories" className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Explore Categories</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block text-foreground">Shop by</span>
            <span className="relative">
              <span className="text-foreground">Category</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover premium gaming and tech gear organized by category. 
            From high-performance components to professional accessories.
          </p>
        </div>

        {/* Featured Categories Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span>Featured Categories</span>
            </h3>
            <div className="hidden sm:flex items-center space-x-2 text-muted-foreground">
              <Award className="w-4 h-4" />
              <span className="text-sm">Most Popular</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => window.location.href = `/products?category=${encodeURIComponent(category)}`}
                className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary overflow-hidden"
                tabIndex={0}
                aria-label={`Browse ${category} products`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-4xl">{getCategoryIcon(category)}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {category}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Premium {category.toLowerCase()} collection
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Other Categories */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <span>More Categories</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {otherCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => window.location.href = `/products?category=${encodeURIComponent(category)}`}
                className="group bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                tabIndex={0}
                aria-label={`Browse ${category} products`}
                style={{ animationDelay: `${(index + 4) * 0.05}s` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <span className="text-2xl">{getCategoryIcon(category)}</span>
                  </div>
                  <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                    {category}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for?
          </p>
          <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-current text-background"
          ></path>
        </svg>
      </div>
    </section>
  )
}
