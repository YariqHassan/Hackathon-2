import TopHeader from  '../../components/topheader/page';
import NavUpper from '../../components/navupper/page';
import Navbar from '../../components/navbar/page';
import Faqs from '../../components/faqs/page';
import Footer from '../../components/footer/page';

export default function body() {
  return(
    <div className='bg-white'>
      <TopHeader />
      <NavUpper />
      <Navbar />
      <Faqs />
      <Footer />
    </div>
  )
}