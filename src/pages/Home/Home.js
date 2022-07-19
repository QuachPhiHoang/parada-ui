import Advertise from '~/components/Advertise';
import Header from '~/components/Header';
import HeroSlide from '~/components/HeroSlide';
function Home() {
    return (
        <div>
            <Header />
            <Advertise />
            <HeroSlide auto={true} />
        </div>
    );
}

export default Home;
