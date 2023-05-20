import { Outlet, Link } from "react-router-dom";

export default function Hero() {

    return (

        <>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <section className="py-24 flex items-center min-h-screen justify-center">
                    <div className="mx-auto max-w-[43rem]">
                        <div className="text-center">
                            <p className="text-lg font-medium leading-8 text-secondary">POWERFUL CUSTOM SOLUTIONS</p>
                            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">
                                Build Custom Rigs And High Performance Pcs.
                            </h1>
                            <p className="mt-3 text-lg leading-relaxed text-slate-400">
                                Professionally built Custom-Pcs & mobile workstations for African digital creators.
                            </p>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-4">

                            <a className="text-3xl text-center w-full transform rounded-md bg-primary px-5 py-3 font-medium text-white transition-colors hover:bg-primary-focus">
                                <label htmlFor="my-modal">
                                    <b>Build Pc Now</b>
                                </label>
                            </a>

                        </div>
                    </div>
                </section>

            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Select Platform</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <Link to="/startBuild" className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-primary ">
                            Intel
                        </Link>
                        <a href="#" className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-primary ">
                            Amd
                        </a>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>

            <Outlet />

        </>


    )

}