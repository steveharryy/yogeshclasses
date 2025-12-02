
import React, { useState } from 'react';
import { X, Camera, Heart, Sparkles, Users } from 'lucide-react';

// ✅ Ensure these filenames are correct in the `photos` folder
import achievement from '../photos/achievement.jpg';
import classroom1 from '../photos/classroom.jpg';
import classroom2 from '../photos/clasromm.jpg';
import community1 from '../photos/community.jpg';
import community2 from '../photos/commutniy.jpg';
import mentor from '../photos/mentor.jpg';
import support from '../photos/support.jpg';
import assessment from '../photos/assesment.jpg';
import celebration from '../photos/achiveeve.jpg'; // assumed it's a valid file

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ Only add images that have valid src
  const galleryImages = [
    {
      src: classroom2,
      caption: 'Power cuts don\'t stop us — flashlights on, learning on ✨',
      category: 'classroom'
    },
    {
      src: celebration,
      caption: 'When hard work meets celebration 🎉',
      category: 'achievement'
    },
    {
      src: community1,
      caption: 'One family, infinite memories ❤',
      category: 'community'
    },
    {
      src: classroom1,
      caption: 'Interactive learning sessions that make concepts stick 💡',
      category: 'classroom'
    },
    {
      src: mentor,
      caption: 'Faculty mentoring sessions that build confidence 🌟',
      category: 'mentoring'
    },
    {
      src: achievement,
      caption: 'Board results day - pure joy and pride! 🏆',
      category: 'achievement'
    },
    {
      src: support,
      caption: 'Doubt clearing sessions - no question left unanswered ❓',
      category: 'support'
    },
    {
      src: community2,
      caption: 'Study groups that feel like family gatherings 👨‍👩‍👧‍👦',
      category: 'community'
    },
    {
      src: assessment,
      caption: 'Mock test sessions - practice makes perfect 📝',
      category: 'assessment'
    }
  ].filter(image => image?.src); // ✅ Remove images with missing src

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Life @ <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">YKC</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            More than just classes — it's an experience. Where learning meets memories, 
            and every moment becomes a stepping stone to success.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
            <Camera className="h-5 w-5" />
            <span>Click any image to view full size</span>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      {image.caption}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Close image"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Moments</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Memories Captured</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Special Events</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years of Memories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
