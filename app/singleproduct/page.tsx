import TopHeader from  '../../components/topheader/page';
import NavUpper from '../../components/navupper/page';
import Navbar from '../../components/navbar/page';
import Footer from '../../components/footer/page';
import ProductDetails from '../../components/productsingle/page';
import FeaturedProducts from '../../components/ftproducts/page';




export default function body() {
  return(
    <div className='bg-white'>
      <TopHeader />
      <NavUpper />
      <Navbar />
      <ProductDetails />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}