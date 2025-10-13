'use client';

export default function Hero() {
  const handleEnrollClick = () => {
    const enrollSection = document.getElementById('enrollment-form');
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-start pt-24">
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center blur-lg bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://i.ibb.co/8tXTN83/pexels-cottonbro-3992863.jpg')`
        }}
      ></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Transform Your Passion for Beauty into a Professional Career
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-bold">
            Industry-Recognized Training in Just 12 or 18 Weeks!
          </p>
          <button 
            onClick={handleEnrollClick}
            className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors btn-primary"
          >
            ENROLL NOW
          </button>
        </div>
      </div>
    </section>
  );
}
