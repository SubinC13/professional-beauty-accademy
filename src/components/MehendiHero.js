'use client';

export default function MehendiHero() {
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
             backgroundImage: `url('https://ik.imagekit.io/hbyj63led/pexels-qazi-1199605.jpg?updatedAt=1760381846109')`
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
          <h1 className="text-4xl md:text-6xl font-bold lg:text-6xl font-serif text-white leading-tight mb-6">
            <span className="block uppercase">Master Traditional</span>
            <span className="block uppercase">Mehendi at</span>
            <span className="block uppercase">TOur Academy</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white font-bold mb-8 leading-relaxed">
            Learn the ancient art of Mehendi with modern techniques and contemporary designs. 
            Master traditional patterns, bridal Mehendi, and creative applications with our 
            comprehensive program led by expert artists.
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
