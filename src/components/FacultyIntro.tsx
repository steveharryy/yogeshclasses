import React, { useState } from 'react';
import { Quote, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { facultyData } from '../data/facultyData';

const FacultyIntro: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (facultyId: string) => {
    setImageErrors(prev => ({ ...prev, [facultyId]: true }));
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users className="h-12 w-12 text-amber-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Meet Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Mentors</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert educators dedicated to your success. Each faculty member brings years of experience
            and a passion for teaching that transforms students into achievers.
          </p>
        </div>

        {/* Faculty Grid - Mobile: 3 per row in horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facultyData.map((faculty) => (
            <Link
              key={faculty.id}
              to="/faculty"
              className="group bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-slate-700 cursor-pointer"
            >
              {/* Faculty Image */}
          <div className="w-full h-80 overflow-hidden relative bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
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
      className="max-h-full max-w-full object-contain object-top transition-transform duration-700"
      onError={() => handleImageError(faculty.id)}
      loading="lazy"
    />
  )}
</div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                  {faculty.name}
                </h3>

                {/* Subject */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-semibold text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 px-3 py-1.5 rounded-full">
                    {faculty.mainSubject}
                  </span>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 p-4 rounded-xl relative border-l-4 border-amber-500 mb-4">
                  <Quote className="h-4 w-4 text-amber-500 absolute top-3 left-3 opacity-50" />
                  <p className="text-sm italic text-gray-700 dark:text-gray-300 pl-6">
                    "{faculty.quote}"
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center justify-end text-amber-600 dark:text-amber-400 font-semibold group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-200">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Faculty Grid - Horizontal Scroll with 3 per row */}
        <div className="md:hidden mb-12">
          {/* First Row - First 3 Faculty */}
          <div className="mb-6 overflow-x-auto pb-4">
            <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
              {facultyData.slice(0, 3).map((faculty) => (
                <Link
                  key={faculty.id}
                  to="/faculty"
                  className="group bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-slate-700 cursor-pointer"
                  style={{ width: '280px', flexShrink: 0 }}
                >
                  <div className="w-full h-64 overflow-hidden relative bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                    {imageErrors[faculty.id] ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-5xl font-bold drop-shadow-lg">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="max-h-full max-w-full object-contain object-top"
                        onError={() => handleImageError(faculty.id)}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                      {faculty.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 px-2 py-1 rounded-full">
                        {faculty.mainSubject}
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 p-3 rounded-xl relative border-l-4 border-amber-500">
                      <Quote className="h-3 w-3 text-amber-500 absolute top-2 left-2 opacity-50" />
                      <p className="text-xs italic text-gray-700 dark:text-gray-300 pl-4">
                        "{faculty.quote}"
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Second Row - Next 3 Faculty */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
              {facultyData.slice(3, 6).map((faculty) => (
                <Link
                  key={faculty.id}
                  to="/faculty"
                  className="group bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-slate-700 cursor-pointer"
                  style={{ width: '280px', flexShrink: 0 }}
                >
                  <div className="w-full h-64 overflow-hidden relative bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                    {imageErrors[faculty.id] ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-5xl font-bold drop-shadow-lg">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="max-h-full max-w-full object-contain object-top"
                        onError={() => handleImageError(faculty.id)}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                      {faculty.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 px-2 py-1 rounded-full">
                        {faculty.mainSubject}
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 p-3 rounded-xl relative border-l-4 border-amber-500">
                      <Quote className="h-3 w-3 text-amber-500 absolute top-2 left-2 opacity-50" />
                      <p className="text-xs italic text-gray-700 dark:text-gray-300 pl-4">
                        "{faculty.quote}"
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/faculty"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View Complete Faculty Profiles</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultyIntro;
