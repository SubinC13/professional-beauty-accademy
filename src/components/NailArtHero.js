'use client';

export default function NailArtHero() {
  const handleEnrollClick = () => {
    const enrollSection = document.getElementById('enrollment-form');
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center blur-sm bg-no-repeat" 
           style={{
             backgroundImage: `url('https://ik.imagekit.io/hbyj63led/pexels-filirovska-8250149.jpg?updatedAt=1760381278143')`
           }}>
        <div className="absolute inset-0 bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Sub-heading */}
          <p className="text-sm md:text-base text-gray-300 font-bold uppercase tracking-widest mb-4 font-sans">
            {/* Professional Training */}
          </p>
          
          {/* Main Headlines */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            <span className="block uppercase">Learn Nail Artistry</span>
            <span className="block uppercase">with Professional</span>
            <span className="block uppercase">Beauty Academy</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white mb-8 font-bold leading-relaxed">
            Transform your passion for nail art into a professional career. Learn advanced 
            techniques, creative designs, and business skills with our comprehensive nail 
            artistry program led by industry experts.
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
