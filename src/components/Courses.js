import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-16 uppercase tracking-wide">
          COURSES WE OFFERED
        </h2>

        <div className="space-y-16">
          {/* Course 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:order-1 md:col-span-4">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://ik.imagekit.io/hbyj63led/WhatsApp%20Image%202025-10-12%20at%2022.12.54.jpeg?updatedAt=1760376896271" 
                  alt="12 Weeks Beginners Course" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:order-2 md:col-span-8">
              <h3 className="text-3xl font-serif text-white mb-6 uppercase">
                beautician courses
              </h3>
              <p className="text-white text-lg leading-relaxed mb-8">
                We offer a wide range of courses in beauty, skincare, and hair care. Our programs are divided into three main categories — Basic, Advanced, and Diploma Courses.
                Each course is designed to provide hands-on training, helping students gain real-world experience in professional beauty techniques.
                Whether you're a beginner or looking to upgrade your skills, The Professional Beauty Academy gives you the perfect platform to build a successful career in the beauty industry.
              </p>
              <Link href="/beautician" className="inline-block bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors btn-primary">
                Know More Info
              </Link>
            </div>
          </div>

          {/* Course 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://ik.imagekit.io/hbyj63led/WhatsApp%20Image%202025-10-12%20at%2022.12.55.jpeg?updatedAt=1760376895922" 
                  alt="18 Weeks Advanced Beginners Course" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl font-serif text-white mb-6 uppercase">Mehandi Course</h3>
              <p className="text-white text-lg leading-relaxed mb-8">
                At The Professional Beauty Academy, our Mehandi Course teaches the intricate art of traditional and modern henna design.
                You'll master everything from basic cone handling and pattern creation to advanced bridal and Arabic styles.
                Our hands-on training ensures you gain the confidence to create stunning, customized Mehandi designs for any occasion.
                Whether you're starting fresh or enhancing your existing skills, this course helps you turn your creativity into a professional career.
              </p>
              <Link href="/mehendi" className="inline-block bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors btn-primary">
                Know More Info
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:order-1 md:col-span-4">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://ik.imagekit.io/hbyj63led/WhatsApp%20Image%202025-10-12%20at%2022.12.56.jpeg?updatedAt=1760376896204" 
                  alt="2 Weeks Advanced Course" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:order-2 md:col-span-8">
              <h3 className="text-3xl font-serif text-white mb-6 uppercase">Tattoo Course</h3>
              <p className="text-white text-lg leading-relaxed mb-8">
                At The Professional Beauty Academy, our Tattoo Course is designed for aspiring artists who want to turn their passion into a professional skill.
                You'll learn everything from basic techniques and safety protocols to advanced designs and modern tattoo styles.
                Hands-on training with guidance from experienced instructors ensures you gain the confidence to create precise and creative tattoos for clients.
                Whether you're a beginner or looking to refine your artistry, this course provides the perfect platform to launch a successful tattoo career.
              </p>
              <Link href="/tattoo" className="inline-block bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors btn-primary">
                Know More Info
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image 
                  src="https://ik.imagekit.io/hbyj63led/WhatsApp%20Image%202025-10-12%20at%2022.12.56%20(1).jpeg?updatedAt=1760376895895"
                  alt="Advanced Professional Course" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-3xl font-serif text-white mb-6">Nail Art Course</h3>
              <p className="text-white text-lg leading-relaxed mb-8 uppercase">
                At The Professional Beauty Academy, our Nail Art Course is designed to turn your creativity into a professional skill.
                You'll learn basic manicure and pedicure techniques, as well as advanced nail art designs, gel, acrylics, and nail extensions.
                With hands-on guidance from experienced instructors, you'll gain the confidence to create stunning, customized nail designs for clients.
              </p>
              <Link href="/nail-art" className="inline-block bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors btn-primary">
                Know More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
