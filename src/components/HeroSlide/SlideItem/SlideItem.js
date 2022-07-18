import styles from '../HeroSlide.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SlideItem({ data, active }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx(`slide${active ? 'active' : ''}`)}>
                <div className={cx('thumbnail')}>
                    <img srcSet={`${data.img1} 2x`} alt="" />
                </div>
                <div className={cx('info')}>
                    <div className={cx('img')}>
                        <img srcSet={`${data.img2} 2x`} alt="" />
                    </div>
                    <div className={cx('title')}>
                        <div className={cx('brand')}>
                            <img src={data.brand} alt="" />
                        </div>
                        <span className={cx('detail')}>Big Fashion Festival</span>
                        <span className={cx('description')}>50% - 80% off</span>
                        <button className={cx('btn')}>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideItem;
