import React from 'react'
import Topbar from '../components/common/Topbar'
import Navbar from '../components/common/Navbar'
import CategoryNavButton from '../clientside/categorynavbuttons/CategoryNavButton'
import HeroSection from '../clientside/herosection/HeroSection'
import NewProducts from '../clientside/newproducts/NewProducts'
import HotDeal from '../clientside/hotdeal/HotDealComponent'
import Footer from '../components/common/footer/Footer'
import TopSelling from '../clientside/topselling/TopSelling'
import Newsletter from '../clientside/newsletter/NewsLetter'
import TopCategories from '../clientside/topcategories/TopCategories'

const Home = () => {
  return (

    <>
    <Topbar />
    <Navbar />
    <CategoryNavButton />
    <HeroSection />
    <NewProducts />
    <HotDeal />
    <TopSelling />
    <TopCategories />
  
    <Newsletter />
    <Footer />
    </>

  )
}

export default Home