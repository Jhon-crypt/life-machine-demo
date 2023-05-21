import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Modals from '../modal';
import Build from './build';

export default function StartBuild() {

    //console.log(supabase)

    return (

        <>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <section className="mt-20 pt-20 pb-28 bg-neutral overflow-hidden mb-20 rounded-2xl">
                    <div className="container px-4 mx-auto">
                        <div className="text-center">

                            <Carousel>
                                <div className="">
                                    <p className=" text-white">
                                        <button className="btn btn-outline btn-primary btn-lg">
                                            <label htmlFor="platform" >Select Platform</label>
                                        </button>
                                    </p>
                                </div>

                                <div>
                                    <p className="">
                                        <button className="btn btn-outline btn-primary btn-lg">
                                            <label htmlFor="my-modal" >Select Cpu</label>
                                        </button>
                                    </p>
                                </div>
                                <div>
                                    <p className="">
                                        <button className="btn btn-outline btn-primary btn-lg">
                                            <label htmlFor="motherboard" >Select Motherboard</label>
                                        </button>
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="cooler" >Select Cooler</label>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="memory" >Select Memory</label>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="storage1" >Select Storage 1</label>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="storage2" >Select Storage 2</label>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="gpu" >Select Gpu</label>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="psu" >Select Psu</label>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="bundle1" >Accessory Bundle 1</label>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-primary btn-lg">
                                        <label htmlFor="bundle2" >Accessory Bundle 2</label>
                                    </button>
                                </div>

                            </Carousel>

                            

                        </div>


                    </div>
                </section>

                <Build />

            </div>

            <Modals />


        </>

    )


}