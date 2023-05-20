export default function Modals() {

    return (

        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Cpu</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">


                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">Core i5 10500k</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">Core i7 12700H</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>

                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="motherboard" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Motherboard</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">Msi Z490</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">Gigabyte Z490</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="motherboard" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="cooler" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Cooler</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">Corsair Cappellix</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">ID Cooler</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="cooler" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="memory" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Memory</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">2 x 8GB DDR4</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">2 x 16GB DDR4</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="memory" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="storage1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Storage 1</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">512GB Nvme SSD</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">1TB Nvme SSD</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="storage1" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="storage2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Storage 2</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">2TB HDD</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">4TB HDD</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="storage2" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="gpu" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Gpu</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">8GB Rtx 3050</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">12GB RTX 3060</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="gpu" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="psu" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Psu</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">750 Watts Psu</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">850watts Psu</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="btn btn-primary w-full text-white text-xl">
                            <b>Save</b>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="psu" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bundle1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Accessory Bundle 1</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">Razer Wired Mouse + Keyboard</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">Logitech Wireless Mouse + Keyboard</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="bundle1" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bundle2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Accessory Bundle 2</h3>

                    <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-dark">27 inch Monitor</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                            </label>
                        </div>
                        <hr />
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="text-dark">34 Inches Monitior</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                            </label>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="bundle2" className="btn">Close</label>
                    </div>
                </div>
            </div>

        </>

    )

}