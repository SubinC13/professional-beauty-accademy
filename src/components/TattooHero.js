'use client';

export default function TattooHero() {
  const handleEnrollClick = () => {
    const enrollSection = document.getElementById('enrollment-form');
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover blur-sm bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url('https://ik.imagekit.io/hbyj63led/pexels-brett-sayles-2126124.jpg?updatedAt=1760381930127')`
           }}>
        <div className="absolute inset-0 bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Sub-heading */}
          <p className="text-sm md:text-base text-gray-300 uppercase tracking-widest mb-4 font-sans">
            {/* Professional Training */}
          </p>
          
          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            <span className="block uppercase">Professional Tattoo</span>
            <span className="block uppercase">Artistry at</span>
            <span className="block uppercase">Our Academy</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white mb-8 font-light leading-relaxed">
            Transform your artistic passion into a professional tattoo career. Learn advanced 
            techniques, safety protocols, and business skills with our comprehensive tattoo 
            artistry program led by industry professionals.
          </p>
          
          {/* Enroll Button */}
          <button 
            onClick={handleEnrollClick}
            className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors btn-primary uppercase tracking-wide"
          >
            ENROLL NOW
          </button>
        </div>
      </div>
    </section>
  );
}
