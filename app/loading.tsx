export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-primary-200 rounded-full"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="text-secondary-600 font-medium">
          <span className="inline-block animate-pulse">Loading</span>
          <span className="inline-block animate-pulse animation-delay-200">.</span>
          <span className="inline-block animate-pulse animation-delay-400">.</span>
          <span className="inline-block animate-pulse animation-delay-600">.</span>
        </div>

        {/* Screen Reader Text */}
        <span className="sr-only">Loading content, please wait...</span>
      </div>
    </div>
  )
}
