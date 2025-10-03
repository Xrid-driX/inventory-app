import { useState } from "react";


function Dashboard() {
    //dummy data daw
    const [items] = useState([
        {id: 1, system: "Cooling", component: "Fan", bin: "A1", qty: 20, date: "2025-10-01", edt:"Tanon"},
        {id: 1, system: "Power", component: "battery", bin: "b3", qty: 5, date: "2025-10-01", edt:"Russel"},
        {id: 1, system: "Network", component: "Router", bin: "c2", qty: 10, date: "2025-10-02", edt:"Eric"},
    ]);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header nga */}
            <header className="bg-indigo-600 text-white p-4 shadow-md">
                <h1 className="text-2x1 font-bold">Inventory dashboard</h1>
            </header>

            {/* Content */}
            <main className="p-6 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Inventory Items</h2>

                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 border">System</th>
                                <th className="px-4 py-2 border">Component Name</th>
                                <th className="px-4 py-2 border">Bin</th>
                                <th className="px-4 py-2 border">Inv Qty</th>
                                <th className="px-4 py-2 border">Date</th>
                                <th className="px-4 py-2 border">Edited by:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{item.system}</td>
                                <td className="px-4 py-2 border">{item.component}</td>
                                <td className="px-4 py-2 border">{item.bin}</td>
                                <td className="px-4 py-2 border">{item.qty}</td>
                                <td className="px-4 py-2 border">{item.date}</td>
                                <td className="px-4 py-2 border">{item.edt}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;