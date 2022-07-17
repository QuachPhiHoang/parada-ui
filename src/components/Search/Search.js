import styles from './Search.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input placeholder="Search" />
            <img className={cx('search-icon')} src={images.search} alt="search" />
        </div>
    );
}

export default Search;
