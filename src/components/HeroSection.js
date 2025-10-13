'use client';

export default function HeroSection({ 
  title, 
  subtitle, 
  buttonText = "Enroll Now", 
  backgroundImage, 
  onButtonClick 
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 fade-in-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-sans mb-8 leading-relaxed fade-in-up">
          {subtitle}
        </p>
        <button 
          onClick={onButtonClick}
          className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 btn-primary fade-in-up"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
