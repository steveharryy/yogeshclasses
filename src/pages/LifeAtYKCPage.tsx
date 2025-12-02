import React, { useState, useEffect } from 'react';
import { X, Camera, Heart, Sparkles, Users, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


////classroom vibes images
import classroom1 from '../lifeykc/classroom1.jpg';
import classroom2 from '../lifeykc/classroom2.jpg';
import classroom3 from '../lifeykc/classroom3.jpg';
import classroom4 from '../lifeykc/classroom4.jpg';
import classroom5 from '../lifeykc/classroom5.jpg';
import classroom6 from '../lifeykc/classroom6.png';
import classroom7 from '../lifeykc/classroom7.jpg';
import classroom8 from '../lifeykc/classroom8.jpg';
import classroom9 from '../lifeykc/classroom9.jpg';
import classroom10 from '../lifeykc/classroom10.jpg';
import classroom11 from '../lifeykc/classroom11.jpg';
import classroom12 from '../lifeykc/classroom12.jpg';
import classroom13 from '../lifeykc/classroom13.jpg';
import classroom14 from '../lifeykc/classroom14.jpg';
import classroom15 from '../lifeykc/classroom15.jpg';


///award ceremony 

import award1 from '../lifeykc/award1.png';
import award2 from '../lifeykc/award2.png';
import award3 from '../lifeykc/award3.png';
import award4 from '../lifeykc/award4.jpg';
import award5 from '../lifeykc/award5.png';
import award6 from '../lifeykc/award6.png'
import award7 from '../lifeykc/award7.png';
import award8 from '../lifeykc/award8.png';
import award9 from '../lifeykc/award9.png';
import award10 from '../lifeykc/award10.png';
import award11 from '../lifeykc/award11.png';
import award12 from '../lifeykc/award12.png';
import award13 from '../lifeykc/award13.png';
import award14 from'../lifeykc/award14.png';
import award15 from '../lifeykc/award15.png';

///rewind captured vibes
import rewind1 from '../lifeykc/rewind1.jpg';
import rewind2 from '../lifeykc/rewind2.jpg';
import rewind3 from '../lifeykc/rewind3.jpg';
import rewind4 from '../lifeykc/rewind4.jpg';
import rewind5 from '../lifeykc/rewind5.jpg';
import rewind6 from '../lifeykc/rewind6.jpg';
import rewind7 from '../lifeykc/rewind7.jpg';
import rewind8 from '../lifeykc/rewind8.jpg';
import rewind9 from '../lifeykc/rewind9.jpg';
import rewind10 from '../lifeykc/rewind10.jpg';
import rewind11 from '../lifeykc/rewind11.jpg';
import rewind12 from '../lifeykc/rewind12.jpg';
import rewind13 from '../lifeykc/rewind13.jpg';
import rewind14 from '../lifeykc/rewind14.jpg';
import rewind15 from '../lifeykc/rewind15.jpg';
import rewind16 from '../lifeykc/rewind16.jpg';
import rewind17 from '../lifeykc/rewind17.jpg';
import rewind18 from '../lifeykc/rewind18.jpg';
import rewind19 from '../lifeykc/rewind19.jpg';
import rewind20 from '../lifeykc/rewind20.jpg';
import rewind21 from '../lifeykc/rewind21.jpg';
import rewind22 from '../lifeykc/rewind22.jpg';
import rewind23 from '../lifeykc/rewind23.jpg';
import rewind24 from '../lifeykc/rewind24.jpg';
import rewind25 from '../lifeykc/rewind25.jpg';





const classroomImages = [
  classroom1, classroom2, classroom3, classroom4, classroom5, classroom6,
  classroom7, classroom8, classroom9, classroom10, classroom11,
  classroom12, classroom13, classroom14, classroom15
];

const rewindImages = [
  rewind1, rewind2, rewind3, rewind4, rewind5, rewind6, rewind7, rewind8,
  rewind9, rewind10, rewind11, rewind12, rewind13, rewind14, rewind15,
  rewind16, rewind17, rewind18, rewind19, rewind20, rewind21, rewind22,
  rewind23, rewind24, rewind25
];

const spotlightImages = [
  award1, award2, award3, award4, award5, award6, award7, award8,
  award9, award10, award11, award12, award13, award14, award15
];

const LifeAtYKCPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGallery, setCurrentGallery] = useState<'spotlight' | 'classroom' | 'rewind' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryMap = {
    spotlight: spotlightImages,
    classroom: classroomImages,
    rewind: rewindImages,
  };

  const openImage = (img: string, gallery: 'spotlight' | 'classroom' | 'rewind') => {
    setSelectedImage(img);
    setCurrentGallery(gallery);
    const index = galleryMap[gallery].indexOf(img);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    if (!currentGallery) return;
    const gallery = galleryMap[currentGallery];
    const newIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const handleNext = () => {
    if (!currentGallery) return;
    const gallery = galleryMap[currentGallery];
    const newIndex = (currentIndex + 1) % gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentGallery, currentIndex]);

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

      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Life @ <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">YKC</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              More than just classes — it's an experience. Where learning meets memories,
              and every moment becomes a stepping stone to success.
            </p>

            <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
              <Camera className="h-5 w-5" />
              <span>Click any image to view full size</span>
            </div>
          </div>
        </div>
      </section>

      {/* SPOTLIGHT SECTION */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Spotlight
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Highlighting the moments that define the YKC experience
            </p>
          </div>

          {/* SPOTLIGHT PHOTOS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {spotlightImages.map((img, index) => (
              <div
                key={`spotlight-${index}`}
                className="aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => openImage(img, 'spotlight')}
              >
                <img
                  src={img}
                  alt={`Spotlight ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CLASSROOM VIBES SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Classroom Vibes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Where learning comes alive with energy and engagement
            </p>
          </div>

          {/* CLASSROOM PHOTOS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {classroomImages.map((img, index) => (
              <div
                key={`classroom-${index}`}
                className="aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => openImage(img, 'classroom')}
              >
                <img
                  src={img}
                  alt={`Classroom ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REWIND SECTION */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Rewind - Captured Vibes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reliving the moments that made memories
            </p>
          </div>

          {/* REWIND PHOTOS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rewindImages.map((img, index) => (
              <div
                key={`rewind-${index}`}
                className="aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => openImage(img, 'rewind')}
              >
                <img
                  src={img}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-12">Life at YKC in Numbers</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-amber-100">Happy Moments</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-amber-100">Memories Captured</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-amber-100">Special Events</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-amber-100">Years of Memories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Be Part of Our Family?
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the YKC family and create your own success story filled with memorable moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919213092876?text=Hi%20I%20want%20to%20visit%20YKC%20and%20experience%20life%20here",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Visit YKC Today
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
      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full w-full">

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close image"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-amber-400 transition-colors duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-amber-400 transition-colors duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image Counter */}
            {currentGallery && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentIndex + 1} / {galleryMap[currentGallery].length}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default LifeAtYKCPage;
