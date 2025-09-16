'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'
import { faqs } from '@/data/products'

export const FAQ = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [openItems, setOpenItems] = useState<string[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  if (!mounted) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-muted rounded-lg"></div>
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
    <section id="faq" className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>


      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block text-foreground">Frequently Asked</span>
            <span className="relative">
              <span className="text-foreground">Questions</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our products, services, 
            and policies. Can't find what you're looking for? Contact us!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id)
            
            return (
              <div
                key={faq.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  tabIndex={0}
                >
                  <span className="font-semibold text-lg text-foreground pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 ${isOpen ? 'bg-primary text-primary-foreground' : ''}`}>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    className="px-8 pb-6 text-muted-foreground leading-relaxed animate-fade-in-up"
                    role="region"
                    aria-labelledby={`faq-button-${faq.id}`}
                  >
                    <div className="border-l-2 border-primary/20 pl-6">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground">
              Our support team is here to help you with any questions or concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Live Chat</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with our support team in real-time
              </p>
              <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                Start Chat
              </button>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Speak directly with our experts
              </p>
              <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                +1 (555) 123-4567
              </button>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Send us a detailed message
              </p>
              <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                support@loord.tech
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
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
