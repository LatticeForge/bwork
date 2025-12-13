export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header Skeleton */}
      <div className="h-20 bg-white border-b border-secondary-200"></div>

      {/* Service Page Skeleton */}
      <div className="container-custom section-padding">
        {/* Breadcrumb Skeleton */}
        <div className="mb-8">
          <div className="h-4 w-48 bg-secondary-200 rounded animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-6">
          <div className="h-12 w-3/4 bg-secondary-200 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-1/2 bg-secondary-200 rounded animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="h-4 bg-secondary-200 rounded animate-pulse"></div>
            <div className="h-4 bg-secondary-200 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-secondary-200 rounded animate-pulse"></div>
            <div className="h-4 bg-secondary-200 rounded animate-pulse"></div>
            <div className="h-4 w-4/6 bg-secondary-200 rounded animate-pulse"></div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="h-64 bg-secondary-200 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Features Grid Skeleton */}
        <div className="mt-16">
          <div className="h-8 w-48 bg-secondary-200 rounded animate-pulse mb-8"></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-32 bg-secondary-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Screen Reader Text */}
      <span className="sr-only">Loading service details, please wait...</span>
    </div>
  )
}
