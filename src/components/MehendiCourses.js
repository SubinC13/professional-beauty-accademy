"use client";

export default function MehendiCourses() {
  const handleEnrollClick = () => {
    const enrollSection = document.getElementById("enrollment-form");
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4 uppercase tracking-wide">
            Mehendi Course Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive Mehendi artistry program covers three essential
            modules designed to transform you into a professional Mehendi artist
            ready for the beauty industry.
          </p>
        </div>

        {/* Courses */}
        <div className="space-y-20">
          {/* Course 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {/* Image Section */}
            <div className="md:w-1/2 flex-shrink-0">
              <div className="rounded-lg overflow-hidden h-full">
                <img
                  src="https://ik.imagekit.io/hbyj63led/WhatsApp%20Image%202025-10-12%20at%2022.12.56%20(1).jpeg?updatedAt=1760376895895"
                  alt="Nail Art Training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-serif text-black mb-6">
                Mehendi Course Modules
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Master the art of traditional and modern Mehendi through this
                immersive, hands-on course. You’ll learn expert techniques for
                applying intricate designs, proper hand and arm preparation, and
                the use of natural and synthetic henna. This program blends
                creativity with precision — helping you build a strong
                foundation in professional Mehendi artistry. Go beyond basic
                patterns as you explore bridal designs, contemporary motifs,
                floral and geometric compositions, and custom personalization.
                You’ll gain confidence in client consultation, understanding
                skin types, and ensuring safe and lasting application —
                essential skills for any aspiring Mehendi artist. By the end of
                this course, you’ll be able to deliver stunning, salon-quality
                Mehendi designs with finesse and attention to detail. Whether
                you’re a beginner looking to start a career in Mehendi artistry
                or a beauty professional wanting to expand your skillset, this
                program will empower you to turn your creativity into a thriving
                profession.
              </p>

              <ul className="text-gray-600 mb-8 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-pink-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Professional pattern outlining and detailing
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-pink-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Expert floral and geometric designs
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-pink-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Accurate traditional and modern motifs
                </li>
              </ul>

              <button
                onClick={handleEnrollClick}
                className="bg-gray-800 text-white px-6 py-3 font-medium hover:bg-gray-900 transition-colors btn-primary"
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
