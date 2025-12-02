import React from 'react';
import { BookOpen, Users, Trophy, Target, Heart, Lightbulb, Award, Zap, ArrowLeft, Star, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import banner from '../photos/banner.jpg';
import yogeshSir from '../photos/yogeshss.jpg';

const AboutPage: React.FC = () => {
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

  const milestones = [
    { year: '2005', event: 'YKC Founded', description: 'Started with English coaching for Classes IX-XII' },
    { year: '2006', event: 'First 100 Students', description: 'Reached our first major milestone' },
    { year: '2012', event: 'Multi-Subject Expansion', description: 'Added Mathematics, Science, and Social Science' },
    { year: '2015', event: '1000+ Alumni', description: 'Celebrated 1000 successful students' },
    { year: '2018', event: 'Commerce & Humanities', description: 'Expanded to cover all major streams' },
    { year: '2020', event: 'Digital Transformation', description: 'Launched online resources and hybrid learning' },
    { year: '2023', event: '6000+ Students', description: 'Reached 6000+ students milestone' },
    { year: '2025', event: '20 Years of Excellence', description: 'Celebrating two decades of educational excellence' }
  ];

  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="bg-white dark:bg-slate-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">YKC</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Welcome to Yogesh Kochar's Classes, where passion meets results. Our journey has always been about more than marks — it's about shaping confidence, building fundamentals, and creating achievers.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
              The Journey of Excellence
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Started in 2005, with a legacy of 20+ years in teaching, we've empowered over 6500 students and mentored more than 200 toppers and achievers across subjects. What began as a center of excellence for English coaching (Classes IX–XII, CBSE) has today grown into a multi-subject institute, offering English, Maths, Science, Social Science, Commerce, and Humanities under one roof.
              </p>
              <p>
                At Yogesh Kochar's Classes, we don't just prepare students for exams — we prepare them for life. With expert mentors, modern teaching, and a student-first approach, we ensure that every learner leaves with knowledge, confidence, and a success story of their own.
              </p>
              <p>
                Today, we proudly serve students across Classes IX-XII in CBSE curriculum, with specialized faculty for each subject and a track record that speaks for itself.
              </p>
            </div>

            {/* Legacy Stats */}
            <div className="bg-gradient-to-r from-slate-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Legacy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">6500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Alumni</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Toppers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy of Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Legacy of <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Celebrating excellence and inspiring success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Aman Kumar Karn */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border-2 border-amber-400 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Aman Kumar Karn</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Medal className="h-5 w-5 text-amber-600" />
                    <span className="text-lg font-semibold text-amber-600 dark:text-amber-400">Delhi Topper - 97%</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Class XII Commerce</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Scored 97% in Class 12 Commerce, crowned Delhi Topper, and featured in leading newspapers & TV channels.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-sm font-medium">Delhi Topper</span>
                <span className="bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Media Featured</span>
              </div>
            </div>

            {/* Shivam Kumar Goel */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border-2 border-purple-400 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Shivam Kumar Goel</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Medal className="h-5 w-5 text-purple-600" />
                    <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">Gun Gaurav Sammaan - 96.8%</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Class XII CBSE</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Secured 96.8% in Class 12 CBSE, honored with the prestigious Gun Gaurav Sammaan (2017) by then HRD Minister Shri Prakash Javadekar Ji.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">National Award</span>
                <span className="bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">HRD Honored</span>
              </div>
            </div>
          </div>

          {/* 100+ Students Achievement */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-8 text-white text-center">
            <Star className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
            <h3 className="text-3xl font-bold mb-4">100+ Students Scoring 90+ Marks</h3>
            <p className="text-xl text-emerald-100">
              in Class 12 English CBSE over the years - A testament to our teaching excellence
            </p>
          </div>
        </div>
      </section>

      {/* Meet Yogesh Sir Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Yogesh Sir</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The Visionary Behind YKC</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - Placeholder for later replacement */}
            <div className="relative">
              <div className="relative w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={yogeshSir}
                  alt="Yogesh Kochar - Founder and Mentor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Yogesh Kochar</h3>
                  <p className="text-amber-400 font-semibold text-lg">Founder & Chief Mentor</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 p-6 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The driving force behind Yogesh Kochar's Classes, Mr. Yogesh Kochar is more than a teacher - he is a mentor, motivator, and a trusted guide for thousands of students.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">20+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years of Teaching Excellence</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">6500+</div>
                  <div className="text-gray-600 dark:text-gray-300">Students Mentored</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-2">200+</div>
                  <div className="text-gray-600 dark:text-gray-300">Subject Toppers Produced</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Expert</div>
                  <div className="text-gray-600 dark:text-gray-300">CBSE Curriculum Specialist</div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  With over 20+ years of teaching experience, he has successfully taught and mentored more than 6500 students, producing over 200 subject toppers across board examinations. His deep understanding of the CBSE curriculum and student psychology makes him one of the most result-oriented and respected educators in Delhi.
                </p>
                <p>
                  Starting his journey as an English specialist, Yogesh Sir built a legacy of consistent board toppers and 90+ scorers in English. Over time, his vision expanded - creating a multi-subject institute that brings together expert faculty for English, Maths, Science, Social Science, Commerce and Humanities under one roof.
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-8 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-4 text-amber-400">His Mission:</h4>
                <p className="text-lg leading-relaxed italic">
                  "To empower students with knowledge, confidence, and results that shape not just their exams, but their future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-rose-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-12 lg:p-16 rounded-2xl text-white">
              <Heart className="h-16 w-16 text-amber-400 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-6">
                Our Philosophy
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                "We don't just teach subjects, we build futures. Every student is unique,
                and our personalized approach ensures that each one reaches their full potential.
                Success is not just about grades – it's about confidence, character, and capability."
              </p>
              <div className="text-xl font-medium text-amber-400">
                — The YKC Philosophy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Join Our Legacy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Become part of the YKC family and write your own success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20join%20YKC", "_blank")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Join YKC Today
            </button>
            <Link
              to="/"
              className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;