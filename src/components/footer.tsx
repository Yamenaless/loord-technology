'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Github, Twitter, Instagram, Facebook, Mail, Phone, MapPin, ArrowUp, Zap } from 'lucide-react'

export const Footer = () => {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!mounted) {
    return (
      <footer className="bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-6 bg-muted rounded w-1/2"></div>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="h-4 bg-muted rounded w-3/4"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#' },
        { name: 'Products', href: '#products' },
        { name: 'Categories', href: '#categories' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Reviews', href: '#reviews' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Service', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'Warranty Coverage', href: '#' },
        { name: 'Track Your Order', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Refund Policy', href: '#' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-foreground' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'support@loord.tech', href: 'mailto:support@loord.tech' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ]

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Loord Technology
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              Your trusted partner for premium gaming peripherals, PC components, 
              and technology accessories. Quality gear designed for enthusiasts and professionals.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110`}
                  aria-label={`Follow us on ${social.name}`}
                  tabIndex={0}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold text-foreground mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      tabIndex={0}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-border mb-12">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, new product launches, 
              and gaming tips from our experts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              aria-label="Email address for newsletter"
            />
            <button
              className="px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              aria-label="Subscribe to newsletter"
              tabIndex={0}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Loord Technology. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center hover:bg-primary/90 transition-all duration-200 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
