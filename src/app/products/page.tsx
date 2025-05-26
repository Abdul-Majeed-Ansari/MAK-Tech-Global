import React from 'react';
import { Building2, Truck, CheckCircle, ArrowRight, Users, BarChart3, Shield, Zap } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: "Building Management System",
      subtitle: "Smart Building Solutions",
      description: "Comprehensive building management platform that integrates HVAC, lighting, security, and energy management systems for optimal efficiency and control.",
      icon: Building2,
      features: [
        "Real-time monitoring and control",
        "Energy optimization algorithms",
        "Automated maintenance scheduling",
        "Security system integration",
        "Mobile app control",
        "Advanced analytics dashboard"
      ],
      benefits: [
        { icon: BarChart3, text: "Reduce energy costs by up to 30%" },
        { icon: Shield, text: "Enhanced security and access control" },
        { icon: Zap, text: "Automated system optimization" },
        { icon: Users, text: "Centralized facility management" }
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "MAK 3PL",
      subtitle: "Third-Party Logistics Platform",
      description: "Advanced logistics management system designed to streamline warehouse operations, inventory tracking, and supply chain coordination for maximum efficiency.",
      icon: Truck,
      features: [
        "Warehouse management system",
        "Real-time inventory tracking",
        "Order fulfillment automation",
        "Multi-client management",
        "Integration with major carriers",
        "Advanced reporting and analytics"
      ],
      benefits: [
        { icon: BarChart3, text: "Improve operational efficiency by 40%" },
        { icon: Shield, text: "Enhanced inventory accuracy" },
        { icon: Zap, text: "Automated order processing" },
        { icon: Users, text: "Multi-tenant architecture" }
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#171717] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-[#00bcb7]">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Innovative solutions designed to transform your business operations and drive efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-[#00bcb7] hover:bg-[#038A87] text-white font-semibold rounded-lg transition-colors duration-200 group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-[#00bcb7] text-[#00bcb7] hover:bg-[#00bcb7] hover:text-white font-semibold rounded-lg transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {products.map((product, index) => (
              <div key={product.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                {/* Product Image */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00bcb7] to-[#038A87] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 lg:p-12 min-h-[400px] flex items-center justify-center">
                      <product.icon className="h-32 w-32 lg:h-48 lg:w-48 text-[#00bcb7] opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 w-full">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center px-4 py-2 bg-[#00bcb7]/10 dark:bg-[#00bcb7]/20 text-[#00bcb7] rounded-full text-sm font-medium mb-4">
                      {product.subtitle}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                      {product.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                          <benefit.icon className="h-5 w-5 text-[#00bcb7] flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {benefit.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-[#00bcb7] flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="inline-flex items-center justify-center px-6 py-3 bg-[#00bcb7] hover:bg-[#038A87] text-white font-semibold rounded-lg transition-colors duration-200 group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                      <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#00bcb7] hover:text-[#00bcb7] font-semibold rounded-lg transition-all duration-200">
                        Request Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00bcb7] to-[#038A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our solutions can streamline your operations and drive growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-[#00bcb7] hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#00bcb7] font-semibold rounded-lg transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default ProductsPage;