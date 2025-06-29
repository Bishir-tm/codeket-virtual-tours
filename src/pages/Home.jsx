import React, { useState, useEffect } from "react";
import {
  Eye,
  Camera,
  MapPin,
  Home,
  Building2,
  School,
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
} from "lucide-react";
import BookingModal from "../components/BookingModal";

const CodeketLanding = () => {
  const [theme, setTheme] = useState("dark");
  const [showSampleTour, setShowSampleTour] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [theme]);

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
      subtitle: "Perfect for small spaces",
      rooms: "Up to 3 rooms",
      price: "₦100,000",
      features: [
        "Professional 360° photography",
        "Basic navigation",
        "Mobile-responsive webpage",
        "1 revision included",
      ],
      popular: false,
      gradient: "from-[#0A182E] to-[#1E2A38]",
    },
    {
      name: "Professional",
      subtitle: "Most popular choice",
      rooms: "4–8 rooms or sections",
      price: "₦200,000",
      features: [
        "Advanced 360° capture",
        "Enhanced navigation",
        "Custom branding options",
        "2 revisions included",
        "Analytics dashboard",
      ],
      popular: true,
      gradient: "from-[#007AFF] to-[#00E6E6]",
    },
    {
      name: "Premium",
      subtitle: "For larger properties",
      rooms: "Up to 15 rooms + outdoor areas",
      price: "₦350,000",
      features: [
        "Cinema-grade photography",
        "Multi-floor navigation",
        "Custom domain setup",
        "3 revisions included",
        "Priority support",
        "SEO optimization",
      ],
      popular: false,
      gradient: "from-[#8A2BE2] to-[#007AFF]",
    },
    {
      name: "Enterprise",
      subtitle: "Large complexes",
      rooms: "16+ rooms or multiple buildings",
      price: "₦500,000",
      features: [
        "Ultra-high resolution",
        "Complex navigation systems",
        "White-label solution",
        "Unlimited revisions",
        "Dedicated project manager",
        "Custom integrations",
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
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background:
              "radial-gradient(circle, rgba(0,122,255,0.3) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-base-100/80 border-b border-base-300/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Codeket
                </div>
                <div className="text-xs text-base-content/60 -mt-1">
                  Virtual Tours
                </div>
              </div>
            </div>

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
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle hover:bg-base-200/50"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
              <a
                href="tel:+2349068149540"
                className="btn btn-primary px-6 hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex my-5 items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Premium Virtual Tour Technology
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-base-content">Let Your Clients </span>
              <span className="text-base-content ">
                Walk Through Your Space
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-error to-primary bg-clip-text text-transparent">
                From Anywhere
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-base-content/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              Interactive 360° virtual tours for buildings, homes, schools, and
              warehouses. Give people the power to explore your property room by
              room — from their phone or computer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                className="btn btn-primary btn-lg px-8"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <Camera className="w-5 h-5 mr-2" />
                Book a Walkthrough Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
              />
              <a href="#sample-tour" className="btn btn-outline btn-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                View Sample Tour
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-base-content/60">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
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
                      <p className="text-base-content/70">{pkg.rooms}</p>
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

      {/* Sample Tour Section */}
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
              <div className="relative bg-black/30 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                {showSampleTour ? (
                  <iframe
                    src="http://127.0.0.1:5500/"
                    title="Codeket Virtual Tour Sample"
                    className="aspect-video min-w-full min-h-full rounded-3xl my-3"
                  ></iframe>
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
                <button className="btn btn-accent btn-lg px-8 hover:scale-105 transition-transform">
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
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-b from-base-200 to-base-100">
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
              <a
                href="tel:+2349068149540"
                className="group btn btn-primary btn-lg px-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Call or WhatsApp: +234 906 814 9540
              </a>
              <a
                href="mailto:virtualtours@codeket.com"
                className="group btn btn-outline btn-lg px-8 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                virtualtours@codeket.com
              </a>
            </div>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group btn btn-secondary btn-lg px-12 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-secondary/25"
            >
              <Camera className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Book a Walkthrough Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <BookingModal
              isOpen={isBookingModalOpen}
              onClose={() => setIsBookingModalOpen(false)}
            />

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
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <div className="text-3xl font-bold">Codeket</div>
                  <div className="text-sm opacity-70">
                    Virtual Tour Specialists
                  </div>
                </div>
              </div>
              <p className="text-lg opacity-80 mb-6 max-w-md">
                Creating premium virtual experiences that transform how
                businesses showcase their spaces.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">Li</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">Ig</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <div className="space-y-3 opacity-80">
                <p className="hover:text-primary transition-colors cursor-pointer">
                  360° Photography
                </p>
                <p className="hover:text-primary transition-colors cursor-pointer">
                  Virtual Walkthroughs
                </p>
                <p className="hover:text-primary transition-colors cursor-pointer">
                  Interactive Tours
                </p>
                <p className="hover:text-primary transition-colors cursor-pointer">
                  Custom Development
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <div className="space-y-4 opacity-80">
                <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span>+234 906 814 9540</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span>virtualtours@codeket.com</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  <span>Abuja, Nigeria</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left opacity-70">
                <p>
                  &copy; {new Date().getFullYear()} Codeket Virtual Tours. All
                  rights reserved.
                </p>
                <p className="text-sm mt-1">
                  Transforming spaces into experiences since 2020
                </p>
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
            <div className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-2 opacity-60">
                <Shield className="w-5 h-5" />
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 opacity-60">
                <Award className="w-5 h-5" />
                <span className="text-sm">ISO Certified</span>
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
