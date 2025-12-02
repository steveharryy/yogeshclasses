import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Heart, Users, MessageCircle } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

const GoogleReviews: React.FC = () => {
  const [hoveredReview, setHoveredReview] = useState<string | null>(null);

  // Split reviews into two rows for different animation directions
  const row1Reviews = reviewsData.slice(0, Math.ceil(reviewsData.length / 2));
  const row2Reviews = reviewsData.slice(Math.ceil(reviewsData.length / 2));

  const ReviewCard = ({ review, isHovered, onHover, onLeave }: any) => (
    <div
      className={`flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 z-10' : 'hover:-translate-y-2'
      } border border-gray-200 dark:border-slate-700 cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="p-6">
        {/* Profile Photo and Google Logo */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-gray-400">
            <span className="text-white font-bold text-lg">{review.name.charAt(0)}</span>
          </div>
          <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
        </div>

        {/* Name */}
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{review.name}</h4>

        {/* Stars and Time */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">{review.timeAgo || 'Recently'}</span>
        </div>

        {/* Comment */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          {review.comment}
        </p>
      </div>
    </div>
  );

  return (
    <section id="google-reviews" className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Google <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Love</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <svg className="h-16 w-16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            <span className="font-bold text-2xl text-amber-600 dark:text-amber-400">100s of 5 Stars Love On Google</span>
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our Strengths, Our Students - Real reviews from real achievers
          </p>

          {/* Google Rating Display */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">5.0</span>
            <span className="text-gray-600 dark:text-gray-400 text-lg">on Google</span>
          </div>
        </div>

        {/* Animated Reviews - Row 1 (Left to Right) */}
        <div className="mb-6 overflow-hidden">
          <div className="flex animate-scroll-left-to-right">
            {/* Multiply reviews for seamless loop and show all */}
            {[...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews].map((review, index) => (
              <ReviewCard
                key={`row1-${review.id}-${index}`}
                review={review}
                isHovered={hoveredReview === `row1-${review.id}-${index}`}
                onHover={() => setHoveredReview(`row1-${review.id}-${index}`)}
                onLeave={() => setHoveredReview(null)}
              />
            ))}
          </div>
        </div>

        {/* Animated Reviews - Row 2 (Right to Left) */}
        <div className="mb-12 overflow-hidden">
          <div className="flex animate-scroll-right-to-left">
            {/* Multiply reviews for seamless loop and show all */}
            {[...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews].map((review, index) => (
              <ReviewCard
                key={`row2-${review.id}-${index}`}
                review={review}
                isHovered={hoveredReview === `row2-${review.id}-${index}`}
                onHover={() => setHoveredReview(`row2-${review.id}-${index}`)}
                onLeave={() => setHoveredReview(null)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 lg:p-12 rounded-2xl text-white text-center mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>
            <div>
              <Star className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
              <div className="text-3xl font-bold mb-2">5.0★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Google Reviews</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=yogesh+kochar+classes+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>See All Reviews on Google</span>
            <ExternalLink className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;