import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Modals from '../modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import Build from './build';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function StartBuild() {


    return (

        <>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <section className="mt-20 pt-20 pb-28 bg-neutral overflow-hidden mb-20 rounded-2xl">
                    <div className="container px-4 mx-auto">
                        <div className="text-center">

                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}

                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="my-modal" >Select Cpu</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="motherboard" >Select Motherboard</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="cooler" >Select Cooler</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="memory" >Select Memory</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="storage1" >Select Storage 1</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="storage2" >Select Storage 2</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="gpu" >Select Gpu</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="psu" >Select Psu</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="bundle1" >Accessory Bundle 1</label>
                                </button></SwiperSlide>
                                <SwiperSlide><button className="btn btn-outline btn-primary btn-lg">
                                    <label htmlFor="bundle2" >Accessory Bundle 2</label>
                                </button></SwiperSlide>
                                ...
                            </Swiper>

                        </div>


                    </div>
                </section>

                <Build />
                
            </div>

            <Modals />


        </>

    )


}