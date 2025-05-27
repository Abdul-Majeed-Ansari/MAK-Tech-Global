const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-amber-700 dark:text-amber-300 font-medium text-sm">Important Notice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Legal Disclaimer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Important legal information regarding the use of MAKTech Globals platforms, services, and content.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Effective Date: May 27, 2025</p>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-400 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-xs">!</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notice</h3>
              <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                Please read this disclaimer carefully before using our services. By accessing and using MAKTech Globals
                platforms, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
              </p>
            </div>
          </div>
        </div>

        {/* Main Disclaimer Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* General Information Disclaimer */}
            <section className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">General Information</h2>
                  <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none">
                    <p className="mb-4">
                      MAKTech Global provides information, products, and services through its digital platforms for
                      general informational and business purposes only. While we strive to keep the content accurate and
                      up to date, MAKTech Global makes no representations or warranties of any kind, express or implied,
                      about the completeness, accuracy, reliability, suitability, or availability of our services or
                      related information.
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Any reliance you place on such information is therefore strictly at your own risk.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Modifications */}
            <section className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Modifications</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    We reserve the right to modify, suspend, or discontinue any aspect of our platform at any time
                    without prior notice or liability.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Disclaimers */}
            <section className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Additional Disclaimers</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Professional Advice</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        The information provided on our platforms does not constitute professional, legal, financial, or
                        technical advice. Always consult with qualified professionals for specific guidance.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Content</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We may include links to third-party websites or content. MAKTech Global is not responsible for
                        the accuracy, content, or practices of external sites or services.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Availability</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        While we strive for continuous service availability, we cannot guarantee uninterrupted access to
                        our platforms and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                      Limitation of Liability
                    </h3>
                    <p className="text-red-800 dark:text-red-200 leading-relaxed">
                      In no event shall MAKTech Global, its directors, employees, or affiliates be liable for any
                      direct, indirect, incidental, special, consequential, or punitive damages arising from your use of
                      our services or inability to use our services, even if we have been advised of the possibility of
                      such damages.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-[#00bcb7]/10 to-[#009a96]/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About This Disclaimer?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about this Legal Disclaimer or need clarification on any terms, please contact our
            legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@maktechglobal.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00bcb7] text-white font-semibold rounded-lg hover:bg-[#009a96] transition-colors"
            >
              Contact Legal Team
            </a>
            <a
              href="/terms"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#00bcb7] text-[#00bcb7] font-semibold rounded-lg hover:bg-[#00bcb7] hover:text-white transition-colors"
            >
              View Terms & Conditions
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
