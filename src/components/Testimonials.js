export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white text-center mb-16 uppercase tracking-wide">
          WHAT OUR STUDENTS THINK OF US?
        </h2>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg testimonial-card">
            <div className="text-4xl text-white mb-4">"</div>
            <p className="text-white mb-6 leading-relaxed">
              "The training at The Professional Beauty Academy completely transformed my career. The instructors are highly skilled, and the hands-on experience is truly invaluable."
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg testimonial-card">
            <div className="text-4xl text-white mb-4">"</div>
            <p className="text-white mb-6 leading-relaxed">
              "Outstanding curriculum and hands-on training! I gained the confidence and skills that opened doors to exciting opportunities in the global beauty industry."
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg testimonial-card">
            <div className="text-4xl text-white mb-4">"</div>
            <p className="text-white mb-6 leading-relaxed">
              "The academy’s industry connections and modern techniques gave me the knowledge and confidence to start my own successful beauty salon."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
