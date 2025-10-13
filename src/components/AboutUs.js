'use client';

import HeroSection from './HeroSection';
import BiographySection from './BiographySection';
import EnrollmentForm from './EnrollmentForm';

export default function AboutUs() {
  // Sample data - replace with actual data
  const heroData = {
    title: "ABOUT US",
    subtitle: "We’ve built a strong reputation for training skilled beauty professionals through expert education, personalized support, and hands-on industry experience.",
    buttonText: "Enroll Now",
    backgroundImage: "https://ik.imagekit.io/hbyj63led/pexels-cottonbro-9430982.jpg?updatedAt=1760379945618"
  };

  const toniData = {
    name: "TONI MASCOLO",
    title: "CEO and co-founder of TONI&GUY",
    description: "Toni Mascolo was a visionary leader who transformed the hairdressing industry with his innovative approach and dedication to excellence. As CEO and co-founder of TONI&GUY, he played a pivotal role in establishing the brand as a global leader in hairdressing education and salon operations. His commitment to nurturing talent and sharing knowledge led to the creation of comprehensive training programs that have shaped thousands of careers worldwide. Toni's legacy includes prestigious recognition and his Fellowship of British Hairdressers, cementing his place as one of the most influential figures in the hairdressing industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    reverse: false
  };

  const handleEnrollClick = () => {
    // Scroll to enrollment form or handle enrollment
    const enrollSection = document.getElementById('enrollment-form');
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        {...heroData}
        onButtonClick={handleEnrollClick}
      />
      <BiographySection {...toniData} />
      <div id="enrollment-form">
        <EnrollmentForm />
      </div>
    </div>
  );
}
