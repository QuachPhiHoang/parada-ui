import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
// import images from '~/assets/images';

import BannerItem from './BannerItem/BannerItem';
import bannerData from '~/fakeData/banner/bannerData';
// import { useCallback, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const data = bannerData;

function Banner({ auto }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: 'linear',
    // };

    // const [active, setActive] = useState(1);

    // const nextBanner = useCallback(() => {
    //     const index = active + 1 > data.length ? 1 : active + 1;
    //     setActive(index);
    // }, [active]);

    // useEffect(() => {
    //     if (auto) {
    //         const bannerAuto = setInterval(() => {
    //             nextBanner();
    //         }, 3000);
    //         return () => {
    //             clearInterval(bannerAuto);
    //         };
    //     }
    // }, [nextBanner, auto]);

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

// active={active === data.id}
