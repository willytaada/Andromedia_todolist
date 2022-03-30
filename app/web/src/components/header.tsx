import { useState } from "react";

const header = (props) => {
    const [input, setInput] = useState("");

    const create = async () => {
        const res = await fetch("http://localhost:3200/api/create", {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                done: false,
                title: input
            })
        })
        props.changeRefresh(true);
        alert("Data Berhasil Dikirim")
        return res;
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Todo List</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <div>
                     <input type="text"  value={input} onChange={(e) => setInput(e.target.value)}/>
                    </div>
                    <div>
                        {console.log(input)}
                        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={create}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default header;
