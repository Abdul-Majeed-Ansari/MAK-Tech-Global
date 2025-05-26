'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Code, 
  Eye,
  ArrowLeft,
  ArrowRight,
  Filter,
  Search,
  Star,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Zap
} from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration: string;
  teamSize: number;
  client: string;
  year: string;
  features: string[];
  challenges: string[];
  results: string[];
  status: 'completed' | 'ongoing' | 'maintenance';
}

interface PortfolioProps {
  isDarkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features",
      longDescription: "A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, AI-powered recommendations, and a sophisticated admin dashboard. The platform handles thousands of concurrent users and processes millions in transactions monthly.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      duration: "6 months",
      teamSize: 5,
      client: "RetailCorp Inc.",
      year: "2024",
      features: [
        "Real-time inventory management",
        "AI-powered product recommendations",
        "Multi-payment gateway integration",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
        "SEO optimized"
      ],
      challenges: [
        "Handling high concurrent users",
        "Real-time inventory synchronization",
        "Complex pricing algorithms",
        "Payment security compliance"
      ],
      results: [
        "40% increase in conversion rate",
        "99.9% uptime achieved",
        "50% reduction in page load time",
        "Handles 10,000+ concurrent users"
      ],
      status: "completed"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "Telemedicine app connecting patients with healthcare providers",
      longDescription: "A comprehensive telemedicine application that bridges the gap between patients and healthcare providers. Features include video consultations, prescription management, health record storage, appointment scheduling, and integration with wearable devices for real-time health monitoring.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      gallery: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb"
      ],
      liveUrl: "https://example-health.com",
      duration: "8 months",
      teamSize: 6,
      client: "HealthTech Solutions",
      year: "2024",
      features: [
        "HD video consultations",
        "Electronic health records",
        "Prescription management",
        "Wearable device integration",
        "Real-time notifications",
        "HIPAA compliant security"
      ],
      challenges: [
        "HIPAA compliance requirements",
        "Real-time video quality optimization",
        "Cross-platform compatibility",
        "Data encryption and security"
      ],
      results: [
        "95% patient satisfaction rate",
        "60% reduction in wait times",
        "HIPAA compliance certification",
        "100,000+ active users"
      ],
      status: "completed"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence platform with machine learning insights",
      longDescription: "An advanced business intelligence platform that leverages artificial intelligence to provide actionable insights from complex data sets. Features predictive analytics, automated reporting, real-time data visualization, and machine learning-driven recommendations for business optimization.",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb"
      ],
      liveUrl: "https://analytics-demo.com",
      duration: "10 months",
      teamSize: 8,
      client: "DataCorp Analytics",
      year: "2023",
      features: [
        "Predictive analytics engine",
        "Real-time data visualization",
        "Automated report generation",
        "Custom dashboard builder",
        "Machine learning insights",
        "Multi-source data integration"
      ],
      challenges: [
        "Processing large datasets efficiently",
        "Real-time data pipeline optimization",
        "Complex ML model deployment",
        "Scalable architecture design"
      ],
      results: [
        "70% faster decision making",
        "Processes 1TB+ data daily",
        "99.99% data accuracy",
        "Reduced operational costs by 30%"
      ],
      status: "ongoing"
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain technology",
      longDescription: "A revolutionary voting system built on blockchain technology ensuring complete transparency, security, and immutability of votes. The platform provides real-time results, voter verification, and comprehensive audit trails while maintaining voter privacy and preventing fraud.",
      category: "blockchain",
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      gallery: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1644143379190-08a5f3e8eb29?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb"
      ],
      duration: "12 months",
      teamSize: 4,
      client: "Democratic Solutions Ltd.",
      year: "2023",
      features: [
        "Immutable vote recording",
        "Real-time result tracking",
        "Voter identity verification",
        "Complete audit trail",
        "Mobile voting support",
        "Multi-language support"
      ],
      challenges: [
        "Ensuring voter privacy",
        "Scalability on blockchain",
        "User-friendly interface design",
        "Regulatory compliance"
      ],
      results: [
        "100% vote accuracy",
        "Zero fraud incidents",
        "90% user satisfaction",
        "Reduced election costs by 40%"
      ],
      status: "completed"
    },
    {
      id: 5,
      title: "IoT Smart Home System",
      description: "Comprehensive IoT platform for smart home automation",
      longDescription: "An integrated IoT ecosystem that transforms regular homes into intelligent living spaces. The system includes smart sensors, automated controls, energy management, security monitoring, and a central hub that learns user preferences to optimize comfort and efficiency.",
      category: "iot",
      technologies: ["Python", "React Native", "MQTT", "InfluxDB", "Raspberry Pi"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      gallery: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1572807462057-e8488c2e2e54?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb"
      ],
      liveUrl: "https://smarthome-demo.com",
      duration: "9 months",
      teamSize: 7,
      client: "SmartLiving Technologies",
      year: "2024",
      features: [
        "Voice control integration",
        "Energy consumption monitoring",
        "Automated lighting and climate",
        "Security system integration",
        "Remote access and control",
        "Predictive maintenance alerts"
      ],
      challenges: [
        "Device interoperability",
        "Real-time data processing",
        "Network security",
        "Battery optimization for sensors"
      ],
      results: [
        "35% energy savings achieved",
        "99.8% system uptime",
        "200+ connected devices supported",
        "Improved home security by 80%"
      ],
      status: "maintenance"
    },
    {
      id: 6,
      title: "Fintech Payment Gateway",
      description: "Secure payment processing system for financial institutions",
      longDescription: "A robust payment gateway solution designed for financial institutions, supporting multiple payment methods, currencies, and compliance requirements. Features advanced fraud detection, real-time transaction monitoring, and seamless integration with existing banking systems.",
      category: "fintech",
      technologies: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      gallery: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb"
      ],
      duration: "14 months",
      teamSize: 9,
      client: "GlobalPay Financial",
      year: "2023",
      features: [
        "Multi-currency support",
        "Advanced fraud detection",
        "PCI DSS compliance",
        "Real-time transaction monitoring",
        "API-first architecture",
        "Comprehensive reporting"
      ],
      challenges: [
        "Meeting strict compliance requirements",
        "Handling high transaction volumes",
        "Ensuring 99.99% uptime",
        "Advanced security implementation"
      ],
      results: [
        "Processes $100M+ monthly",
        "99.99% uptime achieved",
        "0.001% fraud rate",
        "PCI DSS Level 1 certified"
      ],
      status: "completed"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { value: 'web', label: 'Web Apps', icon: <Monitor className="w-4 h-4" /> },
    { value: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { value: 'ai', label: 'AI/ML', icon: <Zap className="w-4 h-4" /> },
    { value: 'blockchain', label: 'Blockchain', icon: <Database className="w-4 h-4" /> },
    { value: 'iot', label: 'IoT', icon: <Code className="w-4 h-4" /> },
    { value: 'fintech', label: 'Fintech', icon: <Star className="w-4 h-4" /> }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = React.useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = React.useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'Escape') closeProject();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextImage, prevImage]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Showcasing innovative solutions and cutting-edge technology implementations 
            that have transformed businesses and delighted users worldwide.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
                    filter === category.value
                      ? 'bg-[#00bcb7] text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00bcb7] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-800"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                    width={800}
                    height={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#00bcb7]" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-sm mb-4 line-clamp-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#00bcb7]" />
                    <span className="text-gray-500 dark:text-gray-400">
                      {project.teamSize} members
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#00bcb7]" />
                    <span className="text-gray-500 dark:text-gray-400">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
            <h3 className="text-xl font-medium mb-2 text-gray-600 dark:text-gray-300">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
              onClick={closeProject}
            />

            {/* Modal */}
            <div className="relative w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900">
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Gallery */}
              <div className="relative h-64 md:h-96">
                <Image
                    width={800}
                    height={500}
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedProject.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                      </span>
                    </div>

                    <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                      {selectedProject.longDescription}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                          Client
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedProject.client}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                          Duration
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedProject.duration}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                          Team Size
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedProject.teamSize} members
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                          Year
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedProject.year}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#00bcb7] text-white rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-[#00bcb7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#038A87] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          View Live
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-colors border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <Github className="w-5 h-5" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-[#00bcb7] rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                        Challenges Overcome
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                        Results & Impact
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;