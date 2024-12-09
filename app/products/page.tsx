import TopHeader from  '../../components/topheader/page';
import NavUpper from '../../components/navupper/page';
import Navbar from '../../components/navbar/page';
import ProductShowcase from '../../components/productspage/page'
import Footer from '../../components/footer/page';
import NewsletterSection from '../../components/subscription/page';

export default function body() {
  return(
    <div className='bg-white'>
      <TopHeader />
      <NavUpper />
      <Navbar />
      <ProductShowcase />
      <NewsletterSection />
      <Footer />
    </div>
  )
}