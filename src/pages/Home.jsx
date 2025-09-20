import React, { useState, useEffect } from "react";
import {
  Eye,
  Camera,
  MapPin,
  Home,
  Building2,
  School,
  LucideHeadphones,
  Warehouse,
  Hotel,
  ShoppingBag,
  Check,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Star,
  Globe,
  X,
  Zap,
  Shield,
  Clock,
  Sparkles,
  MousePointer,
  Monitor,
  Smartphone,
  CheckCircle2,
  Award,
  TrendingUp,
  EyeOff,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Copy,
  Menu,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import BookingModal from "../components/BookingModal";
import PanoramaViewer from "../components/PanoramaViewer";

const CodeketLanding = () => {
  const [theme, setTheme] = useState("codeketlight");
  const [showSampleTour, setShowSampleTour] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [copied, setCopied] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showFullscreenHint, setShowFullscreenHint] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCopy = (textToCopy, type) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [theme]);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (showSampleTour && isMobile) {
      setShowFullscreenHint(true);
      const timer = setTimeout(() => {
        setShowFullscreenHint(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSampleTour, isMobile]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "codeketdark" ? "codeketlight" : "codeketdark"
    );
  };

  // Updated with brand color gradients
  const features = [
    {
      icon: Camera,
      title: "Cinema-Grade 360° Capture",
      desc: "Professional equipment delivering pristine visual quality that rivals premium real estate marketing",
      gradient: "from-[#007AFF] to-[#00E6E6]",
    },
    {
      icon: MousePointer,
      title: "Fluid Navigation Experience",
      desc: "Seamless transitions between spaces with intuitive controls that feel natural and responsive",
      gradient: "from-[#00E6E6] to-[#8A2BE2]",
    },
    {
      icon: Globe,
      title: "Instant Web Deployment",
      desc: "Production-ready website that loads fast and works flawlessly across all devices and browsers",
      gradient: "from-[#8A2BE2] to-[#007AFF]",
    },
    {
      icon: Shield,
      title: "Complete Digital Ownership",
      desc: "Full rights to your virtual tour with no recurring fees, vendor lock-in, or hidden restrictions",
      gradient: "from-[#1E2A38] to-[#0A182E]",
    },
  ];

  // Updated with consistent colors
  const industries = [
    {
      icon: Building2,
      title: "Enterprise Real Estate",
      desc: "Commercial properties & corporate spaces",
      color: "text-[#007AFF]",
    },
    {
      icon: Home,
      title: "Luxury Residential",
      desc: "High-end homes & exclusive properties",
      color: "text-[#00E6E6]",
    },
    {
      icon: Hotel,
      title: "Hospitality & Tourism",
      desc: "Hotels, resorts & event venues",
      color: "text-[#8A2BE2]",
    },
    {
      icon: School,
      title: "Educational Institutions",
      desc: "Universities, schools & training centers",
      color: "text-[#00E6E6]",
    },
    {
      icon: Warehouse,
      title: "Industrial Facilities",
      desc: "Warehouses, factories & logistics hubs",
      color: "text-[#007AFF]",
    },
    {
      icon: ShoppingBag,
      title: "Retail & Entertainment",
      desc: "Showrooms, galleries & experience centers",
      color: "text-[#8A2BE2]",
    },
  ];

  // Updated with brand gradients
  const packages = [
    {
      name: "Starter",
      subtitle: "Best for smaller apartments",
      propertyType: "1–3 bedroom flats",
      price: "₦80,000",
      features: [
        "Up to 3 key areas (living room, kitchen, bedroom)",
        "Professional 360° photography",
        "Mobile & desktop friendly tour link",
        "Branded with your agency name/logo",
        "Includes up to 1 round of adjustments",
      ],
      popular: false,
      gradient: "from-[#0A182E] to-[#1E2A38]",
    },
    {
      name: "Professional",
      subtitle: "Most popular choice for agents",
      propertyType: "Luxury apartments & duplexes",
      price: "₦150,000",
      features: [
        "4–8 areas covered (entire property)",
        "Smooth navigation & interactive hotspots",
        "Custom branding with agency colors & logo",
        "Buyer engagement tools (info tags, links)",
        "Simple analytics dashboard to track views",
        "Includes up to 2 rounds of adjustments",
      ],
      popular: true,
      gradient: "from-[#007AFF] to-[#00E6E6]",
    },
    {
      name: "Premium",
      subtitle: "Perfect for large homes & estates",
      propertyType: "Large duplexes & mini-estates",
      price: "₦250,000",
      features: [
        "Up to 15 rooms + outdoor areas",
        "Cinema-grade photography & multi-floor navigation",
        "Drone 360 entry shot (optional)",
        "Floor plan integration",
        "Lead capture form for buyer inquiries",
        "Includes up to 3 rounds of adjustments",
        "Priority client support",
      ],
      popular: false,
      gradient: "from-[#8A2BE2] to-[#007AFF]",
    },
    {
      name: "Enterprise",
      subtitle: "For estates, hotels & commercial projects",
      propertyType: "Large complexes & multi-unit developments",
      price: "₦400,000",
      features: [
        "16+ rooms or multiple buildings",
        "Ultra-high resolution 360° coverage",
        "Complex navigation system",
        "White-label solution (your branding only)",
        "Dedicated project manager",
        "Custom integrations with your website or CRM",
        "Unlimited adjustments until launch",
      ],
      popular: false,
      gradient: "from-[#00E6E6] to-[#8A2BE2]",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "We Visit Your Location",
      desc: "Professional team captures high-quality 360° photos of every important area",
    },
    {
      step: "02",
      title: "We Build the Walkthrough",
      desc: "Create an interactive tour with seamless room-to-room navigation",
    },
    {
      step: "03",
      title: "We Deliver the Tour",
      desc: "Receive a complete webpage ready for your clients to explore online",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24hr", label: "Average Delivery", icon: Clock },
    { number: "100%", label: "Mobile Compatible", icon: Smartphone },
  ];

  return (
    <div className={`min-h-screen overflow-x-hidden ${theme}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-base-100/10 border-b border-base-300/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/virtual-tours-logo.png"
                alt="Codeket Logo"
                className="w-10 h-10 rounded-xl object-contain"
              />{" "}
              <div>
                <div className="text-2xl font-bold text-codeket-electricBlue">
                  Codeket
                </div>
                <div className="text-xs text-base-content/60 -mt-1">
                  Virtual Tours
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-base-content/80 hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-base-content/80 hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#process"
                className="text-base-content/80 hover:text-primary transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-base-content/80 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Right-side controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="btn btn-circle btn-ghost"
              >
                {theme === "codeketlight" ? (
                  <Moon className="w-6 h-6" />
                ) : (
                  <Sun className="w-6 h-6" />
                )}
              </button>

              <button
                className="btn btn-primary btn-sm px-8 hidden md:flex"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <LucideHeadphones className="w-5 h-5 mr-2" />
                Let's Talk
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="btn btn-circle btn-outline btn-ghost"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedPlan(null);
        }}
        selectedPlan={selectedPlan}
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] bg-base-100/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto px-6 py-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Codeket
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-circle btn-outline btn-ghost"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-center">
              <a
                href="#features"
                className="text-3xl font-bold text-base-content/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-3xl font-bold text-base-content/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#process"
                className="text-3xl font-bold text-base-content/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-3xl font-bold text-base-content/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            <div className="text-center pb-8">
              <button
                className="btn btn-primary btn-lg px-8"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
              >
                <Camera className="w-5 h-5 mr-2" />
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - FIXED for mobile */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <PanoramaViewer />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content - Fixed container */}
        <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex my-5 items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 sm:px-6 py-3 mb-6 sm:mb-8 hover:scale-105 transition-transform">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-white/60" />
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Premium Virtual Tour Technology
                </span>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-ping"></div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
                <span className="text-white drop-shadow-2xl">
                  Let Your Clients Walk Through Your Space
                </span>
                <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  From Anywhere
                </div>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200 px-4">
                Interactive 360° virtual tours for buildings, homes, schools,
                and warehouses. Give people the power to explore your property
                room by room — from their phone or computer.
              </p>

              {/* CTAs - FIXED for mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
                <button
                  className="btn btn-primary btn-sm sm:btn-md lg:btn-lg px-6 sm:px-8 w-full sm:w-auto min-h-[3rem] text-sm sm:text-base"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  <Camera className="w-4 sm:w-5 h-4 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">Book a Walkthrough Project</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 flex-shrink-0" />
                </button>
                <a
                  href="#sample-tour"
                  className="btn bg-black/35 border-cyan-400 text-cyan-400 border-2 btn-sm sm:btn-md lg:btn-lg px-6 sm:px-8 w-full sm:w-auto min-h-[3rem] text-sm sm:text-base"
                >
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">View Sample Tour</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="bg-black/0 backdrop-blur-sm  rounded-2xl mb-4 p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center group hover:scale-105 transition-transform"
                    >
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-info rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:rotate-6 transition-transform">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary-content" />
                      </div>
                      <div className="text-lg sm:text-2xl font-bold text-info">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-white/80">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-secondary/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold text-primary">
                PREMIUM FEATURES
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              What you're Getting
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              A fully interactive digital experience of your physical space,
              created with professional precision
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="relative overflow-hidden bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 border border-base-300/20 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-base-content/70 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Built for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto text-center">
              From luxury real estate to industrial complexes
              <br /> If your space matters - we make it easy to show it off
              professionally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-base-100/50 backdrop-blur-sm border border-base-300/20 rounded-2xl p-6 hover:bg-base-100 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-base-200 to-base-300 group-hover:scale-110 transition-transform ${industry.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                          {industry.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold text-primary">
                TRANSPARENT PRICING
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                One Price.
              </span>{" "}
              Yours Forever.
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              No subscriptions. No hidden fees. No vendor lock-in. Just premium
              virtual tours that belong entirely to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative group ${pkg.popular ? "lg:-mt-8" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    pkg.popular
                      ? "bg-gradient-to-b from-primary/5 to-secondary/5 border-primary/30 shadow-xl"
                      : "bg-base-100 border-base-300/20 hover:border-primary/30"
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10 p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-base-content/60 text-sm mb-6">
                        {pkg.subtitle}
                      </p>
                      <div className="text-4xl font-bold text-primary mb-2">
                        {pkg.price}
                      </div>
                      <p className="text-base-content/70">{pkg.propertyType}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-base-content/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`btn btn-block ${
                        pkg.popular
                          ? "btn-primary shadow-lg hover:shadow-xl"
                          : "btn-outline hover:btn-primary"
                      } transition-all duration-300 hover:scale-105`}
                      onClick={() => {
                        setSelectedPlan(pkg.name);
                        setIsBookingModalOpen(true);
                      }}
                    >
                      Choose {pkg.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-8 py-4">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-green-600 dark:text-green-400">
                100% Satisfaction Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-base-content/70">
              Fast, clean, and hassle-free process
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-base-content/70 max-w-sm mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Tour Section  */}
      <section
        className="py-32 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden"
        id="sample-tour"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            See a Sample Tour
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Let clients explore your property as if they're standing inside it
          </p>

          <div className="max-w-5xl mx-auto">
            <div
              className="relative group cursor-pointer transition"
              onClick={() => setShowSampleTour((previousVal) => !previousVal)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div
                className={`relative bg-black/30 backdrop-blur-sm rounded-3xl border border-white/20 ${
                  showSampleTour ? "p-3 md:p-6" : "p-12"
                }`}
              >
                {showSampleTour ? (
                  <div className="relative">
                    <iframe
                      src="https://bishir-tm.github.io/sample-virtual-tour/"
                      title="Codeket Virtual Tour Sample"
                      className="w-full h-[70vh] md:h-[80vh] lg:h-[500px] rounded-2xl"
                    ></iframe>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFullscreen(true);
                      }}
                      className="absolute top-4 right-4 btn btn-sm btn-accent pulse-animation"
                      title="Go Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    {showFullscreenHint && (
                      <div className="absolute top-16 right-4 bg-neutral text-neutral-content px-2 py-1 rounded text-xs">
                        Tap to go fullscreen!
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="border-4 aspect-video bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center mb-8 group-hover:from-white/20 transition-colors">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                      <p className="text-lg opacity-90">
                        Interactive 360° Tour Demo
                      </p>
                      <p className="text-sm opacity-70">Click to explore</p>
                    </div>
                  </div>
                )}
                <button
                  className={`btn btn-accent btn-lg px-8 hover:scale-105 transition-transform ${
                    showSampleTour ? "mt-3" : ""
                  }`}
                >
                  {showSampleTour ? (
                    <>
                      <EyeOff className="w-5 h-5 mr-2" />
                      Close Sample Tour
                    </>
                  ) : (
                    <>
                      <Eye className="w-5 h-5 mr-2" /> Launch Sample Tour
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div className="fixed inset-0 z-50 bg-black">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button
                onClick={() => setIsFullscreen(false)}
                className="btn btn-circle btn-accent"
              >
                <Minimize2 className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  setIsFullscreen(false);
                  setShowSampleTour(false);
                }}
                className="btn btn-circle btn-error"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe
              src="https://bishir-tm.github.io/sample-virtual-tour/"
              title="Codeket Virtual Tour Sample - Fullscreen"
              className="w-full h-full"
            ></iframe>
          </div>
        )}
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-b from-base-200 to-base-100"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Ready to
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Get Started?
              </span>
            </h2>
            <p className="text-xl text-base-content/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the businesses that have revolutionized how they showcase
              their properties. Premium virtual tours that impress clients and
              close deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <div className="relative group">
                <a
                  href="tel:+2349068149540"
                  className="btn btn-primary btn-lg px-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Call or WhatsApp: +234 906 814 9540
                </a>
                <button
                  onClick={() => handleCopy("+2349068149540", "phone")}
                  className="absolute -right-2 -top-2 btn btn-xs btn-circle btn-neutral"
                >
                  {copied === "phone" ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                {copied === "phone" && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs">
                    Copied!
                  </div>
                )}
              </div>
              <div className="relative group">
                <a
                  href="mailto:virtualtours@codeket.com"
                  className="btn btn-outline btn-lg px-8 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  virtualtours@codeket.com
                </a>
                <button
                  onClick={() =>
                    handleCopy("virtualtours@codeket.com", "email")
                  }
                  className="absolute -right-2 -top-2 btn btn-xs btn-circle btn-neutral"
                >
                  {copied === "email" ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                {copied === "email" && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs">
                    Copied!
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group btn btn-secondary btn-lg px-12 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-secondary/25"
            >
              <Camera className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Book a Walkthrough Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-base-content/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Less than 1-hour response
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                No obligation quote
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-neutral to-neutral-focus text-neutral-content py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <img
                    src="/virtual-tours-logo.png"
                    alt="Codeket Logo"
                    className="w-10 h-10 rounded-xl object-contain"
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold">Codeket</div>
                  <div className="text-sm opacity-70">Virtual Tours</div>
                </div>
              </div>
              <p className="text-lg opacity-80 mb-6 max-w-md">
                Creating premium virtual experiences that transform how
                businesses showcase their spaces.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/codeket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/codeket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/codeket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <div className="space-y-3 opacity-80">
                <a
                  href="#features"
                  className="block hover:text-primary transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block hover:text-primary transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#process"
                  className="block hover:text-primary transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#sample-tour"
                  className="block hover:text-primary transition-colors"
                >
                  Sample Tour
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <div className="space-y-3 opacity-80">
                <a
                  href="https://codeket.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary transition-colors"
                >
                  About Codeket
                </a>
                <a
                  href="https://codeket.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary transition-colors"
                >
                  Our Services
                </a>
                <a
                  href="https://codeket.com/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary transition-colors"
                >
                  Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left opacity-70">
                <p>
                  &copy; {new Date().getFullYear()} Codeket Virtual Tours. All
                  rights reserved.
                </p>
                <p className="text-sm mt-1">A subsidiary of Codeket Inc.</p>
              </div>

              <div className="flex items-center space-x-6 text-sm opacity-70">
                <a
                  target="_blank"
                  href="https://codeket.com/privacy-policy"
                  className="link link-hover"
                >
                  Privacy Policy
                </a>
                <a
                  target="_blank"
                  href="https://codeket.com/terms-of-service"
                  className="link link-hover"
                >
                  Terms of Service
                </a>
                <a
                  target="_blank"
                  href="https://codeket.com/cookie-policy"
                  className="link link-hover"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t ">
              <div className="flex items-center space-x-2 opacity-60">
                <Shield className="w-5 h-5" />
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 opacity-60">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2 opacity-60">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeketLanding;
