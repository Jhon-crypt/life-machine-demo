import Navbar from "./navbar"
import Dropdown from "./dropdown"

function Header() {

    return (

        <>

            <div className="relative bg-transparent">

                <div className="navbar fixed top-5 left-0 right-0 rounded-full mb-5">

                    <Navbar />
                    
                    <Dropdown />
                    
                </div>

            </div>

        </>

    )

}

export default Header