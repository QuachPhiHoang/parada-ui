import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import BannerItem from './BannerItem/BannerItem';
import bannerData from '~/fakeData/banner/bannerData';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const data = bannerData;

function Banner({ auto }) {
    const [active, setActive] = useState(0);

    const nextBanner = () => {
        const index = active + 1 > data.length ? 0 : active + 1;
        setActive(index);
    };

    useEffect(() => {
        if (auto) {
            const bannerAuto = setInterval(() => {
                nextBanner();
            }, 3000);
            return () => {
                clearInterval(bannerAuto);
            };
        }
    }, [nextBanner]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('site')}>Trending Now</div>
            <div className={cx('banner')} auto={true}>
                {data.map((data) => (
                    <BannerItem key={data.id} data={data} active={active === data.id} />
                ))}
            </div>
        </div>
    );
}

export default Banner;
