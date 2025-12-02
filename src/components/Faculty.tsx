import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { facultyData } from '../data/facultyData';

const Faculty: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (facultyId: string) => {
    setImageErrors(prev => ({ ...prev, [facultyId]: true }));
  };

  return (
    <section
      id="faculty"
      className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Mentors
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the exceptional educators who have shaped thousands of success
            stories. Our faculty combines expertise with passion to deliver
            results that speak for themselves.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-slate-700"
            >
              {/* Faculty Image */}
              <div className="w-full h-64 overflow-hidden relative bg-gradient-to-br from-amber-400 to-orange-600">
                {imageErrors[faculty.id] ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-7xl font-bold drop-shadow-lg">
                      {faculty.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                ) : (
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    onError={() => handleImageError(faculty.id)}
                    loading="lazy"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Title */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold">
                    {faculty.title}
                  </p>
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 px-3 py-1.5 rounded-full">
                    {faculty.mainSubject}
                  </span>
                  <span className="text-xs font-semibold text-gray-600 bg-gray-100 dark:bg-slate-800 dark:text-gray-300 px-3 py-1.5 rounded-full">
                    {faculty.secondarySubject}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                  {faculty.bio}
                </p>

                {/* Quote */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl relative border-l-4 border-amber-500">
                  <Quote className="h-5 w-5 text-amber-500 absolute top-3 left-3 opacity-50" />
                  <p className="text-sm italic text-gray-700 dark:text-gray-300 pl-8">
                    "{faculty.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Meet Our Faculty in Person</h3>
            <p className="text-xl mb-6 opacity-90">
              Experience our teaching methodology firsthand with a free demo
              class
            </p>

            <button
              onClick={() =>
                window.open(
                  'https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo',
                  '_blank'
                )
              }
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Schedule a Demo Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
