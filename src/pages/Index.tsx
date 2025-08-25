import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MouseParallax } from "@/components/MouseParallax";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Lock,
  ArrowRight,
  CheckCircle,
  Server,
  Database,
  Network
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import featuresImage from "@/assets/features-bg.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const Index = () => {
  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Virtual Machines",
      description: "Scalable compute instances with customizable configurations"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Storage",
      description: "Secure, redundant storage solutions with global accessibility"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking",
      description: "Advanced networking with load balancers and CDN integration"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Enterprise-grade security with multi-layer protection"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-Scaling",
      description: "Automatic resource scaling based on demand"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitoring",
      description: "Real-time monitoring and analytics dashboard"
    }
  ];

  const benefits = [
    "99.99% uptime guarantee",
    "24/7 expert support",
    "Pay-as-you-scale pricing",
    "Enterprise security compliance",
    "One-click deployments"
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cloud className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">SCloud</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <Button variant="outline" className="glow-effect">Login</Button>
              <Button className="glow-effect">Get Started</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <MouseParallax intensity={2}>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="gradient-text">Infrastructure</span>
                <br />
                <span className="text-foreground">as a Service</span>
              </h1>
            </MouseParallax>
            
            <MouseParallax intensity={1}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Scale your applications with enterprise-grade cloud infrastructure. 
                Deploy, manage, and scale with confidence on our global platform.
              </p>
            </MouseParallax>

            <MouseParallax intensity={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-4 glow-effect group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Watch Demo
                </Button>
              </div>
            </MouseParallax>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${featuresImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 gradient-text">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure services designed for modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MouseParallax key={index} intensity={0.3}>
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </MouseParallax>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 gradient-text">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful cloud infrastructure components that scale with your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <MouseParallax intensity={0.4}>
              <div className="text-center group">
                <div className="relative mb-8 mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <img 
                    src={service1} 
                    alt="Compute Services" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">Compute</h3>
                <p className="text-muted-foreground text-lg">
                  High-performance virtual machines with flexible configurations
                </p>
              </div>
            </MouseParallax>

            <MouseParallax intensity={0.4}>
              <div className="text-center group">
                <div className="relative mb-8 mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-all duration-300">
                  <img 
                    src={service2} 
                    alt="Network Services" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">Network</h3>
                <p className="text-muted-foreground text-lg">
                  Advanced networking with security and performance optimization
                </p>
              </div>
            </MouseParallax>

            <MouseParallax intensity={0.4}>
              <div className="text-center group">
                <div className="relative mb-8 mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <img 
                    src={service3} 
                    alt="Storage Services" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <h3 className="text-3xl font-bold mb-4 gradient-text">Storage</h3>
                <p className="text-muted-foreground text-lg">
                  Scalable storage solutions with automatic backup and recovery
                </p>
              </div>
            </MouseParallax>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 gradient-text">
                Why Choose SCloud?
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry-leading infrastructure with unmatched reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <MouseParallax key={index} intensity={0.2}>
                  <div className="flex items-center space-x-4 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                </MouseParallax>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <MouseParallax intensity={1}>
            <h2 className="text-5xl font-bold mb-8 gradient-text">
              Ready to Scale?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of companies building on our infrastructure platform.
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 glow-effect group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Contact Sales
              </Button>
            </div>
          </MouseParallax>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cloud className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold gradient-text">SCloud</span>
              </div>
              <p className="text-muted-foreground">
                Enterprise-grade infrastructure for modern applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Compute</li>
                <li>Storage</li>
                <li>Networking</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Status</li>
                <li>API</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SCloud. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;