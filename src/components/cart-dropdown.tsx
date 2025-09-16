'use client'

import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { Product } from '@/data/products'

interface CartItem {
  product: Product
  quantity: number
}

interface CartDropdownProps {
  isOpen: boolean
  cartItems: CartItem[]
  onClose: () => void
  onRemoveItem: (productId: string) => void
  onUpdateQuantity: (productId: string, quantity: number) => void
  onClearCart: () => void
}

export const CartDropdown = ({
  isOpen,
  cartItems,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart
}: CartDropdownProps) => {
  if (!isOpen) return null

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.product.price * item.quantity),
    0
  )

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Cart Dropdown */}
      <div className="fixed top-16 right-4 w-96 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg shadow-xl z-50 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-card-foreground">
            Shopping Cart ({totalItems})
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-accent rounded-md transition-colors"
            aria-label="Close cart"
            tabIndex={0}
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-muted-foreground mb-2">Your cart is empty</div>
              <p className="text-sm text-muted-foreground">Add some products to get started!</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-3 bg-muted/30 rounded-lg p-3">
                  {/* Product Image */}
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-card-foreground text-sm line-clamp-1 mb-1">
                      {item.product.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      ${item.product.price.toFixed(2)} each
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
                        aria-label="Decrease quantity"
                        tabIndex={0}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      
                      <span className="text-sm font-medium text-foreground min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
                        aria-label="Increase quantity"
                        tabIndex={0}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Price and Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label={`Remove ${item.product.title} from cart`}
                      tabIndex={0}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="text-sm font-semibold text-foreground">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-card-foreground">Total:</span>
              <span className="text-lg font-bold text-foreground">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={onClearCart}
                className="flex-1 px-4 py-2 text-sm font-medium text-muted-foreground bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                tabIndex={0}
              >
                Clear Cart
              </button>
              <button
                className="flex-1 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                tabIndex={0}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
