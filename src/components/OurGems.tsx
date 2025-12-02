import React, { useState } from 'react';
import aman from '../photos/aman.png';
import shivam from '../photos/shivam.jpg';
import topperBanner from '../photos/WEBSITE BANNER.jpg';
import { Trophy, Star, Medal, Users, GraduationCap } from 'lucide-react';

const OurGems: React.FC = () => {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <section id="our-gems" className="py-16 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Results & <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
        </div>

        {/* Three Stats Boxes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-2 border-amber-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">20+</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Years Legacy</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-2 border-emerald-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">6500+</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Alumni</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-2 border-rose-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2">200+</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Subject Toppers</div>
            </div>
          </div>
        </div>

        {/* Topper Banner (ZOOMABLE NOW) */}
        <div className="mb-16">
          <img
            src={topperBanner}
            alt="We Create Toppers"
            className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setZoomOpen(true)}
          />

          {/* Zoom Modal */}
          {zoomOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setZoomOpen(false)}
            >
              <img
                src={topperBanner}
                alt="Zoomed Topper Banner"
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              />
            </div>
          )}
        </div>

        {/* Our Gems Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Trophy className="h-12 w-12 text-amber-500" />
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Gems</span>
            </h3>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Meet our exceptional achievers who have set new benchmarks of excellence
          </p>
        </div>

        {/* Two Gems */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Aman */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-400 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 py-4">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">CBSE Delhi Topper</div>
              </div>
              <img src={aman} alt="Aman Kumar Karn" className="w-full h-96 object-contain" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Aman Kumar Karn</h3>
              <div className="flex items-center space-x-2 mb-4">
                <Medal className="h-5 w-5 text-amber-500" />
                <span className="text-amber-600 dark:text-amber-400 font-semibold">Class XII Commerce</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Scored 97% in Class 12 Commerce, crowned Delhi Topper...
              </p>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <Star className="h-4 w-4 text-amber-500 mr-2" /> Key Achievements
                </h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Delhi Topper with 97% marks</li>
                  <li>Featured in leading newspapers</li>
                  <li>TV channel interviews</li>
                  <li>Commerce stream excellence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shivam */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-400 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 py-4">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">Gun Gaurav Sammaan</div>
              </div>
              <img src={shivam} alt="Shivam Kumar Goel" className="w-full h-96 object-contain" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Shivam Kumar Goel</h3>
              <div className="flex items-center space-x-2 mb-4">
                <Medal className="h-5 w-5 text-purple-500" />
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Class XII CBSE</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Secured 96.8% in Class 12 CBSE, honored with Gun Gaurav Sammaan...
              </p>
              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <Star className="h-4 w-4 text-purple-500 mr-2" /> Key Achievements
                </h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>96.8% in CBSE Class XII</li>
                  <li>Gun Gaurav Sammaan recipient</li>
                  <li>Honored by HRD Minister</li>
                  <li>National recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-8 lg:p-12 rounded-2xl text-white">
            <Trophy className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Be the Next Gem</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the legacy of excellence...
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919213092876?text=Hi%20I%20want%20to%20join%20YKC%20and%20become%20a%20topper",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Success Journey
              </button>
              <button
                onClick={() => window.open("tel:+919213092876", "_self")}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Call Us Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurGems;
