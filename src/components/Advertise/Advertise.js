import styles from './Advertise.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Advertise() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Invite Friends and get 50% off on your next purchase</div>
            <Link className={cx('link')} to={'/'}>
                Invite Now
            </Link>
            <div className={cx('icon')}>
                <img src={images.close} alt="close-icon" />
            </div>
        </div>
    );
}

export default Advertise;
