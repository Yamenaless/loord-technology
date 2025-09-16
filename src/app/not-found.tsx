import { Search, Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-muted-foreground" />
          </div>
          
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full inline-flex items-center justify-center space-x-2 bg-muted text-muted-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-3">Popular Pages</h3>
          <div className="space-y-2">
            <Link
              href="/products"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="/#categories"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Shop by Category
            </Link>
            <Link
              href="/#faq"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
