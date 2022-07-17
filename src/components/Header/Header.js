import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import Search from '~/components/Search';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const menuData = [
    {
        title: 'Men',
        path: '/men',
    },
    {
        title: 'Women',
        path: '/women',
    },
    {
        title: 'Kid',
        path: '/kid',
    },
    {
        title: 'Shop',
        path: '/shop',
    },
    {
        title: 'Contact us',
        path: '/contact',
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('logo')}>
                <img srcSet={`${images.logo} 2x`} alt="logo" />
            </Link>
            <nav className={cx('navbar')}>
                {menuData.map((item, index) => (
                    <Menu key={index}>
                        <MenuItem data={item} />
                    </Menu>
                ))}
            </nav>
            <Search />
            <div className={cx('icon')}>
                <div className={cx('heart-icon')}>
                    <img src={images.love} alt="heart" />
                </div>
                <div className={cx('cart-icon')}>
                    <img src={images.cart} alt="cart" />
                </div>
                <div className={cx('user')}>
                    <img srcSet={`${images.user} 2x`} alt="user" />
                    <span>Anne Doe </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
