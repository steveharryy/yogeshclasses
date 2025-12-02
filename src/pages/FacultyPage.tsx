import React, { useState } from 'react';
import { Quote, ArrowLeft, Mail, Phone, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { facultyData } from '../data/facultyData';

const FacultyPage: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (facultyId: string) => {
    setImageErrors(prev => ({ ...prev, [facultyId]: true }));
  };

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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Mentors</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet the exceptional educators who have shaped thousands of success stories. 
              Our faculty combines expertise with passion to deliver results that speak for themselves.
            </p>
          </div>

          {/* Faculty Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-300">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Subjects Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">6500+</div>
              <div className="text-gray-600 dark:text-gray-300">Students Taught</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid - Image Left, Content Right */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {facultyData.map((faculty) => (
              <div
                key={faculty.id}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                {/* Faculty Image - Always Left Side */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="w-full aspect-square overflow-hidden relative bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg shadow-xl">
                    {imageErrors[faculty.id] ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl font-bold drop-shadow-lg">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover object-center"
                        onError={() => handleImageError(faculty.id)}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>

                {/* Faculty Content - Always Right Side */}
                <div className="lg:w-2/3 flex flex-col justify-start">
                  {/* Name & Title */}
                  <div className="mb-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {faculty.name}
                    </h3>
                    <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-3">
                      {faculty.mainSubject}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-400 italic">
                      ({faculty.secondarySubject})
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="mb-4 p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded">
                    <p className="text-gray-800 dark:text-gray-200 italic text-base leading-relaxed">
                      "{faculty.quote}"
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-4">
                    {faculty.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every faculty member at YKC follows our core teaching principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Conceptual Clarity</h3>
              <p className="text-gray-600 dark:text-gray-300">Building strong foundations through clear concept explanation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Individual Attention</h3>
              <p className="text-gray-600 dark:text-gray-300">Personalized guidance for every student's unique needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Motivational Teaching</h3>
              <p className="text-gray-600 dark:text-gray-300">Inspiring students to achieve their highest potential</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Always available for doubt clearing and guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-12 rounded-2xl text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Meet Our Faculty in Person</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience our teaching methodology firsthand with a free demo class. 
              See why thousands of students trust our faculty with their future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo%20class", "_blank")}
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              >
                Schedule a Demo Class
              </button>
              
              <Link
                to="/"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;