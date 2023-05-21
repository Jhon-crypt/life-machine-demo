import { useState } from "react"
import supabase from "../supabase/supabase";

export default function Modals() {

    const [loadingPlatform, setLoadingPlatform] = useState(false)
    const [updatePlatformStatus, setUpdatPlatformStatus] = useState(false)

    const [loadingCpu, setLoadingCpu] = useState(false)
    const [updateCpuStatus, setUpdateCpuStatus] = useState(false)

    const [loadingMotherboard, setLoadingMotherboard] = useState(false)
    const [updateMotherboardStatus, setUpdateMotherboardStatus] = useState(false)

    const [loadingCooler, setLoadingCooler] = useState(false)
    const [updateCoolerStatus, setUpdateCoolerStatus] = useState(false)

    const [loadingMemory, setLoadingMemory] = useState(false)
    const [updateMemoryStatus, setUpdateMemoryStatus] = useState(false)

    const [loadingStorage1, setLoadingStorage1] = useState(false)
    const [updateStorage1Status, seUpdateStorage1Status] = useState(false)

    const [loadingStorage2, setLoadingStorage2] = useState(false)
    const [updateStorage2Status, setUpdateStorage2Status] = useState(false)

    const [loadingGpu, setLoadingGpu] = useState(false)
    const [updateGpuStatus, setUpdateGpuStatus] = useState(false)

    const [loadingPsu, setLoadingPsu] = useState(false)
    const [updatePsuStatus, setUpdatePsuStatus] = useState(false)

    const [loadingBundle1, setLoadingBundle1] = useState(false)
    const [updateBundle1Status, setUpdateBundle1Status] = useState(false)

    const [loadingBundle2, setLoadingBundle2] = useState(false)
    const [updateBundle2, setUpdateBundle2Status] = useState(false)

    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [selectedCpu, setSelectedCpu] = useState('');
    const [selectedMotherboard, setSelectedMotherboard] = useState('')
    const [selectedCooler, setSelectedCooler] = useState('')
    const [selectedMemory, setSelectedMemory] = useState('')
    const [selectedStorage1, setSelectedStorage1] = useState('')
    const [selectedStorage2, setSelectedStorage2] = useState('')
    const [selectedGpu, setSelectedGpu] = useState('')
    const [selectedPsu, setSelectedPsu] = useState('')
    const [selectedBundle1, setSelectedBundle1] = useState('')
    const [selectedBundle2, setSelectedBundle2] = useState('')


    const updatePlatform = async (event: any) => {

        event.preventDefault();

        //alert(selectedPlatform)

        try {

            setLoadingPlatform(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedPlatform}` })
                .eq('id', "12")

            if (error) {

                console.log(error)

            } else {


                setLoadingPlatform(false)

                setUpdatPlatformStatus(true)

                console.log("Platform updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }
    const handlePlatformChange = (event: any) => {
        setSelectedPlatform(event.target.value);
    };
    //end of platform

    const updateCpu = async (event: any) => {

        event.preventDefault();

        //console.log(selectedCpu)

        try {

            setLoadingCpu(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedCpu}` })
                .eq('id', "13")

            if (error) {

                console.log(error)

            } else {


                setLoadingCpu(false)

                setUpdateCpuStatus(true)

                console.log("Cpu updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }
    const handleCpuChange = (event: any) => {
        setSelectedCpu(event.target.value);
    };
    //end of cpu 

    const updateMotherboard = async (event: any) => {

        event.preventDefault();

        //alert(selectedMotherboard)

        try {

            setLoadingMotherboard(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedMotherboard}` })
                .eq('id', "14")

            if (error) {

                console.log(error)

            } else {


                setLoadingMotherboard(false)

                setUpdateMotherboardStatus(true)

                console.log("Motherboard updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }
    const handleMotherboardChange = (event: any) => {
        setSelectedMotherboard(event.target.value);
    };
    //end of motherboard

    const updateCooler = async (event: any) => {

        event.preventDefault();

        //alert(selectedCooler)

        try {

            setLoadingCooler(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedCooler}` })
                .eq('id', "15")

            if (error) {

                console.log(error)

            } else {


                setLoadingCooler(false)

                setUpdateCoolerStatus(true)

                console.log("Cooler updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }


    }
    const handleCoolerChange = (event: any) => {
        setSelectedCooler(event.target.value);
    };
    //end of cooler

    const updateMemory = async (event: any) => {

        event.preventDefault();

        //alert(selectedMemory)

        try {

            setLoadingMemory(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedMemory}` })
                .eq('id', "16")

            if (error) {

                console.log(error)

            } else {


                setLoadingMemory(false)

                setUpdateMemoryStatus(true)

                console.log("Memory updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }
    const handleMemoryChange = (event: any) => {
        setSelectedMemory(event.target.value);
    };
    //end of memory

    const updateStorage1 = async (event: any) => {

        event.preventDefault();

        //alert(selectedStorage1)

        try {

            setLoadingStorage1(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedStorage1}` })
                .eq('id', "17")

            if (error) {

                console.log(error)

            } else {


                setLoadingStorage1(false)

                seUpdateStorage1Status(true)

                console.log("Storage1 updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }
    const handleStorage1Change = (event: any) => {
        setSelectedStorage1(event.target.value);
    };
    //end of storage1

    const updateStorage2 = async (event: any) => {

        event.preventDefault();

        //alert(selectedStorage2)

        try {

            setLoadingStorage2(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedStorage2}` })
                .eq('id', "18")

            if (error) {

                console.log(error)

            } else {


                setLoadingStorage2(false)

                setUpdateStorage2Status(true)

                console.log("Storage2 updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }
    const handleStorage2Change = (event: any) => {
        setSelectedStorage2(event.target.value);
    };
    //end of storage2

    const updateGpu = async (event: any) => {

        event.preventDefault();

        //alert(selectedGpu)

        try {

            setLoadingGpu(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedGpu}` })
                .eq('id', "19")

            if (error) {

                console.log(error)

            } else {


                setLoadingGpu(false)

                setUpdateGpuStatus(true)

                console.log("Gpu updated")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }
    const handleGpuChange = (event: any) => {
        setSelectedGpu(event.target.value);
    };
    //end of Gpu

    const updatePsu = async (event: any) => {

        event.preventDefault();

        //alert(selectedPsu)

        try {

            setLoadingPsu(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedPsu}` })
                .eq('id', "20")

            if (error) {

                console.log(error)

            } else {

                setLoadingPsu(false)

                setUpdatePsuStatus(true)

                console.log("Psu updated")

                console.log(data)

            }

        } catch (error) {

            console.log(error)

        }

    }
    const handlePsuChange = (event: any) => {
        setSelectedPsu(event.target.value);
    };
    //end of Psu

    const updateBundle1 = async (event: any) => {

        event.preventDefault();

        //alert(selectedBundle1)

        try {

            setLoadingBundle1(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedBundle1}` })
                .eq('id', "21")

            if (error) {

                console.log(error)

            } else {

                setLoadingBundle1(false)

                setUpdateBundle1Status(true)

                console.log("Accessory bundle1 updated")

                console.log(data)

            }

        } catch (error) {

            console.log(error)

        }

    }
    const handleBundle1Change = (event: any) => {
        setSelectedBundle1(event.target.value);
    };
    //end of bundle one

    const updateBundlee = async (event: any) => {

        event.preventDefault();

        //alert(selectedBundle2)

        try {

            setLoadingBundle2(true)

            const { data, error } = await supabase
                .from('components')
                .update({ component_name: `${selectedBundle2}` })
                .eq('id', "22")

            if (error) {

                console.log(error)

            } else {

                setLoadingBundle2(false)

                setUpdateBundle2Status(true)

                console.log("Accessory bundle2 updated")

                console.log(data)

            }

        } catch (error) {

            console.log(error)

        }

    }
    const handleBundle2Change = (event: any) => {
        setSelectedBundle2(event.target.value);
    };
    //end of bundle two


    return (

        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="platform" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Platform</h3>

                    {loadingPlatform ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updatePlatformStatus ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Platform to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }



                    <form onSubmit={updatePlatform}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">


                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">Intel</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="intel"
                                        className="radio checked:bg-primary"
                                        checked={selectedPlatform === 'intel'}
                                        onChange={handlePlatformChange}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">Amd</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="amd"
                                        className="radio checked:bg-primary"
                                        checked={selectedPlatform === 'amd'}
                                        onChange={handlePlatformChange}
                                    />
                                </label>
                            </div>


                        </div>



                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

                    <div className="modal-action">
                        <label htmlFor="platform" className="btn">Close</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Cpu</h3>

                    {loadingCpu ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateCpuStatus ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Cpu to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateCpu}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">


                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">Core i5 10500k</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="Core i5 10500k"
                                        className="radio checked:bg-primary"
                                        checked={selectedCpu === 'Core i5 10500k'}
                                        onChange={handleCpuChange}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">Core i7 12700H</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="Core i7 12700H"
                                        className="radio checked:bg-primary"
                                        checked={selectedCpu === 'Core i7 12700H'}
                                        onChange={handleCpuChange}
                                    />
                                </label>
                            </div>


                        </div>



                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

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

                    {loadingMotherboard ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateMotherboardStatus ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Motherboard to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateMotherboard}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">Msi Z490</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="Msi Z490"
                                        className="radio checked:bg-primary"
                                        checked={selectedMotherboard === 'Msi Z490'}
                                        onChange={handleMotherboardChange}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">Gigabyte Z490</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="Gigabyte Z490"
                                        className="radio checked:bg-primary"
                                        checked={selectedMotherboard === 'Gigabyte Z490'}
                                        onChange={handleMotherboardChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

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

                    {loadingCooler ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateCoolerStatus ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Cooler to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateCooler}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">Corsair Cappellix</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="Corsair Cappellix"
                                        className="radio checked:bg-primary"
                                        checked={selectedCooler === 'Corsair Cappellix'}
                                        onChange={handleCoolerChange}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">ID Cooler</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="ID Cooler"
                                        className="radio checked:bg-primary"
                                        checked={selectedCooler === 'ID Cooler'}
                                        onChange={handleCoolerChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

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

                    {loadingMemory ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateMemoryStatus ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Memory to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateMemory}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">2 x 8GB DDR4</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="2 x 8GB DDR4"
                                        className="radio checked:bg-primary"
                                        checked={selectedMemory === '2 x 8GB DDR4'}
                                        onChange={handleMemoryChange}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">2 x 16GB DDR4</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="2 x 16GB DDR4"
                                        className="radio checked:bg-primary"
                                        checked={selectedMemory === '2 x 16GB DDR4'}
                                        onChange={handleMemoryChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

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

                    {loadingStorage1 ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateStorage1Status ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Storage1 to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateStorage1}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">512GB Nvme SSD</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="512GB Nvme SSD"
                                        className="radio checked:bg-primary"
                                        checked={selectedStorage1 === '512GB Nvme SSD'}
                                        onChange={handleStorage1Change}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">1TB Nvme SSD</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="1TB Nvme SSD"
                                        className="radio checked:bg-primary"
                                        checked={selectedStorage1 === '1TB Nvme SSD'}
                                        onChange={handleStorage1Change}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

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

                    {loadingStorage2 ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateStorage2Status ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Storage2 to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateStorage2}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">2TB HDD</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="2TB HDD"
                                        className="radio checked:bg-primary"
                                        checked={selectedStorage2 === '2TB HDD'}
                                        onChange={handleStorage2Change}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">4TB HDD</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="4TB HDD"
                                        className="radio checked:bg-primary"
                                        checked={selectedStorage2 === '4TB HDD'}
                                        onChange={handleStorage2Change}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

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

                    {loadingGpu ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateGpuStatus ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Gpu to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateGpu}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">8GB Rtx 3050</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="8GB Rtx 3050"
                                        className="radio checked:bg-primary"
                                        checked={selectedGpu === '8GB Rtx 3050'}
                                        onChange={handleGpuChange}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">12GB RTX 3060</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="12GB RTX 3060"
                                        className="radio checked:bg-primary"
                                        checked={selectedGpu === '12GB RTX 3060'}
                                        onChange={handleGpuChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>


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

                    {loadingPsu ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updatePsuStatus ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Psu to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updatePsu}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">750 Watts Psu</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="750 Watts Psu"
                                        className="radio checked:bg-primary"
                                        checked={selectedPsu === '750 Watts Psu'}
                                        onChange={handlePsuChange}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">850watts Psu</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="850watts Psu"
                                        className="radio checked:bg-primary"
                                        checked={selectedPsu === '850watts Psu'}
                                        onChange={handlePsuChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

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

                    {loadingBundle1 ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateBundle1Status ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Accessory Bundle 1 to build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateBundle1}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">Razer Wired Mouse + Keyboard</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="Razer Wired Mouse + Keyboard"
                                        className="radio checked:bg-primary"
                                        checked={selectedBundle1 === 'Razer Wired Mouse + Keyboard'}
                                        onChange={handleBundle1Change}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">Logitech Wireless Mouse + Keyboard</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="Logitech Wireless Mouse + Keyboard"
                                        className="radio checked:bg-primary"
                                        checked={selectedBundle1 === 'Logitech Wireless Mouse + Keyboard'}
                                        onChange={handleBundle1Change}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>


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

                    {loadingBundle2 ?

                        (
                            <>
                                <div className="text-center mt-3 mb-3">
                                    <div className="alert alert-info">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Adding To Build.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {updateBundle2 ?

                                    (
                                        <>

                                            <div className="alert alert-success shadow-lg mt-3 mb-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span>Successfully Added Accessory Bundle 2 to build.</span>
                                                </div>
                                            </div>

                                            <div className="alert alert-info shadow-lg mt-3 mb-3">
                                                <div>
                                                    
                                                    <span>Now reload and scroll down to view your build.</span>
                                                </div>
                                            </div>

                                        </>
                                    ) : (

                                        <></>

                                    )

                                }

                            </>
                        )

                    }

                    <form onSubmit={updateBundlee}>

                        <div className="bg-white rounded-lg border border-gray-200 text-gray-900 text-sm font-medium w-full">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className=" text-dark">27 inch Monitor</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="27 inch Monitor"
                                        className="radio checked:bg-primary"
                                        checked={selectedBundle2 === '27 inch Monitor'}
                                        onChange={handleBundle2Change}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="text-dark">34 Inches Monitior</span>
                                    <input
                                        type="radio"
                                        name="cpu"
                                        value="34 Inches Monitior"
                                        className="radio checked:bg-primary"
                                        checked={selectedBundle2 === '34 Inches Monitior'}
                                        onChange={handleBundle2Change}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-primary w-full text-white text-xl" type="submit">
                                <b>Save</b>
                            </button>
                        </div>

                    </form>

                    <div className="modal-action">
                        <label htmlFor="bundle2" className="btn">Close</label>
                    </div>
                </div>
            </div>

        </>

    )

}