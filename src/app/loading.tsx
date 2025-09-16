export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 animate-pulse">
          <div className="w-8 h-8 bg-primary-foreground rounded-md animate-spin-slow"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Loading...
        </h2>
        <p className="text-muted-foreground">
          Please wait while we prepare your experience
        </p>
        
        {/* Loading Bars */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          <div className="w-2 h-8 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-8 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-8 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
