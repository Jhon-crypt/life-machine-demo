export default function CpuCards() {

    function handleAddList() {
        throw new Error("Function not implemented.");
    }

    return (

        <>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Core i5 10500k</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={handleAddList}>180,000 | Select</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Core i7 12700H</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">200,000 | Select</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}