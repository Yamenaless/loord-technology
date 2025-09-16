export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="inline-block w-32 h-8 bg-muted rounded-full mb-6 animate-pulse"></div>
          <div className="w-96 h-12 bg-muted rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-80 h-6 bg-muted rounded mx-auto animate-pulse"></div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="mb-12">
          <div className="w-full h-14 bg-muted rounded-xl mb-6 animate-pulse"></div>
          
          {/* Filter Controls Skeleton */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="w-20 h-8 bg-muted rounded-lg animate-pulse"></div>
              <div className="w-24 h-8 bg-muted rounded-lg animate-pulse"></div>
              <div className="w-28 h-8 bg-muted rounded-lg animate-pulse"></div>
              <div className="w-32 h-8 bg-muted rounded-lg animate-pulse"></div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-32 h-10 bg-muted rounded-lg animate-pulse"></div>
              <div className="w-20 h-10 bg-muted rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden animate-pulse">
              {/* Image Skeleton */}
              <div className="aspect-[4/3] bg-muted"></div>
              
              {/* Content Skeleton */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="w-20 h-6 bg-muted rounded-full"></div>
                
                {/* Title */}
                <div className="w-full h-6 bg-muted rounded"></div>
                <div className="w-3/4 h-6 bg-muted rounded"></div>
                
                {/* Description */}
                <div className="space-y-2">
                  <div className="w-full h-4 bg-muted rounded"></div>
                  <div className="w-5/6 h-4 bg-muted rounded"></div>
                  <div className="w-4/6 h-4 bg-muted rounded"></div>
                </div>
                
                {/* Price and Button */}
                <div className="space-y-4 pt-4">
                  <div className="w-24 h-8 bg-muted rounded"></div>
                  <div className="w-full h-12 bg-muted rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-20 h-10 bg-muted rounded-lg animate-pulse"></div>
          <div className="w-10 h-10 bg-muted rounded-lg animate-pulse"></div>
          <div className="w-10 h-10 bg-muted rounded-lg animate-pulse"></div>
          <div className="w-10 h-10 bg-muted rounded-lg animate-pulse"></div>
          <div className="w-16 h-10 bg-muted rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
