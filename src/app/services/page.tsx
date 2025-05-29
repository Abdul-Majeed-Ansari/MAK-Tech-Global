'use client';

import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Code, 
  Users, 
  Headphones, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Award,
  TrendingUp,
  Layers,
  Cpu,
  Palette,
  Search,
  BarChart3,
  Lock,
  Wrench,
  Lightbulb,
  Target,
  MessageSquare,
  Play,
  X,
  Sun,
  Moon,
  BadgeCheck
} from 'lucide-react';


interface Service {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  category: 'development' | 'design' | 'consulting' | 'support';
  popular?: boolean;
}

interface Process {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('development');
  const [showVideo, setShowVideo] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark');
//   };

  const services: Service[] = [
    {
      id: 1,
      title: "Web Application Development",
      description: "Custom web applications built with modern technologies for scalability and performance.",
      longDescription: "We create powerful, scalable web applications using cutting-edge technologies like React, Next.js, Node.js, and cloud platforms. Our solutions are designed to handle high traffic, provide excellent user experience, and integrate seamlessly with your existing systems.",
      icon: <Monitor className="w-8 h-8" />,
      features: [
        "Responsive design for all devices",
        "Progressive Web App (PWA) capabilities",
        "Real-time data synchronization",
        "Advanced security implementation",
        "SEO optimization",
        "Performance optimization",
        "Third-party integrations",
        "Analytics and reporting"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      deliverables: [
        "Fully functional web application",
        "Source code and documentation",
        "Deployment and hosting setup",
        "User training materials",
        "3 months free support"
      ],
      timeline: "8-16 weeks",
      category: "development",
      popular: true
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      longDescription: "Transform your ideas into powerful mobile applications that engage users and drive business growth. We develop both native and cross-platform solutions using React Native, Flutter, and native technologies.",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "iOS and Android compatibility",
        "Native performance optimization",
        "Push notifications",
        "Offline functionality",
        "App Store optimization",
        "User analytics integration",
        "Social media integration",
        "Payment gateway integration"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "MongoDB"],
      deliverables: [
        "Published mobile application",
        "App Store submissions",
        "Source code repository",
        "User documentation",
        "6 months maintenance"
      ],
      timeline: "12-20 weeks",
      category: "development"
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with payment processing, inventory management, and analytics.",
      longDescription: "Build powerful online stores that convert visitors into customers. Our e-commerce solutions include everything from product catalogs to secure payment processing and order management.",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Custom shopping cart system",
        "Multi-payment gateway support",
        "Inventory management",
        "Order tracking system",
        "Customer management",
        "Analytics dashboard",
        "Mobile-responsive design",
        "SEO-friendly architecture"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "AWS"],
      deliverables: [
        "Complete e-commerce website",
        "Admin dashboard",
        "Payment system setup",
        "Training and documentation",
        "90 days support"
      ],
      timeline: "10-18 weeks",
      category: "development"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences.",
      longDescription: "Create beautiful, functional designs that users love. Our design process focuses on user research, wireframing, prototyping, and testing to ensure optimal user experience.",
      icon: <Palette className="w-8 h-8" />,
      features: [
        "User research and analysis",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design system creation",
        "Responsive design",
        "Accessibility compliance",
        "Interactive prototypes"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
      deliverables: [
        "Complete design system",
        "High-fidelity mockups",
        "Interactive prototypes",
        "Design specifications",
        "Asset library"
      ],
      timeline: "6-12 weeks",
      category: "design"
    },
    {
  id: 6,
  title: "Logo Design",
  description: "Crafting memorable logos that capture your brand's identity and leave a lasting impression.",
  longDescription: "We specialize in designing unique, versatile logos that communicate your brand’s values and set you apart. Our process includes brand discovery, concept development, and design refinement to ensure a strong, cohesive visual identity.",
  icon: <BadgeCheck className="w-8 h-8" />,
  features: [
    "Brand discovery and strategy",
    "Concept development",
    "Typography and color exploration",
    "Multiple logo concepts",
    "Revision cycles",
    "Scalable vector formats",
    "Logo usage guidelines",
    "Monogram and icon variations"
  ],
  technologies: ["Adobe Illustrator", "Affinity Designer", "CorelDRAW", "Figma", "Procreate"],
  deliverables: [
    "Primary and secondary logos",
    "Black-and-white and color versions",
    "Logo usage guide",
    "Vector and raster files (AI, EPS, SVG, PNG)",
    "Favicon and social icons"
  ],
  timeline: "2-4 weeks",
  category: "design"
},
    {
      id: 7,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      longDescription: "Modernize your infrastructure with cloud solutions that provide scalability, reliability, and cost-effectiveness. We help you migrate to the cloud and optimize your operations.",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code",
        "Auto-scaling setup",
        "Security configuration",
        "Monitoring and logging",
        "Backup and disaster recovery",
        "Cost optimization",
        "Performance tuning"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      deliverables: [
        "Cloud infrastructure setup",
        "Migration documentation",
        "Monitoring dashboards",
        "Security audit report",
        "Cost optimization plan"
      ],
      timeline: "8-14 weeks",
      category: "consulting"
    },
    {
      id: 8,
      title: "Digital Marketing & SEO",
      description: "Drive traffic and conversions with comprehensive digital marketing strategies.",
      longDescription: "Boost your online presence with data-driven marketing strategies, SEO optimization, and conversion rate optimization that deliver measurable results.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "SEO audit and optimization",
        "Content marketing strategy",
        "Social media management",
        "Pay-per-click advertising",
        "Email marketing campaigns",
        "Analytics and reporting",
        "Conversion optimization",
        "Brand positioning"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Mailchimp", "HubSpot", "SEMrush"],
      deliverables: [
        "Marketing strategy document",
        "SEO optimization report",
        "Campaign setup and management",
        "Monthly performance reports",
        "ROI analysis"
      ],
      timeline: "4-8 weeks setup",
      category: "consulting"
    },
    {
      id: 9,
      title: "Technical Support & Maintenance",
      description: "Ongoing support and maintenance services to keep your applications running smoothly.",
      longDescription: "Ensure your applications stay secure, updated, and performing optimally with our comprehensive support and maintenance services.",
      icon: <Headphones className="w-8 h-8" />,
      features: [
        "24/7 monitoring and support",
        "Regular security updates",
        "Performance optimization",
        "Bug fixes and patches",
        "Feature enhancements",
        "Backup management",
        "Uptime monitoring",
        "Technical documentation"
      ],
      technologies: ["Various based on your stack", "Monitoring tools", "Security scanners"],
      deliverables: [
        "Monthly maintenance reports",
        "Performance analytics",
        "Security audit reports",
        "Backup verification",
        "Update documentation"
      ],
      timeline: "Ongoing",
      category: "support"
    }
  ];

  const processes: Process[] = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We understand your requirements, analyze your business needs, and create a detailed project roadmap.",
      icon: <Search className="w-6 h-6" />,
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the final product.",
      icon: <Palette className="w-6 h-6" />,
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Build your solution using best practices, with continuous testing and quality assurance.",
      icon: <Code className="w-6 h-6" />,
      duration: "6-12 weeks"
    },
    {
      step: 4,
      title: "Deployment & Launch",
      description: "Deploy your application to production with proper monitoring and performance optimization.",
      icon: <Zap className="w-6 h-6" />,
      duration: "1-2 weeks"
    },
    {
      step: 5,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure optimal performance and security.",
      icon: <Wrench className="w-6 h-6" />,
      duration: "Ongoing"
    }
  ];

  const categories = [
    { id: 'development', label: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'design', label: 'Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'consulting', label: 'Consulting', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'support', label: 'Support', icon: <Headphones className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: <Target className="w-8 h-8" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8" /> }
  ];

  const filteredServices = services.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Theme Toggle Button */}
      {/* <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-40 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button> */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#00bcb7] to-[#038A87] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Transform your ideas into powerful digital solutions with our comprehensive 
              software development and technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button 
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-2 bg-white text-[#00bcb7] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00bcb7] transition-colors"
                aria-label="Watch our company story video"
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </button> */}
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00bcb7] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00bcb7] transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00bcb7] text-white rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What We Offer
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              From concept to deployment, we provide end-to-end solutions that drive your business forward
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#00bcb7] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`relative group cursor-pointer rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-800 ${
                  service.popular ? 'ring-2 ring-[#00bcb7]' : ''
                }`}
                onClick={() => openServiceModal(service)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#00bcb7] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#00bcb7] text-white rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                      Starting at {service.startingPrice}
                    </p> */}
                  </div>
                </div>

                <p className="text-base mb-6 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#00bcb7] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {service.timeline}
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#00bcb7] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00bcb7]"></div>

            <div className="space-y-12">
              {processes.map((process, index) => {
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    <div className="flex-1">
                      <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-[#00bcb7] text-white rounded-full flex items-center justify-center font-bold">
                            {process.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {process.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {process.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {process.description}
                        </p>
                      </div>
                    </div>
              
                    <div className="hidden lg:flex w-16 h-16 bg-[#00bcb7] text-white rounded-full items-center justify-center">
                      {process.icon}
                    </div>
              
                    <div className="flex-1 lg:block hidden"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Lets discuss your requirements and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#00bcb7] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#038A87] transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-[#00bcb7] text-[#00bcb7] px-8 py-4 rounded-lg font-semibold hover:bg-[#00bcb7] hover:text-white transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
              onClick={closeServiceModal}
            />

            <div className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900">
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 max-h-96 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#00bcb7] text-white rounded-lg flex items-center justify-center">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedService.title}
                    </h2>
                    {/* <p className="text-lg text-gray-500 dark:text-gray-400">
                      Starting at {selectedService.startingPrice}
                    </p> */}
                  </div>
                </div>

                <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                  {selectedService.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-5 h-5 text-[#00bcb7] flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#00bcb7] text-white rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="bg-[#00bcb7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#038A87] transition-colors">
                    Get Quote
                  </button>
                  <button className="border-2 border-[#00bcb7] text-[#00bcb7] px-6 py-3 rounded-lg font-semibold hover:bg-[#00bcb7] hover:text-white transition-colors">
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={() => setShowVideo(false)}
          />
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-75" />
                <p className="text-xl">Video content would be embedded here</p>
                <p className="text-gray-400 mt-2">Integration with Vimeo, YouTube, or custom video player</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;