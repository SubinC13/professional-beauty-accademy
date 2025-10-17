import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Image
                  src="https://ik.imagekit.io/hbyj63led/Gemini_Generated_Image_1es3qy1es3qy1es3.png?updatedAt=1760686038384"
                  alt="Professional Beauty Academy Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="h-12 w-px bg-gray-400 mx-2"></div>
              <div className="flex flex-col leading-tight">
                <div className="font-serif font-bold text-lg tracking-wide">
                  The Professional
                </div>
                <div className="text-sm font-normal text-gray-700">
                  Beauty Academy
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">ADDRESS</h3>
            <p className="text-gray-600">
              Coimbatore
              <br />
              {/* Part 2, M Block Market<br />
              Delhi, India */}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">PHONE</h3>
            <p className="text-gray-600">+91 7708818993</p>

            <h3 className="text-black font-bold mb-4 mt-8 uppercase">
              ACADEMY TIMINGS
            </h3>
            <div className="text-gray-600 space-y-1">
              <div>Mon - 09:00 AM - 06:00 PM</div>
              <div>Tue - 09:00 AM - 06:00 PM</div>
              <div>Wed - 09:00 AM - 06:00 PM</div>
              <div>Thu - 09:00 AM - 06:00 PM</div>
              <div>Fri - 09:00 AM - 06:00 PM</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">ACADEMY</h3>
            <div className="space-y-2 text-gray-600">
              <div>
                <a
                  href="#courses"
                  className="hover:text-black transition-colors"
                >
                  OUR COURSES
                </a>
              </div>
              <div className="ml-4 space-y-1">
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=917708818993"
                    className="hover:text-black transition-colors"
                  >
                    WHATSAPP
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-black transition-colors">
                    FACEBOOK
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/professionalbeautyacademycbe?igsh=MWtrNmpoMjdyMmhvaw=="
                    className="hover:text-black transition-colors"
                  >
                    INSTAGRAM
                  </a>
                </div>
              </div>
              <div className="ml-4 space-y-1">
                <div>
                  <a
                    href="/about"
                    className="hover:text-black transition-colors"
                  >
                    ABOUT US
                  </a>
                </div>
                {/* <div><a href="#" className="hover:text-black transition-colors">PRIVACY POLICY</a></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
