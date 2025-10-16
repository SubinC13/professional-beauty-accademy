'use client';

export default function BiographySection({ 
  name, 
  title, 
  description, 
  image, 
  reverse = false,
  className = "" 
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          reverse ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={image}
                alt={name}
                className="w-full h-100 md:h-[700px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              {name}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 font-sans mb-6 font-medium">
              {title}
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-sans leading-relaxed text-base md:text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
