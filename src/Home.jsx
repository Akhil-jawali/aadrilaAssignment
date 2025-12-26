import Navbar from './Navbar'
import Hero from './Hero'
import Industries from './Industires'
import Products from './Products'
import Blog from './Blog'
import ContactUs from './ContactUs'
import Footer from './Footer'
import AboutUsHero from './AboutUsHero'
import Team from './Team'

function Home() {

    return (
        <div className='flex flex-col gap-7'>
            <Navbar />
            <Hero />
            <Industries />
            <Products />
            <Blog />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home