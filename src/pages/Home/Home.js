import Advertise from '~/components/Advertise';
import Banner from '~/components/Banner';
import Header from '~/components/Header';
import HeroSlide from '~/components/HeroSlide';
import Slick from '~/components/Slick';
function Home() {
    return (
        <div>
            <Header />
            <Advertise />
            <HeroSlide auto={true} />
            <Banner />
            <Slick auto={true} />
        </div>
    );
}

export default Home;
