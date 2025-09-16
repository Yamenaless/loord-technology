'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Star, Quote, Users, TrendingUp, Award } from 'lucide-react'
import { reviews } from '@/data/products'

const StarRating = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) => {
  const starSize = size === 'lg' ? 'w-6 h-6' : 'w-4 h-4'
  
  return (
    <div className="flex items-center space-x-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${starSize} ${
            star <= rating
              ? 'text-yellow-400 fill-current'
              : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  )
}

export const Reviews = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-48 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <section id="reviews" className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '45px 45px'
        }}></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Customer Reviews</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block text-foreground">What Our</span>
            <span className="relative">
              <span className="text-foreground">Customers Say</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real feedback from satisfied customers who trust us with their gaming 
            and tech gear needs. Join thousands of happy customers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <span className="text-3xl font-bold text-foreground">4.9</span>
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Quote className="w-6 h-6" />
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              
              {/* Comment */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{review.comment}"
              </blockquote>
              
              {/* Customer Info */}
              <div className="flex items-center pt-4 border-t border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-primary">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Verified Customer</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Section */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-border">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <StarRating rating={5} size="lg" />
                <span className="text-4xl font-bold text-foreground">4.9</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{reviews.length}+</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Gaming Enthusiasts Worldwide
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have upgraded their gaming setup 
              with our premium products and exceptional service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
                <span>Write a Review</span>
              </button>
              <button className="inline-flex items-center justify-center space-x-2 border border-border bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-all duration-200">
                <TrendingUp className="w-4 h-4" />
                <span>View All Reviews</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current text-background"
          ></path>
        </svg>
      </div>
    </section>
  )
}
