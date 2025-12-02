import React, { useState } from 'react';
import { Play, Pause, Volume2, ExternalLink, Star, Trophy } from 'lucide-react';

const VoicesOfSuccess: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // YouTube video IDs in reverse order (14 to 1)
  const youtubeVideos = [
       "kKSu_I69coA",
"fCtJZ4uOo7I",
"37Ik0vUROkU",
"CwwXmRZoyd8",
"rmAc-mwlBEU",
"t8IgVHs8hvg",
"Sybi_28yoVk" ,    
"QTQEQTYFGJw",
"nxCfj6MI9g8",
"iCab6sryj80",
"kMRCFVjzP5E",
"R3_H5IL_9LA",
"TOWMbz-HpW4",
"EpwALbCEApg",
  ].reverse();

  const getYouTubeId = (urlOrId: string) => {
    try {
      if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) return urlOrId;
      const url = new URL(urlOrId);
      if (url.hostname.includes("youtu.be")) {
        return url.pathname.slice(1);
      }
      if (url.hostname.includes("youtube.com")) {
        if (url.pathname.startsWith("/shorts/")) {
          return url.pathname.split("/shorts/")[1];
        }
        return url.searchParams.get("v");
      }
      return urlOrId;
    } catch {
      return urlOrId;
    }
  };

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <section id="voices-success" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Animation */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <Volume2 className="h-12 w-12 text-purple-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Voices of <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Success</span>
            </h2>
          </div>
          
          <div className="relative">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              🎵 HIT, PLAY AND HEAR THEIR JOURNEY AT YKC 🎵
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Listen to the inspiring success stories directly from our students. 
              Their voices tell the real story of transformation and achievement.
            </p>
          </div>
        </div>

        {/* Video Grid - 2 Columns for Phone-like View */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
          {youtubeVideos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-purple-400"
            >
              {/* Video Container - Shorts Ratio */}
              <div className="relative" style={{ paddingTop: "177.78%" /* 9:16 ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeId(video)}?rel=0&modestbranding=1`}
                  title={`Success Story ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Compact Video Info */}
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-400" />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Story #{index + 1}</span>
                  </div>
                  <a
                    href={`https://youtube.com/watch?v=${getYouTubeId(video)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 lg:p-12 rounded-2xl text-white text-center">
          <Trophy className="h-16 w-16 text-purple-200 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Your Success Story Awaits</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their lives at YKC. 
            Your inspiring journey could be the next success story we share!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20start%20my%20success%20journey%20at%20YKC", "_blank")}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </button>
            
            <button
              onClick={() => window.open("tel:+919213092876", "_self")}
              className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 transform hover:scale-105 shadow-lg"
            >
              Call Us Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VoicesOfSuccess;
