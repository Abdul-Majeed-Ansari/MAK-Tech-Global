'use client'
import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Shield,
  Users,
  Zap,
  BookOpen,
  Award,
  Globe,
  Target,
} from "lucide-react";
import buildingManagementImage from "../../public/img/Building.webp"; // Adjust the path as necessary
import MAKProductlImage from "../../public/img/3pl.png";
import IeltsImage from "../../public/img/ielts.jpg";
import { useRouter } from "next/navigation";
// import MAKEduImage from '../../public/img/mak-edu.png' // You'll need to add this image

const Products = () => {

  const products = [
    {
      id: 1,
      title: "MAK RES / BMS",
      subtitle: "Smart Building Solutions",
      description:
        "Comprehensive building management platform that integrates HVAC, lighting, security, and energy management systems for optimal efficiency and control.",
      icon: buildingManagementImage,
      features: [
        "Real-time monitoring and control",
        "Energy optimization algorithms",
        "Automated maintenance scheduling",
        "Security system integration",
        "Mobile app control",
        "Advanced analytics dashboard",
      ],
      benefits: [
        { icon: BarChart3, text: "Reduce energy costs by up to 30%" },
        { icon: Shield, text: "Enhanced security and access control" },
        { icon: Zap, text: "Automated system optimization" },
        { icon: Users, text: "Centralized facility management" },
      ],
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "MAK 3PL",
      subtitle: "Third-Party Logistics Platform",
      description:
        "Advanced logistics management system designed to streamline warehouse operations, inventory tracking, and supply chain coordination for maximum efficiency.",
      icon: MAKProductlImage,
      features: [
        "Warehouse management system",
        "Real-time inventory tracking",
        "Order fulfillment automation",
        "Multi-client management",
        "Integration with major carriers",
        "Advanced reporting and analytics",
      ],
      benefits: [
        { icon: BarChart3, text: "Improve operational efficiency by 40%" },
        { icon: Shield, text: "Enhanced inventory accuracy" },
        { icon: Zap, text: "Automated order processing" },
        { icon: Users, text: "Multi-tenant architecture" },
      ],
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "MAK IELTS",
      subtitle: "IELTS Success Partner",
      description:
        "Your trusted companion for mastering the IELTS exam and unlocking global opportunities. Modern, flexible, and impactful learning tailored to meet your international goals.",
      icon: IeltsImage,
      features: [
        "Personalized study paths",
        "Real-time progress insights",
        "Expert guidance and strategies",
        "Interactive practice sessions",
        "Smart technology integration",
        "Comprehensive skill building",
      ],
      benefits: [
        { icon: BookOpen, text: "Proven IELTS preparation methods" },
        { icon: Award, text: "Achieve your target band score" },
        { icon: Globe, text: "Support for global opportunities" },
        { icon: Target, text: "Personalized learning experience" },
      ],
      image: "/api/placeholder/600/400",
    },
  ];

  const router = useRouter();
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Product Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00bcb7] to-[#038A87] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  {/* <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]"> */}
                  {product.icon ? (
                    <Image
                      src={product.icon}
                      alt={product.title}
                      width={524}
                      height={552}
                      quality={100}
                      // unoptimized
                      className="rounded-xl"
                    />
                  ) : (
                    // Placeholder for MAK EDU until image is available
                    <div className="flex flex-col items-center justify-center text-[#00bcb7] space-y-4">
                      <BookOpen className="h-24 w-24" />
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">{product.title}</h3>
                        <p className="text-lg opacity-80">{product.subtitle}</p>
                      </div>
                    </div>
                  )}
                  {/* </div> */}
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
                      <div
                        key={idx}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                      >
                        <benefit.icon className="h-5 w-5 text-[#00bcb7] flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  {product.features && product.id !== 3 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-[#00bcb7] flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={()=> router.push('/products')} className="inline-flex items-center justify-center px-6 py-3 bg-[#00bcb7] hover:bg-[#038A87] text-white font-semibold rounded-lg transition-colors duration-200 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <button onClick={(()=> router.push('/contactus'))} className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#00bcb7] hover:text-[#00bcb7] font-semibold rounded-lg transition-all duration-200">
                      {product.id === 3 ? "Start Your Journey" : "Request Demo"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
