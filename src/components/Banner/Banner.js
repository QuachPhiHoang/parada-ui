import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
import BannerItem from './BannerItem/BannerItem';
import bannerData from '~/fakeData/banner/bannerData';

const cx = classNames.bind(styles);

const data = bannerData;

function Banner({ auto }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('site')}>Trending Now</div>
            <Slider {...settings}>
                {/* <div className={cx('banner')}>
                </div> */}
                {data.map((data) => (
                    <BannerItem key={data.id} data={data} />
                ))}
            </Slider>
        </div>
    );
}

export default Banner;
