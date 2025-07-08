import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Plane, DollarSign, MapPin, Sparkles, Calendar, CheckCircle, MessageCircle, Globe } from "lucide-react";

export default function TravelFintechHome() {
  const [isHovered, setIsHovered] = useState(null);
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    duration: '',
    goal: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-4">
        <header className="text-center py-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6 shadow-2xl">
              <Globe className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 leading-tight">
            AI-Powered Travel,<br />Finance & Life Planner
          </h1>
          <p className="text-gray-300 text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            Experience the future of travel planning with AI that understands your dreams, respects your budget, and aligns with your life goals.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-purple-300">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 text-blue-300">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Smart Budgeting</span>
            </div>
            <div className="flex items-center gap-2 text-green-300">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Personalized</span>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto grid gap-8">
          {/* Main Planning Card */}
          <Card 
            className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-2"
            onMouseEnter={() => setIsHovered('main')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Plan Your Perfect Journey</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                    <Input 
                      placeholder="Where do you want to go?" 
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300 h-12 focus:ring-2 focus:ring-purple-500 transition-all"
                      value={formData.destination}
                      onChange={(e) => handleInputChange('destination', e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-green-400" />
                    <Input 
                      placeholder="Enter your travel budget (e.g. $2000)" 
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300 h-12 focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
                    <Input 
                      placeholder="Trip Duration (e.g. 10 days)" 
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300 h-12 focus:ring-2 focus:ring-blue-500 transition-all"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                    />
                  </div>
                  <Textarea 
                    placeholder="Your life goal (e.g. save for a house, wellness retreat, adventure, etc.)" 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[48px] focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    value={formData.goal}
                    onChange={(e) => handleInputChange('goal', e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-700 hover:via-purple-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate My AI-Powered Plan
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Smart Itinerary Results */}
            <Card 
              className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl border-green-400/20 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setIsHovered('itinerary')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-green-300">Your Smart Itinerary</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-green-400/20">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-white">Rome → Paris → Athens</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-green-400/20">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-white">Total Cost: <strong>$1,850</strong></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-green-400/20">
                    <Sparkles className="w-4 h-4 text-green-400" />
                    <span className="text-white">Wellness retreat in Tuscany (+$100)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-green-400/20">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <span className="text-white">Best time: September (save $300)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-500/20 rounded-lg border border-green-400/40">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-200"><strong>Goal Check:</strong> Emergency fund intact ✅</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card 
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl border-purple-400/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setIsHovered('assistant')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-purple-300">AI Travel Assistant</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Plane className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-purple-100 text-sm leading-relaxed">
                        "Your Paris flight has been delayed by 2 hours. I've found a premium lounge nearby and can rebook your connection. Would you like me to proceed?"
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-purple-100 text-sm leading-relaxed">
                        "Packing insight: Athens weather shows light rain expected. I've added a compact umbrella and light jacket to your packing list."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Travel Experience?</h3>
              <p className="text-gray-300 text-lg mb-8">Join thousands of smart travelers who plan better, spend wisely, and achieve their dreams.</p>
              
              <Button 
                className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 text-white rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                onMouseEnter={() => setIsHovered('cta')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Start Your Journey — Free Forever
                <span className="ml-2 text-lg">✨</span>
              </Button>
              
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
                <span>✓ No Credit Card Required</span>
                <span>✓ Instant Setup</span>
                <span>✓ AI-Powered Results</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}