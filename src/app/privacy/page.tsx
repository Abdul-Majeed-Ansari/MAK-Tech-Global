import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#00bcb7]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">🔐</span>
            <span className="text-[#00bcb7] font-medium text-sm">Privacy & Security</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MAKTech Global is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Effective Date: June 1, 2025</p>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 md:p-12">
            
            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Information We Collect</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Personal Information:</strong> Name, email address, contact details, and other information you provide.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Usage Data:</strong> Pages visited, time spent, browser type, IP address, and cookies.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Communication Data:</strong> Any messages or interactions you have with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">How We Use Your Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We use your data to:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Provide and maintain our services.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Personalize user experience.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Communicate with you regarding updates, offers, or support.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Improve our platform and conduct analytics.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Comply with legal obligations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Sharing of Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We do not sell your personal information. We may share data with:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Trusted service providers who assist in our operations.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Law enforcement or regulatory authorities when required by law.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Business partners with your consent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Data Security</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Your Rights</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Depending on your jurisdiction, you may have rights to:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Access, update, or delete your personal data.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">Withdraw consent.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">File a complaint with a data protection authority.</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>To exercise your rights:</strong> Contact us at privacy@maktechglobal.com
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-[#00bcb7] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Cookies</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We use cookies to enhance your browsing experience. You may disable cookies through your browser settings.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-[#00bcb7]/10 to-[#009a96]/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About Your Privacy?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We are committed to protecting your privacy. If you have any questions about this Privacy Policy or your data rights, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:privacy@maktechglobal.com" 
               className="inline-flex items-center justify-center px-6 py-3 bg-[#00bcb7] text-white font-semibold rounded-lg hover:bg-[#009a96] transition-colors">
              Contact Privacy Team
            </a>
            <a href="/terms" 
               className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#00bcb7] text-[#00bcb7] font-semibold rounded-lg hover:bg-[#00bcb7] hover:text-white transition-colors">
              View Terms & Conditions
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy