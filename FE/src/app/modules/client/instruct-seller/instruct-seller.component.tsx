import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface SellerProps {
    props?: any
}

const InstructSeller: FunctionComponent<SellerProps> = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    const slideImage: string[] = [
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/41/1b/dd/a9335070b3ce198a05d74cf699ee4d60.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/41/1b/dd/a9335070b3ce198a05d74cf699ee4d60.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/41/1b/dd/a9335070b3ce198a05d74cf699ee4d60.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/41/1b/dd/a9335070b3ce198a05d74cf699ee4d60.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/41/1b/dd/a9335070b3ce198a05d74cf699ee4d60.png.webp",
    ];
    const evaluation: string[] = [
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/43/b1/6d/0de7fb3b8c447bc269e6090980f6bc7e.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/43/b1/6d/0de7fb3b8c447bc269e6090980f6bc7e.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/43/b1/6d/0de7fb3b8c447bc269e6090980f6bc7e.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/43/b1/6d/0de7fb3b8c447bc269e6090980f6bc7e.png.webp",
        "https://salt.tikicdn.com/cache/w1208/ts/brickv2og/43/b1/6d/0de7fb3b8c447bc269e6090980f6bc7e.png.webp",
    ]

    return (
        <div css={cssSeller}>
            <div >
                <div className='img-slider'>


                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            slideImage.map((item) => (
                                <SwiperSlide><img src={item} alt="" /></SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className='menu'>
                    <div className='menu-item'>
                        <div className='menu-item-img'>
                            <img src="https://salt.tikicdn.com/cache/200x200/ts/brickv2og/47/b1/9d/b344929873968bd8536d16ce59a4dff2.png.webp" alt="" />
                        </div>
                        <div className='menu-item-text'>
                            <p>Tại sao nên bán hàng cùng Kiki</p>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='menu-item-img'>
                            <img src="https://salt.tikicdn.com/cache/200x200/ts/brickv2og/47/b1/9d/b344929873968bd8536d16ce59a4dff2.png.webp" alt="" />
                        </div>
                        <div className='menu-item-text'>
                            <p>Tại sao nên bán hàng cùng Kiki</p>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='menu-item-img'>
                            <img src="https://salt.tikicdn.com/cache/200x200/ts/brickv2og/47/b1/9d/b344929873968bd8536d16ce59a4dff2.png.webp" alt="" />
                        </div>
                        <div className='menu-item-text'>
                            <p>Tại sao nên bán hàng cùng Kiki</p>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='menu-item-img'>
                            <img src="https://salt.tikicdn.com/cache/200x200/ts/brickv2og/47/b1/9d/b344929873968bd8536d16ce59a4dff2.png.webp" alt="" />
                        </div>
                        <div className='menu-item-text'>
                            <p>Tại sao nên bán hàng cùng Kiki</p>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='menu-item-img'>
                            <img src="https://salt.tikicdn.com/cache/200x200/ts/brickv2og/47/b1/9d/b344929873968bd8536d16ce59a4dff2.png.webp" alt="" />
                        </div>
                        <div className='menu-item-text'>
                            <p>Tại sao nên bán hàng cùng Kiki</p>
                        </div>
                    </div>
                </div>

                <div className='w-full p-2'>
                    <img className="m-auto p-2" src="https://salt.tikicdn.com/cache/w1208/ts/brickv2og/36/27/f2/1c0c27ead04318524e379fbf4d5f06bb.png.webp" alt="" />
                </div>
                <div className='w-full p-2'>
                    <img className="m-auto p-2" src="https://salt.tikicdn.com/cache/w1208/ts/brickv2og/36/27/f2/1c0c27ead04318524e379fbf4d5f06bb.png.webp" alt="" />
                </div>
                <div className='w-full p-2'>
                    <img className="m-auto p-2" src="https://salt.tikicdn.com/cache/w1208/ts/brickv2og/36/27/f2/1c0c27ead04318524e379fbf4d5f06bb.png.webp" alt="" />
                </div>

                <div className='w-full'>
                    <img className='m-auto' src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/40/81/74/8cdee1fa78492f57d7f159fe80ccffe3.png.webp" alt="" />
                </div>
                <div className='w-full'>
                    <img className='m-auto' src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/17/e5/19/875f9497874bbc8efa9d978769a3388e.png.webp" alt="" />
                </div>

                <div className='w-full'>
                    <div className='flex justify-center'>
                        <img src="https://salt.tikicdn.com/cache/w413/ts/brickv2og/ba/e2/dd/e903bc58825f73b9222de258b78bf313.png.webp" alt="" />
                        <img src="https://salt.tikicdn.com/cache/w413/ts/brickv2og/ba/e2/dd/e903bc58825f73b9222de258b78bf313.png.webp" alt="" />
                        <img src="https://salt.tikicdn.com/cache/w413/ts/brickv2og/ba/e2/dd/e903bc58825f73b9222de258b78bf313.png.webp" alt="" />
                    </div>
                </div>
                <div className='w-full'>
                    <img className='m-auto' src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/3f/ae/f8/4f76ea5cdb4e9442ee78b541a544eb3c.png.webp" alt="" />
                </div>
                <div className='w-full'>
                    <div className='flex justify-center'>
                        <img src="https://salt.tikicdn.com/cache/w413/ts/brickv2og/ff/c9/de/ecaf73b3385be43f159a141d24b70baf.png.webp" alt="" />
                        <img src="https://salt.tikicdn.com/cache/w413/ts/brickv2og/ff/c9/de/ecaf73b3385be43f159a141d24b70baf.png.webp" alt="" />
                        <img src="https://salt.tikicdn.com/cache/w413/ts/brickv2og/ff/c9/de/ecaf73b3385be43f159a141d24b70baf.png.webp" alt="" />


                    </div>
                </div>


                <div className='w-full'>
                    <img className='m-auto' src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/40/81/74/8cdee1fa78492f57d7f159fe80ccffe3.png.webp" alt="" />
                </div>
                <div className='w-full'>
                    <img className='m-auto' src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/04/dc/6d/ffa8e4d880a6958fdac5ee49275678ae.png.webp" alt="" />
                </div>

                <div className='img-slider'>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            evaluation.map((item) => (
                                <SwiperSlide><img src={item} alt="" /></SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className='w-full'>
                    <div className='list-img'>
                        <div>
                            <img src="https://salt.tikicdn.com/cache/w392/ts/brickv2og/a9/d7/41/977500f6e198e28f26e6c330ed2087f3.png.webp" alt="" />
                        </div>
                        <div>
                            <img src="https://salt.tikicdn.com/cache/w392/ts/brickv2og/a9/d7/41/977500f6e198e28f26e6c330ed2087f3.png.webp" alt="" />
                        </div>
                        <div>
                            <img src="https://salt.tikicdn.com/cache/w392/ts/brickv2og/a9/d7/41/977500f6e198e28f26e6c330ed2087f3.png.webp" alt="" />
                        </div>
                        <div>
                            <img src="https://salt.tikicdn.com/cache/w392/ts/brickv2og/a9/d7/41/977500f6e198e28f26e6c330ed2087f3.png.webp" alt="" />
                        </div>
                        <div>
                            <img src="https://salt.tikicdn.com/cache/w392/ts/brickv2og/a9/d7/41/977500f6e198e28f26e6c330ed2087f3.png.webp" alt="" />
                        </div>
                        <div>
                            <img src="https://salt.tikicdn.com/cache/w392/ts/brickv2og/a9/d7/41/977500f6e198e28f26e6c330ed2087f3.png.webp" alt="" />
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='video'>
                        <iframe width="967" height="544" src="https://www.youtube.com/embed/-OPMZhUMUlI" title="Bán hàng Tiki chỉ với 3 bước | Hướng dẫn mới nhất" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='w-full p-2'>
                    <img className="m-auto p-2" src="https://salt.tikicdn.com/cache/w1208/ts/brickv2og/67/80/7b/83cdc94560ed322368dc7a2864681a03.png.webp" alt="" />
                </div>
            </div>
        </div>


    )
}

export default InstructSeller

const cssSeller = css`
background: var( --color-white);
.img-slider{
width:100%;
margin:1.5rem 0;
}
.img-slider img{
    max-width:124rem;
    margin: auto;
}
.menu{
    max-width:124rem;
    display: flex;
    justify-content:center;
    margin:auto
}
.menu-item{
    width:19.7rem;
    text-align: center;
    padding:2.2rem;  
}
.menu-item-img{
    width:15rem;
    margin:auto;
}
.menu-item-text{
    margin:auto;
    padding-top:1.4rem;
    width:15rem;
    font-size:19px;
}
.list-img{
    max-width:124rem;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(3,33%);
}
.list-img img{
    padding:0.8rem;
    margin:0.8rem auto;
}
.video iframe{
    margin:16px auto;
    width:124rem;
    height:70rem;
}

.swiper {
    width: 100%;
    height: 100%;
}
 
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
 
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
 
.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
}
 
.swiper-pagination-bullet-active {
    color: var(--color-white);
    background: var(--color-blue-primary);
}
`

