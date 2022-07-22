import PropTypes from 'prop-types';
import styles from './HeroSlide.module.scss';
import classNames from 'classnames/bind';
import SlideItem from './SlideItem/SlideItem';
import slideData from '~/fakeData/slideData/fakeData';
import { useEffect, useState, useCallback } from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const data = slideData;

function HeroSlide({ auto }) {
    const [slideActive, setSlideActive] = useState(0);

    const nextSlide = useCallback(() => {
        const index = slideActive + 1 === data.length ? 0 : slideActive + 1;
        setSlideActive(index);
    }, [slideActive]);

    const prevSlide = () => {
        const index = slideActive - 1 < 0 ? data.length - 1 : slideActive - 1;
        setSlideActive(index);
    };

    useEffect(() => {
        if (auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => {
                clearInterval(slideAuto);
            };
        }
    }, [nextSlide, auto]);

    const moveDot = () => {};

    return (
        <div className={cx('hero-slider')}>
            <div className={cx('left-icon')} onClick={prevSlide}>
                <img src={images.left} alt="left" />
            </div>
            {data.map((item, index) => (
                <SlideItem key={item.id} data={item} active={slideActive === index} />
            ))}
            <div className={cx('right-icon')} onClick={nextSlide}>
                <img src={images.right} alt="right" />
            </div>
            <div className={cx(`slide-dot`)}>
                {Array.from({ length: data.length }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={cx(`${slideActive === index ? 'active' : 'dot'}`)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

HeroSlide.propTypes = {
    auto: PropTypes.bool.isRequired,
};

export default HeroSlide;
