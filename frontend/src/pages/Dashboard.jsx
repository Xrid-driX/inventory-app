import { useState, useEffect, Component } from "react";
import axios from "axios";

function Dashboard() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({
        system: "",
        component: "",
        bin: "",
        qty: "",
        date: "",
        editby: "",
    });

    //Load items from BE
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await axios.length("http://localhost:3000/models/products");
            setItems(res.data);
        }   catch (err) {
            console.error("Error fetching items: ", err.message);
        }
    };

    //handle input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    // add new item
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/models/products", form);
            fetchItems();
            setForm({ system: "", component: "", bin:"", qty: "", date: "", editby: ""});     
        }   catch (err) {
            console.error("Error adding items", err.message);
        }
    };

    //delete item
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/models/products/${id}`);
            fetchItems();
        } catch (err) {
            console.error("Error deleting items", err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* header */}
            <header className="bg-indigo-600 text-white p-4 shadow-md">
                <h1 className="text-2xl font-bold">Inventory dashboard</h1>
            </header>

            {/* Add item in form */}
            <main className="p-6 max-w-6xl mx auto">
                <form 
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md mb-6 grid grid-cols-2 gap-4"
                >
                    <input 
                        type="text" 
                        name="system" 
                        value={form.system}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required 
                    />
                    <input 
                        type="text" 
                        name="component" 
                        value={form.component}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required 
                    />
                    <input 
                        type="text" 
                        name="bin" 
                        value={form.bin}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required 
                    />
                    <input 
                        type="number" 
                        name="qty" 
                        value={form.qty}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required 
                    />
                    <input 
                        type="date" 
                        name="date" 
                        value={form.date}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required 
                    />
                    <input 
                        type="text" 
                        name="editby" 
                        value={form.editby}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required 
                    />

                    <button
                        type="submit"
                        className="col-span-2 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                    > Add Item 
                    </button>
                </form>

                {/* Inventory table */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Inventory Items</h2>

                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 border">System</th>
                                <th className="px-4 py-2 border">Component</th>
                                <th className="px-4 py-2 border">Bin</th>
                                <th className="px-4 py-2 border">Qty</th>
                                <th className="px-4 py-2 border">Date</th>
                                <th className="px-4 py-2 border">Edited by:</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{item.system}</td>
                                    <td className="px-4 py-2 border">{item.component}</td>
                                    <td className="px-4 py-2 border">{item.bin}</td>
                                    <td className="px-4 py-2 border text-center">{item.qty}</td>
                                    <td className="px-4 py-2 border">{item.date}</td>
                                    <td className="px-4 py-2 border">{item.editby}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {items.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-gray-500">
                                        No Items yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    );
}

export default Dashboard;