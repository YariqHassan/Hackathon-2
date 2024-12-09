import TopHeader from  '../components/topheader/page';
import NavUpper from '../components/navupper/page';
import Navbar from '../components/navbar/page';
import HomeTop from '../components/hometop/page';
import BrandsRow from '../components/brandsrow/page';
import FeaturedProducts from '../components/featuredproducts/page';
import TopCategories from "../components/categories/page";
import ExploreStyles from "../components/newstyles/page";
import OurProducts from '../components/ourproducts/page';
import Footer from '../components/footer/page';



export default function body() {
  return(
    <div className='bg-white'>
      <TopHeader />
      <NavUpper />
      <Navbar />
      <HomeTop />
      <BrandsRow />
      <FeaturedProducts />
      <TopCategories />
      <ExploreStyles />
      <OurProducts />
      <Footer />
    </div>
  )
}