import React from 'react';
import { Brain, Heart, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">India's First AI Relationship Scanner</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Scan, Score & Strengthen
              </span>
              <br />
              <span className="text-gray-800">Your Relationship</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              India's first AI-powered relationship health scanner that analyzes your bond, 
              provides personalized insights, and offers expert guidance to strengthen your connection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Start Free Health Scan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-pink-300 hover:text-pink-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>10,000+ Couples Scanned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>95% Accuracy Rate</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Relationship Health Score</h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A+</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Communication</span>
                      <span className="font-medium text-green-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Trust & Intimacy</span>
                      <span className="font-medium text-blue-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Conflict Resolution</span>
                      <span className="font-medium text-yellow-600">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full" style={{width: '76%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>AI Insight:</strong> Your communication scores are excellent! 
                    Focus on improving conflict resolution techniques for an even stronger bond.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl transform -rotate-6 opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl transform rotate-12 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;