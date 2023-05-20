import { useState } from "react"

export default function Modals() {

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

    const updateCpu = (event: any) => {

        event.preventDefault();

        console.log(selectedCpu)

    }
    const handleCpuChange = (event: any) => {
        setSelectedCpu(event.target.value);
    };
    //end of cpu 

    const updateMotherboard = (event: any) => {

        event.preventDefault();

        alert(selectedMotherboard)

    }
    const handleMotherboardChange = (event: any) => {
        setSelectedMotherboard(event.target.value);
    };
    //end of motherboard

    const updateCooler = (event: any) => {

        event.preventDefault();

        alert(selectedCooler)

    }
    const handleCoolerChange = (event: any) => {
        setSelectedCooler(event.target.value);
    };
    //end of cooler

    const updateMemory = (event: any) => {

        event.preventDefault();

        alert(selectedMemory)
    }
    const handleMemoryChange = (event: any) => {
        setSelectedMemory(event.target.value);
    };
    //end of memory

    const updateStorage1 = (event: any) => {

        event.preventDefault();

        alert(selectedStorage1)
    }
    const handleStorage1Change = (event: any) => {
        setSelectedStorage1(event.target.value);
    };
    //end of storage1

    const updateStorage2 = (event: any) => {

        event.preventDefault();

        alert(selectedStorage2)
    }
    const handleStorage2Change = (event: any) => {
        setSelectedStorage2(event.target.value);
    };
    //end of storage2

    const updateGpu = (event: any) => {

        event.preventDefault();

        alert(selectedGpu)
    }
    const handleGpuChange = (event: any) => {
        setSelectedGpu(event.target.value);
    };
    //end of Gpu

    const updatePsu = (event: any) => {

        event.preventDefault();

        alert(selectedPsu)
    }
    const handlePsuChange = (event: any) => {
        setSelectedPsu(event.target.value);
    };
    //end of Psu

    const updateBundle1 = (event: any) => {

        event.preventDefault();

        alert(selectedBundle1)
    }
    const handleBundle1Change = (event: any) => {
        setSelectedBundle1(event.target.value);
    };
    //end of bundle one

    const updateBundle2 = (event: any) => {

        event.preventDefault();

        alert(selectedBundle2)
    }
    const handleBundle2Change = (event: any) => {
        setSelectedBundle2(event.target.value);
    };
    //end of bundle one


    return (

        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Cpu</h3>

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

                    <form onSubmit={updateBundle2}>

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