import Header from '../../components/Header';
import NailArtHero from '../../components/NailArtHero';
import NailArtCourses from '../../components/NailArtCourses';
import EnrollmentForm from '../../components/EnrollmentForm';
import Footer from '../../components/Footer';

export default function NailArtPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NailArtHero />
      <NailArtCourses />
      <div id="enrollment-form">
        <EnrollmentForm />
      </div>
      <Footer />
    </div>
  );
}
