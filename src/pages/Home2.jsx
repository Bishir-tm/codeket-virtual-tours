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
} from "lucide-react";

const CodeketLanding2 = () => {
  const [theme, setTheme] = useState("dark");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24hr", label: "Average Delivery", icon: Clock },
    { number: "100%", label: "Mobile Compatible", icon: Smartphone },
  ];

  return (
    <div className={`min-h-screen overflow-x-hidden ${theme}`}>
      {/* Navigation */}
      <div className="navbar bg-base-100 px-4 lg:px-8 shadow-sm">
        <div className="navbar-start">
          <div className="text-2xl font-bold text-primary">Codeket</div>
        </div>
        <div className="navbar-end gap-4">
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a href="tel:+234XXXXXXXXXX" className="btn btn-primary">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero min-h-[90vh] bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="hero-content text-center max-w-6xl px-4">
          <div className="max-w-4xl">
            <div className="badge badge-secondary badge-lg mb-6 px-6 py-3">
              <Zap className="w-4 h-4 mr-2" />
              Premium Virtual Tour Service
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Let Clients Walk Through Your Space
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {" "}
                From Anywhere
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Interactive 360° virtual tours for buildings, homes, schools, and
              warehouses. Give people the power to explore your property room by
              room — from their phone or computer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn btn-primary btn-lg px-8">
                <Camera className="w-5 h-5 mr-2" />
                Book a Walkthrough Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn btn-outline btn-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                View Sample Tour
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                One-time setup
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                No monthly fees
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Fully yours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What You're Getting
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              A fully interactive digital experience of your physical space,
              created with professional precision
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="card-body text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="card-title justify-center text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base-content/70">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-base-content/70">
              If your space matters — we make it easy to show it off
              professionally
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-100 border border-base-300 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="card-body flex-row items-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {industry.title}
                      </h3>
                      <p className="text-base-content/70 text-sm">
                        {industry.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Clear One-Time Pricing
            </h2>
            <p className="text-xl text-base-content/70">
              No monthly charges. No subdomain. Everything is 100% yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card bg-base-100 shadow-lg ${
                  pkg.popular ? "ring-2 ring-secondary" : ""
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="badge badge-secondary absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </div>
                )}
                <div className="card-body text-center">
                  <h3 className="card-title justify-center text-xl mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-base-content/70 mb-4">{pkg.rooms}</p>
                  <div className="text-3xl font-bold text-primary mb-6">
                    {pkg.price}
                  </div>
                  <button
                    className={`btn ${
                      pkg.popular ? "btn-secondary" : "btn-outline"
                    } btn-block`}
                  >
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-base-100 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">All packages include:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Full interactive walkthrough</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>One free webpage to display the tour</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Optional file delivery for self-hosting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Professional guidance and support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
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
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-8 h-8 text-base-content/30 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Tour Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See a Sample Tour
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let clients explore your property as if they're standing inside it
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="opacity-70">Interactive Tour Demo</p>
              </div>
            </div>
            <button className="btn btn-accent btn-lg">
              <Eye className="w-5 h-5 mr-2" />
              View Sample Tour
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-3xl mx-auto">
            Give your building a modern, interactive presence online. Perfect
            for property listings, remote clients, overseas buyers, or just
            standing out from the crowd.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="tel:+234XXXXXXXXXX"
              className="btn btn-primary btn-lg px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call or WhatsApp: +234 XXXXXXXXXX
            </a>
            <a
              href="mailto:virtualtours@codeket.com"
              className="btn btn-outline btn-lg px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              virtualtours@codeket.com
            </a>
          </div>
          <button className="btn btn-secondary btn-lg px-12">
            <Camera className="w-5 h-5 mr-2" />
            Book a Walkthrough Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-neutral-content py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Codeket</div>
              <p className="opacity-70">
                Premium virtual tour creation service for modern businesses
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 opacity-70">
                <p>Phone: +234 XXXXXXXXXX</p>
                <p>Email: virtualtours@codeket.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 opacity-70">
                <p>360° Photography</p>
                <p>Virtual Walkthroughs</p>
                <p>Interactive Tours</p>
                <p>Web Development</p>
              </div>
            </div>
          </div>
          <div className="divider opacity-20"></div>
          <div className="text-center opacity-70">
            <p>&copy; 2025 Codeket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeketLanding2;
