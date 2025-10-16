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
    name: "Priya Jayakumar",
    title: "CEO and co-founder of The Professional Beauty Academy",
    description: "Welcome to The Professional Beauty Academy, a premier institution with over 15 years of excellence in beauty education. Founded by the accomplished beauty expert Priya Jayakumar, our academy is dedicated to empowering individuals with the skills and confidence needed to excel in the dynamic beauty industry. We offer a comprehensive range of courses, including Skin Care, Beauty Treatments, Hair Styling, Grooming, Make-Up Artistry, Mehndi, Nail Art, Tattoos, Hair Dressing, and Advanced Bridal Make-Up. With a hands-on training approach, state-of-the-art facilities, and personalized guidance, we ensure our students are industry-ready and equipped to build successful careers. At The Professional Beauty Academy, we don’t just teach beauty – we inspire creativity, professionalism, and passion. Let us help you turn your dreams into reality and embark on a fulfilling journey in the world of beauty.",
    image: "https://ik.imagekit.io/hbyj63led/founder-image_hCmFJanew?updatedAt=1760627458218",
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
