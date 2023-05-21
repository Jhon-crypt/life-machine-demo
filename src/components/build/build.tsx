import supabase from '../../supabase/supabase'
//import { Oval } from 'react-loader-spinner'
import { useState, useEffect } from "react"

export default function Build() {

    const [loadingBuild, setLoadingBuild] = useState(false)

    const [build, setBuild]: any = useState([])



    useEffect(() => {

        const fetchBuild = async () => {

            try {

                setLoadingBuild(true)


                let { data: components, error }: any = await supabase
                    .from('components')
                    .select("*")
                    .order('id', { ascending: true })


                setLoadingBuild(false)

                if (components) {

                    setBuild(components)

                    console.log(build)

                    console.log(loadingBuild)

                } else (

                    console.log(error)

                )

            } catch (error) {

                console.log(error)

            }

        }

        fetchBuild()

    }, [])

    return (

        <>

            <section className="pt-20 pb-28 bg-neutral overflow-hidden mb-20 rounded-2xl">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-20 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-secondary">
                        Your Build

                    </h2>

                    <div className="flex flex-wrap -m-8">
                        {build.map((component : any) => (
                            <div className="w-full md:w-1/3 p-8" key={component.id}>
                                <div className="relative text-center">

                                    <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.5391 21L15.5391 15M17.5391 10C17.5391 13.866 14.4051 17 10.5391 17C6.67307 17 3.53906 13.866 3.53906 10C3.53906 6.13401 6.67307 3 10.5391 3C14.4051 3 17.5391 6.13401 17.5391 10Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="md:max-w-xs mx-auto">
                                        <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal">{component.component_type}</h3>
                                        <p className="font-sans text-gray-600">{component.component_name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>


        </>

    )

}