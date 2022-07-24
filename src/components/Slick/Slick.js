import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Slick.module.scss';
import SlickItem from './SlickItem/SlickItem';
import slickData from '~/fakeData/slickData/slickData';
import { useCallback, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Slick({ auto }) {
    const [data, setData] = useState(slickData);
    const prevHandle = (isLeft) => {
        const prevState = [...data];
        //find next inactive slick index - top
        const nextIdSlick = prevState
            .filter((f) => f.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].id;

        //reset

        prevState.find((f) => f.active === false).active = true;

        //update

        prevState.find((f) => f.id === nextIdSlick).active = false;

        //minimize pos

        prevState.find((f) => f.id === nextIdSlick).pos =
            Math.max.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                }),
            ) + 1;

        //set State
        setData(prevState);
    };
    const nextHandle = useCallback(() => {
        const prevState = [...data];
        // find next inactive card index - bottom
        const nextIdSlick = prevState
            .filter((f) => f.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
            .pop(1).id;
        // minimize pos
        prevState.find((f) => f.active === false).pos =
            Math.min.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                }),
            ) - 1;
        // reset
        prevState.find((f) => f.active === false).active = true;
        // update
        prevState.find((f) => f.id === nextIdSlick).active = false;

        // update state
        setData(prevState);
    }, [data]);

    useEffect(() => {
        if (auto) {
            const autoSlick = setInterval(() => {
                nextHandle();
            }, 3000);
            return () => {
                clearInterval(autoSlick);
            };
        }
    }, [nextHandle, auto]);

    return (
        <div className={cx('slick')}>
            <div className={cx('info')}>Deals of the Day</div>
            <div className={cx('left-icon')} onClick={prevHandle}>
                <img src={images.left} alt="left" />
            </div>
            <div className={cx('slick-list')} id="slick-list">
                {data
                    .filter((f) => f.active === true)
                    .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                    .map((data) => (
                        <SlickItem key={data.id} data={data} />
                    ))}
            </div>
            <div className={cx('right-icon')} onClick={nextHandle}>
                <img src={images.right} alt="right" />
            </div>
        </div>
    );
}

export default Slick;
