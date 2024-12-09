import TopHeader from  '../../components/topheader/page';
import NavUpper from '../../components/navupper/page';
import Navbar from '../../components/navbar/page';
import Footer from '../../components/footer/page';
import CartSection from '../../components/cartproducts/page';

export default function body() {
  return(
    <div className='bg-white'>
      <TopHeader />
      <NavUpper />
      <Navbar />
      <CartSection />
      <Footer />
    </div>
  )
}