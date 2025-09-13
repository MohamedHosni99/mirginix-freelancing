import Hero from './Hero.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const MainPage = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-x-hidden">
        <Header/>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
    </div>
  );
};

export default MainPage;
