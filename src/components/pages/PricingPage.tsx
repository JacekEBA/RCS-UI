import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small businesses getting started with RCS messaging",
    features: [
      "Up to 10,000 messages/month",
      "Basic RCS features",
      "Email support",
      "Brand verification",
      "Basic analytics dashboard",
    ],
    notIncluded: [
      "Custom workflows",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$699",
    period: "/month",
    description: "Ideal for growing businesses with advanced messaging needs",
    features: [
      "Up to 50,000 messages/month",
      "All RCS features",
      "Priority support",
      "Custom workflows",
      "Advanced analytics",
      "A/B testing",
      "Custom branding",
    ],
    notIncluded: [
      "White-label solution",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom messaging requirements",
    features: [
      "Unlimited messages",
      "All RCS features",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "White-label solution",
      "SLA guarantees",
      "Custom reporting",
      "Priority feature requests",
    ],
    notIncluded: [],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your business messaging needs. All plans include our core RCS features with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-300 ${
                  plan.popular 
                    ? 'border-yellow-500/50 shadow-xl shadow-yellow-500/10 scale-105' 
                    : 'hover:shadow-xl hover:shadow-yellow-500/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full text-sm shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl text-yellow-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-400 text-lg">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg text-white mb-4">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <div className="pt-4">
                          <h4 className="text-lg text-gray-500 mb-4">Not included:</h4>
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <X className="h-5 w-5 text-gray-600 flex-shrink-0" />
                              <span className="text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <Button 
                    className={`w-full mt-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40'
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    } transition-all duration-300`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-yellow-400 mb-2">Can I change plans anytime?</h3>
                  <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
                </div>
                
                <div>
                  <h3 className="text-xl text-yellow-400 mb-2">What happens if I exceed my message limit?</h3>
                  <p className="text-gray-400">We'll notify you when you're approaching your limit. Additional messages are charged at $0.05 per message.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-yellow-400 mb-2">Do you offer custom pricing?</h3>
                  <p className="text-gray-400">Yes, for Enterprise clients we offer custom pricing based on your specific messaging needs and volume requirements.</p>
                </div>
                
                <div>
                  <h3 className="text-xl text-yellow-400 mb-2">Is there a setup fee?</h3>
                  <p className="text-gray-400">No setup fees for Starter and Professional plans. Enterprise plans may have custom setup requirements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl text-white mb-4">Ready to get started?</h3>
              <p className="text-gray-400 mb-6">
                Join hundreds of businesses already using bMessage to transform their customer communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
