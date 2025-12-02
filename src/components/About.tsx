import React from 'react';
import {
  BookOpen,
  Users,
  Trophy,
  Heart,
  Lightbulb,
  Award,
  Zap
} from 'lucide-react';
import banner from '../photos/banner.jpg'; // adjust if needed

const About: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Result-Oriented Legacy',
      description: '20+ years, 6500+ students, 200+ toppers',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: BookOpen,
      title: 'Multi-Subject Hub',
      description: 'One roof for all streams and subjects',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Faculty Squad',
      description: 'Specialized teachers for every subject',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Lightbulb,
      title: 'Digital Study Material',
      description: 'Notes, quizzes, and comprehensive resources',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Doubt-clearing sessions and booster classes',
      color: 'from-rose-400 to-rose-600'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Consistent 90+ scores in board exams',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              YKC
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to Yogesh Kochar’s Classes, where passion meets results. Our
            journey has always been about more than marks — it’s about shaping
            confidence, building fundamentals, and creating achievers.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Left side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Inspiring Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                Started in 2005, with a legacy of 20+ years in teaching, we’ve
                empowered over 6500 students and mentored more than 200 toppers
                and achievers across subjects.
              </p>
              <p className="leading-relaxed">
                At Yogesh Kochar’s Classes, we don’t just prepare students for
                exams — we prepare them for life. With expert mentors, modern
                teaching, and a student-first approach, we ensure that every
                learner leaves with knowledge, confidence, and a success story
                of their own.
              </p>
              <p className="leading-relaxed">
                Today, we proudly serve students across Classes IX–XII in the
                CBSE curriculum, with specialized faculty and a record that
                speaks for itself.
              </p>
            </div>

            {/* Legacy Stats */}
            <div className="bg-gradient-to-r from-slate-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Legacy
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    6500+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Alumni
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                    200+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Toppers
                  </div>
                </div>
              </div>
            </div>
          </div>

       {/* Right side (image) */}
<div className="relative w-full flex justify-center items-center">
  <img
    src={banner}
    alt="YKC Institute"
    className="w-full h-[450px] lg:h-[520px] object-cover rounded-2xl shadow-2xl bg-slate-50 dark:bg-slate-800"
  />
  <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-2xl pointer-events-none"></div>
</div>

        </div>  

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-slate-700"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 dark:from-slate-800 dark:to-slate-700 p-8 lg:p-12 rounded-2xl">
            <Heart className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Philosophy
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "We don't just teach subjects — we build futures. Every student is
              unique, and our personalized approach ensures that each one
              reaches their full potential."
            </p>
            <div className="mt-6 text-lg font-medium text-amber-600 dark:text-amber-400">
              — The YKC Philosophy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
