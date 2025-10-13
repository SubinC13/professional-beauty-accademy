"use client";

export default function BeauticianCourses() {
  const handleEnrollClick = () => {
    const enrollSection = document.getElementById("enrollment-form");
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-serif uppercase tracking-wide">
            Beautician Course Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed certificate and diploma programs
            in beautician skin and hair care — built to suit beginners,
            professionals, and aspiring salon owners.
          </p>
        </div>

        <div className="space-y-20">
          {/* Basic Certificate Course */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ik.imagekit.io/hbyj63led/WhatsApp%20Image%202025-10-12%20at%2022.12.54.jpeg?updatedAt=1760376896271"
                alt="Basic Certificate Course"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-black mb-6">
                Basic Certificate Course in Beautician Skin and Hair Care
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Get started with the foundations of beauty care. Learn essential
                skin and hair techniques, basic facials, makeup fundamentals,
                and hygiene practices to begin your journey as a professional
                beautician.
              </p>
              <ul className="text-gray-600 mb-8 space-y-2 list-disc list-inside">
                <li>Basic skincare and facial methods</li>
                <li>Introduction to hair care and styling</li>
                <li>Client consultation and hygiene essentials</li>
              </ul>
              <button
                onClick={handleEnrollClick}
                className="bg-gray-800 text-white px-6 py-3 font-medium hover:bg-gray-900 transition-colors"
              >
                ENROLL NOW
              </button>
            </div>
          </div>

          {/* Advanced Certificate Course */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://ik.imagekit.io/hbyj63led/pexels-midtrack-14996838.jpg?updatedAt=1760380586219"
                alt="Advanced Certificate Course"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-serif text-black mb-6">
                Advanced Certificate Course in Beautician Skin and Hair Care
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Upgrade your skills with advanced skin and hair treatments.
                Learn professional facial therapies, chemical peels, creative
                makeup techniques, and modern hairstyling methods used in
                premium salons.
              </p>
              <ul className="text-gray-600 mb-8 space-y-2 list-disc list-inside">
                <li>Advanced facials and skin treatments</li>
                <li>Hair coloring and chemical texturing</li>
                <li>Professional makeup and bridal styling</li>
              </ul>
              <button
                onClick={handleEnrollClick}
                className="bg-gray-800 text-white px-6 py-3 font-medium hover:bg-gray-900 transition-colors"
              >
                ENROLL NOW
              </button>
            </div>
          </div>

          {/* Diploma Course */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ik.imagekit.io/hbyj63led/pexels-cottonbro-3993449.jpg?updatedAt=1760380849738"
                alt="Diploma in Beautician"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-black mb-6">
                Diploma in Beautician Skin and Hair Care
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Become a certified beauty professional with a complete
                understanding of skincare, makeup, hair care, and salon
                management. This program prepares you for leadership roles in
                the beauty industry.
              </p>
              <ul className="text-gray-600 mb-8 space-y-2 list-disc list-inside">
                <li>Comprehensive skin and hair care modules</li>
                <li>Salon operations and client management</li>
                <li>Career development and entrepreneurship</li>
              </ul>
              <button
                onClick={handleEnrollClick}
                className="bg-gray-800 text-white px-6 py-3 font-medium hover:bg-gray-900 transition-colors"
              >
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
