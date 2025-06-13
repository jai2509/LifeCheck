import React from 'react';
import { FileText, Zap, Target, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: "Complete Assessment",
      description: "Answer our scientifically-designed questionnaire covering all aspects of your relationship dynamics.",
      time: "5-10 minutes"
    },
    {
      step: 2,
      icon: Zap,
      title: "AI Analysis",
      description: "Our advanced AI processes your responses using proven relationship psychology frameworks.",
      time: "Instant"
    },
    {
      step: 3,
      icon: Target,
      title: "Get Your Score",
      description: "Receive a comprehensive health score with detailed insights across multiple relationship dimensions.",
      time: "Real-time"
    },
    {
      step: 4,
      icon: TrendingUp,
      title: "Follow Action Plan",
      description: "Implement personalized recommendations and track your progress with continuous monitoring.",
      time: "Ongoing"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How LifeCheck+ 
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive relationship insights in just a few simple steps. 
            Our process is designed to be quick, accurate, and actionable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                
                <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-pink-700">{step.time}</span>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to discover your relationship health?</h3>
            <p className="text-gray-600 mb-6">Join thousands of couples who have already strengthened their bonds with LifeCheck+</p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Free Scan Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;