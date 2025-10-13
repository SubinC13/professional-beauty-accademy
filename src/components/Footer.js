export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold text-black mb-4">
              <div>TONI&GUY</div>
              <div className="text-sm font-normal">ACADEMY</div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">ADDRESS</h3>
            <p className="text-gray-600">
              M-11, 3rd Floor, Greater Kailash,<br />
              Part 2, M Block Market<br />
              Delhi, India
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">PHONE</h3>
            <p className="text-gray-600">98 2990 6943</p>
            
            <h3 className="text-black font-bold mb-4 mt-8 uppercase">ACADEMY TIMINGS</h3>
            <div className="text-gray-600 space-y-1">
              <div>Mon - 10:00 AM - 5:30 PM</div>
              <div>Tue - 10:00 AM - 5:30 PM</div>
              <div>Wed - 10:00 AM - 5:30 PM</div>
              <div>Thu - 10:00 AM - 5:30 PM</div>
              <div>Fri - 10:00 AM - 5:30 PM</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">ACADEMY</h3>
            <div className="space-y-2 text-gray-600">
              <div><a href="#courses" className="hover:text-black transition-colors">OUR COURSES</a></div>
              <div className="ml-4 space-y-1">
                <div><a href="#" className="hover:text-black transition-colors">WHATSAPP</a></div>
                <div><a href="#" className="hover:text-black transition-colors">FACEBOOK</a></div>
                <div><a href="#" className="hover:text-black transition-colors">INSTAGRAM</a></div>
              </div>
              <div className="ml-4 space-y-1">
                <div><a href="#about" className="hover:text-black transition-colors">ABOUT US</a></div>
                <div><a href="#" className="hover:text-black transition-colors">PRIVACY POLICY</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
