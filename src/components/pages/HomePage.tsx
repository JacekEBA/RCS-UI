import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Check, MessageSquare, Shield, TrendingUp, Smartphone, Settings, BarChart3, Star } from "lucide-react";
import RCSFeatureShowcase from "../RCSFeatureShowcase";
import Image from "next/image";


export default function HomePage() {
  // Logo data with all imported images
  <Image
  src="/images/logo.png"
  alt={logo.name}
  width={160}
  height={80}
  className="object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
/>

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-4 py-2 text-sm">
              Billions of RCS-ready devices
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                RBM
              </span> is what SMS<br />
              was meant to be
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Replace outdated texts with branded, interactive conversations that customers actually like.
            </p>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-4 text-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RCS Feature Showcase */}
      <RCSFeatureShowcase />

      {/* Customer Logos Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join hundreds of companies already using bMessage to transform their customer communications.
            </p>
          </div>
          
          {/* Scrolling logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 w-max">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-gray-900/30 border border-gray-700/30 rounded-xl flex items-center justify-center p-4 hover:bg-gray-800/30 hover:border-yellow-500/20 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-gray-900/30 border border-gray-700/30 rounded-xl flex items-center justify-center p-4 hover:bg-gray-800/30 hover:border-yellow-500/20 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                  <MessageSquare className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl text-white">500M+</div>
                  <div className="text-sm text-gray-400">Messages Delivered</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                  <TrendingUp className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl text-white">40%</div>
                  <div className="text-sm text-gray-400">Higher Engagement</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                  <Star className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl text-white">4.9/5</div>
                  <div className="text-sm text-gray-400">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive messaging solutions tailored to your business goals and budget.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* RCS Promotions Card */}
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-yellow-400 text-xl mb-2">
                  RCS Campaigns
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Rich media campaigns with interactive elements for maximum engagement
                </CardDescription>
                <div className="text-green-400 text-lg">
                  Per conversation/message
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {['Rich media cards', 'Interactive buttons', 'Delivery tracking', 'Opt-out management'].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Custom Workflows Card */}
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-yellow-400 text-xl mb-2">
                  Custom Workflows
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Tailored automation flows designed for your specific business processes
                </CardDescription>
                <div className="text-green-400 text-lg">
                  Build fee + monthly retainer
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {['Booking automation', 'Customer care flows', 'Lead qualification', 'Follow-up sequences'].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Preset Solutions Card */}
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-yellow-400 text-xl mb-2">
                  Ready-to-Deploy Solutions
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Pre-built messaging solutions for common business needs
                </CardDescription>
                <div className="text-green-400 text-lg">
                  Fixed monthly fee
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {['Google review requests', 'Appointment reminders', 'Customer surveys', 'Support automation'].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why RCS Section */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose bMessage?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <MessageSquare className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl text-yellow-400">Richer Than SMS</h3>
              <p className="text-gray-400 leading-relaxed">
                Deliver engaging experiences with images, videos, interactive buttons, and full branding in every message.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl text-yellow-400">Build Instant Trust</h3>
              <p className="text-gray-400 leading-relaxed">
                Verified sender badges and custom brand appearance build immediate credibility with your customers.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl text-yellow-400">Boost Conversions</h3>
              <p className="text-gray-400 leading-relaxed">
                Achieve faster responses and higher click-through rates with engaging, interactive messaging experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative">
              <Card className="bg-gray-900/30 border-gray-700/30 backdrop-blur-sm h-full">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-yellow-500/25">
                    <span className="text-black text-xl">1</span>
                  </div>
                  <Smartphone className="h-12 w-12 text-yellow-400 mx-auto" />
                  <h3 className="text-xl text-white">Setup & Verification</h3>
                  <p className="text-gray-400">
                    We handle brand registration and phone number verification for secure RCS messaging.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <Card className="bg-gray-900/30 border-gray-700/30 backdrop-blur-sm h-full">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-yellow-500/25">
                    <span className="text-black text-xl">2</span>
                  </div>
                  <Settings className="h-12 w-12 text-yellow-400 mx-auto" />
                  <h3 className="text-xl text-white">Design & Configure</h3>
                  <p className="text-gray-400">
                    Create rich message templates and set up automated workflows with SMS fallbacks.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <Card className="bg-gray-900/30 border-gray-700/30 backdrop-blur-sm h-full">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-yellow-500/25">
                    <span className="text-black text-xl">3</span>
                  </div>
                  <BarChart3 className="h-12 w-12 text-yellow-400 mx-auto" />
                  <h3 className="text-xl text-white">Launch & Optimize</h3>
                  <p className="text-gray-400">
                    Deploy campaigns and continuously optimize performance with detailed analytics and insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Transform Your Messaging?
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-4 text-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Schedule a Demo
            </Button>
            <MessageSquare className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
      </section>
    </div>
  );
}
