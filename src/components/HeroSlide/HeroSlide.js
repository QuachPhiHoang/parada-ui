import styles from './HeroSlide.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeroSlide() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide')}>
                <div className={cx('thumbnail')}>
                    <img srcSet={`${images.slider1} 2x`} alt="" />
                </div>
                <div className={cx('info')}>
                    <div className={cx('img')}>
                        <img srcSet={`${images.slider2} 2x`} alt="" />
                    </div>
                    <div className={cx('title')}>
                        <div className={cx('brand')}>
                            <img src={images.brand} alt="" />
                        </div>
                        <span className={cx('detail')}>Big Fashion Festival</span>
                        <span className={cx('description')}>50% - 80% off</span>
                        <button className={cx('btn')}>Explore</button>
                    </div>
                </div>
            </div>
            <div className={cx('slide-dot')}>
                <div className={cx('active')}></div>
                <div className={cx('dot')}></div>
                <div className={cx('dot')}></div>
                <div className={cx('dot')}></div>
                <div className={cx('dot')}></div>
            </div>
        </div>
    );
}

export default HeroSlide;
