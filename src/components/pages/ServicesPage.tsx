import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { MessageSquare, Zap, Users, BarChart3, Settings, Shield } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: MessageSquare,
      title: "RCS Campaign Management",
      description: "End-to-end campaign creation, management, and optimization for maximum customer engagement.",
      features: ["Campaign Strategy", "Content Creation", "A/B Testing", "Performance Optimization"]
    },
    {
      icon: Zap,
      title: "Automation & Workflows",
      description: "Custom automated messaging flows that respond intelligently to customer actions and behaviors.",
      features: ["Smart Triggers", "Conditional Logic", "Multi-step Journeys", "CRM Integration"]
    },
    {
      icon: Users,
      title: "Customer Journey Design",
      description: "Design personalized messaging experiences across all customer touchpoints and interactions.",
      features: ["Journey Mapping", "Personalization", "Cross-channel Sync", "Behavioral Analytics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive reporting and insights into message performance, engagement rates, and business impact.",
      features: ["Real-time Dashboards", "Custom Reports", "Performance Tracking", "ROI Analysis"]
    },
    {
      icon: Settings,
      title: "Technical Integration",
      description: "Seamless integration with your existing business systems, CRMs, and communication platforms.",
      features: ["API Integration", "CRM Sync", "Custom Development", "Technical Support"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure your messaging campaigns meet all regulatory requirements and maintain the highest security standards.",
      features: ["TCPA Compliance", "Data Security", "Opt-out Management", "Audit Trails"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive RCS messaging solutions designed to transform your customer communications and drive measurable business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/25 mb-4">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-xl text-white mb-4">{service.title}</CardTitle>
                    <p className="text-gray-400">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful RCS implementation and ongoing optimization for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your current messaging strategy and identify growth opportunities." },
              { step: "02", title: "Strategy", description: "Custom RCS messaging strategy development tailored to your business objectives." },
              { step: "03", title: "Implementation", description: "Technical setup, system integration, and campaign launch with comprehensive support." },
              { step: "04", title: "Optimization", description: "Continuous monitoring, testing, and refinement for maximum engagement and ROI." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/25">
                  <span className="text-black text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl text-white mb-4">Ready to Transform Your Customer Messaging?</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how bMessage can help you achieve your business communication objectives and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
