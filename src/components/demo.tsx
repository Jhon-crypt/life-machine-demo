import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    type: string;
}

export default function Demo() {

    const [cart, setCart] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);

    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
        setTotal(total => total + product.price);
    };

    const handleDelete = (id: number, price: number) => {
        setCart(cart.filter((product) => product.id !== id));
        setTotal(total => total - price);
    };

    const products = [

        { id: 1, name: 'Core i5 10500k', price: 180000, type: 'Cpu' },
        { id: 2, name: 'Core i7 12700H', price: 200000, type: 'Cpu' },
        { id: 3, name: 'Msi Z490', price: 240000, type: 'Motherboard' },
        { id: 3, name: 'Gigabyte Z490', price: 280000, type: 'Motherboard' },
        { id: 4, name: 'Corsair Cappellix', price: 85000, type: 'Cooler' },
        { id: 5, name: 'ID Cooler', price: 60000, type: 'Cooler' },
        { id: 6, name: '2 x 8GB DDR4', price: 20000, type: 'Memory' },
        { id: 7, name: '2 x 16GB DDR4', price: 400000, type: 'Memory' },
        { id: 8, name: '512GB Nvme SSD', price: 35000, type: 'Storage 1' },
        { id: 9, name: '1TB Nvme SSD', price: 75000, type: 'Storage 1' },
        { id: 10, name: '2TB HDD', price: 35000, type: 'Storage 2' },
        { id: 11, name: '4TB HDD', price: 450000, type: 'Storage 2' },
        { id: 12, name: '8GB Rtx 3050', price: 450000, type: 'Gpu' },
        { id: 13, name: '12GB RTX 3060', price: 500000, type: 'Gpu' },
        { id: 14, name: '750 Watts Psu', price: 70000, type: 'Psu' },
        { id: 15, name: '850watts Psu', price: 85000, type: 'Psu' },
        { id: 16, name: 'Razer Wired Mouse + Keyboard', price: 85000, type: 'Accessory Bundle 1' },
        { id: 17, name: 'Logitech Wireless Mouse + Keyboard', price: 450000, type: 'Accessory Bundle 1' },
        { id: 18, name: '27 inch Monitor', price: 280000, type: 'Accessory Bundle 2' },
        { id: 19, name: '34 Inches Monitior', price: 450000, type: 'Accessory Bundle 2' },

    ];

    return (

        <>

            <div className="container mx-auto px-4">

                <h1 className="text-4xl font-bold mt-5 mr-5">Products</h1>

                <div className="drawer drawer-mobile bg-base-100 drawer-end" >
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                    <div className="drawer-content flex flex-col items-center justify-center">

                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-24 mb-10">

                            {products.map((product) => (
                                <div key={product.id}>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">{product.name}</h2>
                                            <p><b>Type : {product.type}</b></p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>{product.price} | Select</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>



                    </div>
                    <div className="drawer-side rounded">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-neutral text-base-content">

                            <li className="text-2xl font-bold mb-3"><a>Pc Build</a></li>

                            {cart.map((product, index) => (
                                <li key={index} className="bg-base-100 rounded mb-2">
                                    <a>{product.name} ${product.price.toFixed(2)}
                                        <button className='btn btn-warning mr-5 text-white' onClick={() => handleDelete(product.id, product.price)}>Delete</button></a>
                                </li>
                            ))}

                            <li className="bg-base-100 rounded mb-2 font-bold"><a>Total: #{total.toFixed(2)}</a></li>

                            <p></p>

                        </ul>

                    </div>

                </div>

            </div>

        </>

    )

}