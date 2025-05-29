const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#00bcb7]/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#00bcb7] rounded-full"></div>
            <span className="text-[#00bcb7] font-medium text-sm">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The following terms and conditions apply to MAKTech Globals platform and distribution of software services.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: May 27, 2025</p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Term 1 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Acceptance of Terms</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    By using MAK Tech Globals platform, you agree to comply with and be bound by these Terms and
                    Conditions. If you disagree with any part of the terms, do not use our platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Term 2 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Use of Services</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    You agree not to use our services for any unlawful or prohibited activities. You shall not attempt
                    to gain unauthorized access to any portion of the platform or its systems.
                  </p>
                </div>
              </div>
            </section>

            {/* Term 3 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Intellectual Property</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    All content, logos, trademarks, and materials on the website are the property of MAKTech Global
                    unless otherwise stated. You may not use or reproduce any content without prior written consent.
                  </p>
                </div>
              </div>
            </section>

            {/* Term 4 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">User Content</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you post, upload, or submit content to our platform, you grant us a non-exclusive, worldwide,
                    royalty-free license to use, reproduce, and display such content in connection with our services.
                  </p>
                </div>
              </div>
            </section>

            {/* Term 5 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Termination</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We reserve the right to terminate or suspend access to our services for any reason, including
                    violation of these Terms.
                  </p>
                </div>
              </div>
            </section>

            {/* Term 6 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Limitation of Liability</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In no event shall MAKTech Global be liable for any indirect, incidental, or consequential damages
                    arising out of or in connection with the use of our platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Term 7 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Governing Law</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the applicable
                    governing jurisdiction.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-[#00bcb7]/10 to-[#009a96]/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About These Terms?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about these Terms and Conditions, please dont hesitate to contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@maktechglobal.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00bcb7] text-white font-semibold rounded-lg hover:bg-[#009a96] transition-colors"
            >
              Contact Legal Team
            </a>
            <a
              href="/privacy"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#00bcb7] text-[#00bcb7] font-semibold rounded-lg hover:bg-[#00bcb7] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
