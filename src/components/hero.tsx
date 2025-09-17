'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SimpleLink } from './simple-link'
import { ArrowRight, Play, Star, Zap, Shield, Truck } from 'lucide-react'

export const Hero = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-muted animate-pulse"></div>
      </section>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'


  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'} 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>New Arrivals Weekly</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Premium</span>
                <span className="block">
                  <span className="text-foreground">Gaming</span>{' '}
                  <span className="relative">
                    <span className="text-foreground">Gear</span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full transform scale-x-0 animate-pulse" style={{ animationDelay: '2s', animationDuration: '2s', animationFillMode: 'forwards', transform: 'scaleX(1)' }}></div>
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Elevate your gaming experience with our curated collection of premium peripherals, 
              cutting-edge components, and professional-grade accessories.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Gamers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                </div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SimpleLink
                href="/products"
                className="group inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </SimpleLink>
              
              <button className="group inline-flex items-center justify-center space-x-2 border border-border bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-200">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 border-t border-border">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="w-5 h-5" />
                <span className="text-sm">2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Free Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            {/* Main Product Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop&q=80"
                  alt="Premium Gaming Keyboard"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                
                {/* Floating Product Cards */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=60&h=60&fit=crop&q=80"
                      alt="Gaming Mouse"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-xs font-medium text-foreground">Gaming Mouse</div>
                      <div className="text-xs text-muted-foreground">$79.99</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=60&h=60&fit=crop&q=80"
                      alt="Gaming Headset"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-xs font-medium text-foreground">Pro Headset</div>
                      <div className="text-xs text-muted-foreground">$149.99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-primary/30 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className={`fill-current ${isDark ? 'text-background' : 'text-muted/20'}`}
          ></path>
        </svg>
      </div>
    </section>
  )
}
