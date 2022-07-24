import { memo } from 'react';

import classNames from 'classnames/bind';
import styles from '../Slick.module.scss';

const cx = classNames.bind(styles);

function SlickItem({ data }) {
    return (
        // <div className={cx('slick')}>

        // </div>
        <div className={cx('item')}>
            <div className={cx('thumbnail')}>
                <img srcSet={`${data.image} 2x`} alt="img1" />
            </div>
            <div className={cx('brand')}>
                <img srcSet={`${data.brand} 2x`} alt="brand" />
            </div>
            <div className={cx('detail')}>
                <p className={cx('title')}>{data.title}</p>
                <p className={cx('price')}>Under Rs.{data.price}</p>
            </div>
        </div>
    );
}

export default memo(SlickItem);
