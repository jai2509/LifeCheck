import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free Scan",
      price: "₹0",
      period: "One-time",
      description: "Perfect for getting started with basic relationship insights",
      features: [
        "Basic relationship health scan",
        "5 key insights",
        "General recommendations",
        "Email report"
      ],
      buttonText: "Start Free Scan",
      popular: false,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "LifeCheck Pro",
      price: "₹999",
      period: "per month",
      description: "Comprehensive analysis with ongoing support and guidance",
      features: [
        "Complete relationship analysis",
        "25+ detailed insights",
        "Personalized action plans",
        "Progress tracking",
        "Expert chat support",
        "Weekly check-ins",
        "Couples exercises"
      ],
      buttonText: "Start Pro Trial",
      popular: true,
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "LifeCheck Elite",
      price: "₹2,499",
      period: "per month",
      description: "Premium service with dedicated relationship coaching",
      features: [
        "Everything in Pro",
        "1-on-1 relationship coaching",
        "Video consultations",
        "Crisis intervention support",
        "Custom relationship programs",
        "Priority support",
        "Advanced analytics",
        "Couples workshop access"
      ],
      buttonText: "Go Elite",
      popular: false,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your 
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Relationship Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free scan and upgrade as you need more comprehensive insights and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-pink-300 transform scale-105' : 'border-gray-200'}`}>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              {plan.name === "LifeCheck Elite" && (
                <div className="absolute top-4 right-4">
                  <Crown className="w-6 h-6 text-yellow-500" />
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-xl' 
                  : 'border-2 border-gray-200 text-gray-700 hover:border-pink-300 hover:text-pink-600'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Not sure which plan is right for you?</h3>
            <p className="text-gray-600 mb-6">Start with our free scan and upgrade anytime. No hidden fees, cancel anytime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold border-2 border-pink-200 hover:bg-pink-50 transition-all">
                Compare Plans
              </button>
              <button className="text-gray-600 hover:text-pink-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;