"use client";

export default function NailArtCourses() {
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
            Nail Art Course Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive nail artistry program includes everything from
            nail care fundamentals to advanced design techniques — preparing you
            for a successful career as a professional nail artist.
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
                Nail Artist Course
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Master the fundamentals of professional nail care through this
                hands-on course. You’ll learn expert techniques for manicure and
                pedicure, proper nail shaping, hygiene practices, and artistic
                nail design. This program blends creativity with precision —
                helping you build a strong foundation in modern nail artistry.
                Go beyond the basics as you explore trending nail styles, gel
                and acrylic extensions, color theory, and design composition.
                You’ll gain confidence in client consultation, nail health
                assessment, and safe product usage — essential skills for any
                aspiring nail technician. By the end of this course, you’ll be
                able to deliver salon-quality results with finesse and attention
                to detail. Whether you’re a beginner looking to start a career
                in nail art or a beauty professional wanting to upgrade your
                skills, this program will empower you to turn your creativity
                into a thriving profession.
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
                  Professional nail shaping and filing
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
                  Cuticle care and nail maintenance
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
                  Hand and foot massage techniques
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
