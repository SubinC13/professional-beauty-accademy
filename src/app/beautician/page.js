import Header from '../../components/Header';
import BeauticianHero from '../../components/BeauticianHero';
import BeauticianCourses from '../../components/BeauticianCourses';
import EnrollmentForm from '../../components/EnrollmentForm';
import Footer from '../../components/Footer';

export default function BeauticianPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BeauticianHero />
      <BeauticianCourses />
      <div id="enrollment-form">
        <EnrollmentForm />
      </div>
      <Footer />
    </div>
  );
}
