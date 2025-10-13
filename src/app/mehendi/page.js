import Header from '../../components/Header';
import MehendiHero from '../../components/MehendiHero';
import MehendiCourses from '../../components/MehendiCourses';
import EnrollmentForm from '../../components/EnrollmentForm';
import Footer from '../../components/Footer';

export default function MehendiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MehendiHero />
      <MehendiCourses />
      <div id="enrollment-form">
        <EnrollmentForm />
      </div>
      <Footer />
    </div>
  );
}
