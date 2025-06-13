import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Arjun",
      location: "Mumbai",
      rating: 5,
      text: "LifeCheck+ helped us identify communication gaps we didn't even know existed. The AI insights were spot-on and the action plan really worked. Our relationship is stronger than ever!",
      improvement: "Communication improved by 40%"
    },
    {
      name: "Sneha & Vikram",
      location: "Bangalore",
      rating: 5,
      text: "We were going through a rough patch and LifeCheck+ gave us the clarity we needed. The personalized guidance and progress tracking kept us motivated. Highly recommend!",
      improvement: "Trust score increased by 35%"
    },
    {
      name: "Anita & Rajesh",
      location: "Delhi",
      rating: 5,
      text: "As busy professionals, we barely had time to work on our relationship. LifeCheck+ made it easy with quick scans and actionable insights. The app is a game-changer!",
      improvement: "Overall satisfaction up 50%"
    },
    {
      name: "Kavya & Suresh",
      location: "Chennai",
      rating: 5,
      text: "The depth of analysis is incredible. It's like having a relationship counselor in your pocket. The privacy aspect was important to us, and they deliver on that promise.",
      improvement: "Conflict resolution improved by 45%"
    },
    {
      name: "Meera & Akash",
      location: "Pune",
      rating: 5,
      text: "We used LifeCheck+ before our wedding and it helped us understand each other better. The compatibility analysis was eye-opening. Starting married life with confidence!",
      improvement: "Compatibility score: 92%"
    },
    {
      name: "Ritu & Sameer",
      location: "Hyderabad",
      rating: 5,
      text: "After 5 years of marriage, we thought we knew everything about each other. LifeCheck+ revealed new dimensions of our relationship and gave us tools to grow together.",
      improvement: "Intimacy improved by 38%"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Real Stories from 
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Real Couples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how LifeCheck+ has helped thousands of couples across India strengthen their relationships 
            and build deeper connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-pink-200" />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-green-100 to-green-200 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-green-700">{testimonial.improvement}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">10,000+</div>
                <div className="text-gray-600">Couples Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;