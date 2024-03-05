
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Integrations from '../components/Integrations';
import MiroBanner from '../components/MiroBanner';
import MiroFeatures from '../components/MiroFeatures';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import TeamMember from '../components/TeamMember';
import TrustedSection from '../components/TrastedSection';
import WorkBanner from '../components/WorkBanner';
import WorkSection from '../components/WorkSection';

const Home = () => {
  return (
   <div>
   <Navbar/>
   <Banner/>
   <TrustedSection/>
   <MiroFeatures/>
   <MiroBanner/>
  <Integrations/>
  <WorkBanner/>
  <WorkSection/>
  <Services/>
  <TeamMember/>
  <Footer/>
   </div>
  );
};

export default Home;