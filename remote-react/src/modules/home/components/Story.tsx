import { Button, Row } from 'antd';
import React, { useRef, useState } from 'react'
import Avatar from '../../../assets/image/avatar.jpg';
import { ReactComponent as Cheveron } from '../../../assets/image/Right-chevron.svg';
import '../assets/scss/story.scss';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



const Story = () => {
    const slideToShow = 8;
    var sliRef: any;

    const [activeSlide, setActiveSlide] = useState(0);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slideToShow,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        beforeChange: (current: any, next: any) => {
            setActiveSlide(next);
        },
    };


    return (
        <>
            <Row className='story_container'>
                <Slider {...settings} className='sli-container' ref={c => sliRef = c}>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__1___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__2___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__3___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__4___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__5aa___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__6aa___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__7bb___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__8aa___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__9aa___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__10cc___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__11a___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__12d___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__13a___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__14a___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__15e___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__16a___</p>
                    </div>
                    <div className='single'>
                        <img src={Avatar} alt="a" />
                        <p>__17a___</p>
                    </div>
                </Slider>

                {activeSlide > 0 ? <span onClick={() => sliRef?.slickPrev()} className='btn prev'>
                    <Cheveron />
                </span> : <></>}
                {activeSlide + slideToShow !== 17 ? <span onClick={() => sliRef?.slickNext()} className='btn next'>
                    <Cheveron />
                </span> : <></>}
            </Row>
        </>
    )
}

export default Story;