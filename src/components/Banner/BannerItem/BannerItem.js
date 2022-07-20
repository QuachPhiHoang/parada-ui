import styles from '../Banner.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function BannerItem({ data, active }) {
    return (
        <div className={cx(`banner-item${active ? 'active' : ''}`)}>
            <div className={cx('thumbnail')}>
                <img srcSet={`${data.image} 2x`} alt="banner" />
            </div>
            <p className={cx('title')}>{data.title}</p>
            <div className={cx('info')}>
                <p className={cx('description')}>{data.description}</p>
                <div className={cx('vote')}>
                    <strong>4.4</strong>
                    <img src={images.star} alt="star" />
                </div>
            </div>
            <div className={cx('price')}>
                <p className={cx('price-sale')}>Rs.{data.priceSale}</p>
                <del className={cx('price-origin')}>Rs.{data.priceOrigin}</del>
                <p className={cx('discount')}>({data.discount}% off)</p>
            </div>
        </div>
    );
}

export default BannerItem;
