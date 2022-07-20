import Advertise from '~/components/Advertise';
import Banner from '~/components/Banner';
import Header from '~/components/Header';
import HeroSlide from '~/components/HeroSlide';
function Home() {
    return (
        <div>
            <Header />
            <Advertise />
            <HeroSlide auto={true} />
            <Banner auto={true} />
        </div>
    );
}

export default Home;
