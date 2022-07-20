import PropTypes from 'prop-types';

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
                        <p className={cx('detail')}>Big Fashion Festival</p>
                        <p className={cx('description')}>50% - 80% off</p>
                        <button className={cx('btn')}>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

SlideItem.propTypes = {
    data: PropTypes.object.isRequired,
    active: PropTypes.bool,
};

export default SlideItem;
