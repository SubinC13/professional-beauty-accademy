import Header from '../../components/Header';
import TattooHero from '../../components/TattooHero';
import TattooCourses from '../../components/TattooCourses';
import EnrollmentForm from '../../components/EnrollmentForm';
import Footer from '../../components/Footer';

export default function TattooPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TattooHero />
      <TattooCourses />
      <div id="enrollment-form">
        <EnrollmentForm />
      </div>
      <Footer />
    </div>
  );
}
