import React from 'react';
import { Phone, MessageCircle, BookOpen, Award, GraduationCap, Sparkles, Trophy, Star } from 'lucide-react';

const Hero: React.FC = () => {

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden py-20"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">

          {/* Main Heading with Image */}
          <div className="pt-16 pb-12 animate-fade-in-slow">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
              {/* Left Side - Text */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-rose-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-3 mb-4">
                  <Trophy className="h-5 w-5 text-amber-400" />
                  <span className="text-amber-400 font-semibold text-sm">Delhi's Most Trusted Institute</span>
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                  <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-fade-in-slow">YOGESH</span>
                  <span className="block bg-gradient-to-r from-rose-400 via-pink-300 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,113,133,0.3)] animate-fade-in-slow" style={{animationDelay: '0.2s'}}>KOCHAR</span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.3)] animate-fade-in-slow" style={{animationDelay: '0.4s'}}>CLASSES</span>
                </h1>

              </div>

              {/* Right Side - Image */}
              <div className="flex-1 relative">
                <div className="relative animate-fade-in-slow" style={{animationDelay: '0.8s'}}>
                  <div className="relative bg-slate-800 p-2 rounded-2xl">
                    <img
                      src="/students.jpg"
                      alt="Happy Students at YKC"
                      className="w-full h-auto rounded-xl shadow-2xl"
                    />
                    <div
                      onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
                      className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl p-4 shadow-2xl border-4 border-slate-900 cursor-pointer transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">Book a</div>
                        <div className="text-lg font-bold text-white">Free Demo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* We Create Toppers Heading */}
          <div className="pb-6 animate-fade-in-slow" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-400">
              We Create Toppers!
            </h2>
          </div>

        

          {/* Stats Below Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 animate-fade-in-slow" style={{ animationDelay: '0.7s' }}>
            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-400 mb-1">20+</div>
              <div className="text-gray-300 text-sm">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-400 mb-1">6500+</div>
              <div className="text-gray-300 text-sm">Students Taught</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-rose-400/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-rose-400 mb-1">200+</div>
              <div className="text-gray-300 text-sm">Board Toppers</div>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="pt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-12 flex items-center justify-center space-x-3">
              <BookOpen className="h-8 w-8" />
              <span>Subjects We Offer</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Class IX-X */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border-2 border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Award className="h-8 w-8 text-blue-400" />
                  <h4 className="text-2xl md:text-3xl font-bold text-blue-400">Class IX - X</h4>
                </div>
                <p className="text-gray-300 mb-6 text-lg">(Foundation Years)</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Mathematics</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Science</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">English</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Social Science</span>
                  </div>
                </div>
              </div>

              {/* Class XI-XII */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Award className="h-8 w-8 text-amber-400" />
                  <h4 className="text-2xl md:text-3xl font-bold text-amber-400">Class XI - XII</h4>
                </div>
                <p className="text-gray-300 mb-6 text-lg">(Career Defining)</p>

                <div className="grid grid-cols-2 gap-6 text-left">
                  {/* Commerce */}
                  <div>
                    <p className="font-bold text-emerald-400 mb-3 text-lg">Commerce</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Mathematics</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Accounts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Economics</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">English</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Business Studies</span>
                      </div>
                    </div>
                  </div>

                  {/* Humanities */}
                  <div>
                    <p className="font-bold text-rose-400 mb-3 text-lg">Humanities</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Economics</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">English</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Psychology</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Pol. Science</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">History</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Geography</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm">Sociology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-green-500/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-3">
                <MessageCircle className="h-6 w-6" />
                <span>Chat on WhatsApp</span>
              </span>
            </button>

            <button
              onClick={() => window.open("tel:+919213092876", "_self")}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-amber-500/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call Us Now</span>
              </span>
            </button>

            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-blue-500/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Get a Free Demo</span>
              </span>
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Hero;
