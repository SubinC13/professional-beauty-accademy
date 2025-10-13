import Header from '../components/Header';
import Hero from '../components/Hero';
import QuoteStatistics from '../components/QuoteStatistics';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import EnrollmentForm from '../components/EnrollmentForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuoteStatistics />
      <Courses />
      <Testimonials />
      <div id="enrollment-form">
        <EnrollmentForm />
      </div>
      <Footer />
    </div>
  );
}