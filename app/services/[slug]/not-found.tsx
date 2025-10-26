import Link from 'next/link';

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Service Not Found
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          The service you're looking for doesn't exist or has been removed.
          Please check the URL or explore our available services.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Services
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-300 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-12 text-sm text-gray-500">
          Need assistance? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our team</Link>
        </p>
      </div>
    </div>
  );
}
