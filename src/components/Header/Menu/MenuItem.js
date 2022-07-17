import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function MenuItem({ data }) {
    return (
        <NavLink className={cx('menu-item')} to={data.path}>
            <span className={cx('menu-title')}>{data.title}</span>
        </NavLink>
    );
}

export default MenuItem;

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
};
