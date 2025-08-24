export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Apply for RCS Messaging
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Ready to transform your business communication? Complete our application to get started with enterprise-grade RCS messaging.
          </p>
        </div>
      </section>

      {/* Embedded Funnel Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-xl overflow-hidden backdrop-blur-sm">
            {/* Loading fallback */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://launch.100kaiagency.com/apply-page"
                className="absolute top-0 left-0 w-full h-full border-0"
                style={{ minHeight: '800px' }}
                loading="lazy"
                title="bMessage Application Form"
                allow="encrypted-media; microphone; camera"
              />
            </div>
          </div>
          
          {/* Support Information */}
          <div className="mt-12 text-center">
            <div className="bg-gray-900/20 border border-gray-700/20 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Need Help?
              </h3>
              <p className="text-gray-400 mb-6">
                Having trouble with the application form? Our team is here to assist you through the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@bmessage.com" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+1-555-0123" 
                  className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

