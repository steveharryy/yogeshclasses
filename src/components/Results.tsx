import React, { useState } from 'react';
import { Trophy, Star, Target, BookOpen, Users, Zap, Award, Brain, MessageCircle, Clock, Monitor, Smartphone, ThumbsUp, CheckCircle } from 'lucide-react';
import { achieversData2023_24, achieversData2024_25 } from '../data/achieversData';

const Results: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const successFormula = [
    {
      icon: Trophy,
      title: '20+ Years Legacy',
      description: '6500+ students, 200+ toppers',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: Award,
      title: 'Board Excellence',
      description: '200+ students scoring 90+',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: BookOpen,
      title: 'Multi-Subject Hub',
      description: 'All subjects under one roof',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Specialized subject teachers',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Monitor,
      title: 'Digital Resources',
      description: 'Notes accessible 24/7',
      color: 'from-rose-400 to-rose-600'
    },
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Engaging teaching methods',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Modern Tech',
      description: 'Smart boards & online tests',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Brain,
      title: 'Mentorship',
      description: 'Guiding every student',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Regular Tests',
      description: 'Continuous evaluation',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Star,
      title: 'Student-Centric',
      description: 'Fun & supportive environment',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Users,
      title: 'Parent Connect',
      description: 'Regular progress updates',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'One-Click Access',
      description: 'Instant WhatsApp support',
      color: 'from-violet-400 to-violet-600'
    },
    {
      icon: Clock,
      title: 'Hybrid Learning',
      description: 'Offline + Recorded lectures',
      color: 'from-lime-400 to-lime-600'
    },
    {
      icon: ThumbsUp,
      title: '5 Star Reviews',
      description: 'Hundreds of happy families',
      color: 'from-fuchsia-400 to-fuchsia-600'
    }
  ];

  const ReviewCard = ({ achiever, isHovered, onHover, onLeave }: any) => (
    <div
      className={`flex-shrink-0 w-44 sm:w-52 md:w-56 mx-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 z-10' : 'hover:-translate-y-2'
      } border border-gray-200 dark:border-slate-700 overflow-hidden`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 aspect-auto">
        <img
          src={achiever.image}
          alt={achiever.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{achiever.name}</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">{achiever.school}</p>
      </div>
    </div>
  );

  return (
    <section id="results" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CBSE Results 2024-25 */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            CBSE Results <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">2024-25</span>
          </h3>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-left-to-right">
              {[...achieversData2024_25, ...achieversData2024_25, ...achieversData2024_25, ...achieversData2024_25, ...achieversData2024_25, ...achieversData2024_25, ...achieversData2024_25, ...achieversData2024_25].map((achiever, index) => (
                <ReviewCard
                  key={`2024-${achiever.id}-${index}`}
                  achiever={achiever}
                  isHovered={hoveredCard === `2024-${achiever.id}-${index}`}
                  onHover={() => setHoveredCard(`2024-${achiever.id}-${index}`)}
                  onLeave={() => setHoveredCard(null)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CBSE Results 2023-24 */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            CBSE Results <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">2023-24</span>
          </h3>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-right-to-left">
              {[...achieversData2023_24, ...achieversData2023_24, ...achieversData2023_24, ...achieversData2023_24, ...achieversData2023_24, ...achieversData2023_24, ...achieversData2023_24, ...achieversData2023_24].map((achiever, index) => (
                <ReviewCard
                  key={`2023-${achiever.id}-${index}`}
                  achiever={achiever}
                  isHovered={hoveredCard === `2023-${achiever.id}-${index}`}
                  onHover={() => setHoveredCard(`2023-${achiever.id}-${index}`)}
                  onLeave={() => setHoveredCard(null)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* YKC Success Formula */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-8 lg:p-12 rounded-2xl text-white">
          <div className="text-center mb-12">
            <Target className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">The YKC Success Formula</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology combines expert teaching, personalized attention,
              and continuous assessment to guarantee outstanding results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {successFormula.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold mb-1 text-center">{item.title}</h4>
                <p className="text-gray-300 text-xs leading-tight text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
