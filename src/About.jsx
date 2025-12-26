import Navbar from './Navbar'
import ContactUs from './ContactUs'
import Footer from './Footer'
import AboutUsHero from './AboutUsHero'
import Team from './Team'

function About() {

    return (
        <div className='flex flex-col gap-7'>
            <Navbar />
            <AboutUsHero />
            <Team />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default About