import React from 'react';
import { Brain, MessageCircle, Users, BarChart3, Shield, Lightbulb } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze communication patterns, emotional dynamics, and relationship behaviors with 95% accuracy.",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Communication Insights",
      description: "Get detailed insights into your communication style, frequency, and emotional tone with personalized improvement suggestions.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Compatibility Scoring",
      description: "Comprehensive compatibility analysis across multiple dimensions including values, goals, and lifestyle preferences.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your relationship health over time with detailed analytics and milestone celebrations.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Bank-level encryption ensures your personal data remains completely private and secure at all times.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Personalized Guidance",
      description: "Receive custom action plans and expert recommendations tailored to your unique relationship dynamics.",
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Stronger Bonds</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with relationship science 
            to provide comprehensive insights and actionable guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;