import TopHeader from  '../../components/topheader/page';
import NavUpper from '../../components/navupper/page';
import Navbar from '../../components/navbar/page';
import About1 from '../../components/about1/page';
import About2 from '../../components/about2/page';
import About3 from '../../components/about3/page';
import Footer from '../../components/footer/page';

export default function body() {
  return(
    <div className='bg-white'>
      <TopHeader />
      <NavUpper />
      <Navbar />
      <About1 />  
      <About2 />
      <About3 />
      <Footer />
    </div>
  )
}