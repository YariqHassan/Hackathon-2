import TopHeader from  '../../components/topheader/page';
import NavUpper from '../../components/navupper/page';
import Navbar from '../../components/navbar/page';
import ContactForm from '../../components/contactform/page';
import Footer from '../../components/footer/page';
import Stats from '../../components/stats/page';

export default function body() {
  return(
    <div className='bg-white'>
      <TopHeader />
      <NavUpper />
      <Navbar />
      <ContactForm />
      <Stats />
      <Footer />
    </div>
  )
}