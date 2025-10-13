'use client';

import { useState } from 'react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover blur-xs bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url('https://ik.imagekit.io/hbyj63led/pexels-george-milton-6953625.jpg?updatedAt=1760378581398')`
           }}>
        <div className="absolute inset-0  bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 uppercase text-center lg:text-left">
              ENROLL NOW
            </h2>
            
            {/* Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl">
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-bold">Success!</p>
                  <p>Your enrollment form has been submitted successfully.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-bold">Error!</p>
                  <p>Failed to submit the form. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-black font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    placeholder="Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-black font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-black font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-black font-bold mb-2">Course</label>
                  <div className="relative">
                    <select 
                      name="course"
                      value={formData.course} 
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white appearance-none pr-10"
                      required
                    >
                      <option value="Basic beautician Course">Basic beautician Course</option>
                      <option value="Advanced beautician Course">Advanced beautician Course</option>
                      <option value="Diploma beautician Course">Diploma beautician Course</option>
                      <option value="Mehandi Course">Mehandi Course</option>
                      <option value="Tattoo Course">Tattoo Course</option>
                      <option value="Nail Art Course">Nail Art Course</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-6 py-2 font-bold hover:bg-gray-800 transition-colors btn-primary w-full h-15" 
                >
                  {isSubmitting ? 'SUBMITTING...' : 'ENROLL'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
