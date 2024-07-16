import React, { useEffect, useState } from "react";
import apis from "../../../src/Api/maba";
import CreateMaba from './CreateMaba'; // Ensure this import is correct

const GetMaba = () => {
    const [maba, setMaba] = useState([]);
    const [error, setError] = useState(null);
    const [nim, setNim] = useState('');
    const [updateMaba, setUpdateMaba] = useState(null); // State to handle update status
    const [isOpenUpdate, setIsOpenUpdate] = useState(false); // State to handle update form open/close status

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (nim) {
                    response = await apis.getMbaByNim(nim);
                } else {
                    response = await apis.getMba();
                }
                setMaba(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, [nim]);

    // Handler to open the update form
    const handleUpdateMaba = (mba) => {
        setUpdateMaba(mba);
        setIsOpenUpdate(true);
    };

    // Handler to close the update form
    const handleCloseUpdate = () => {
        setIsOpenUpdate(false);
    };

    // Handler to delete maba
    const handleDelete = async (nim) => {
        try {
            await apis.delete(nim); // Ensure delete is the correct function name in apis
            setMaba(maba.filter((mba) => mba.nim !== nim));
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Daftar Maba</h1>
                    <div className="w-full md:w-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input type="search" value={nim} onChange={(e) => setNim(e.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari NIM" />
                            <button onClick={() => setNim(nim)} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">NIM</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">NAMA</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ANGKATAN</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">PRODI</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {maba.map((mba) => (
                                <tr key={mba.nim} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">{mba.nim}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{mba.nama}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{mba.angkatan}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{mba.prodi}</td>
                                    <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                                        <button onClick={() => handleUpdateMaba(mba)} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Update</button>
                                        <button onClick={() => handleDelete(mba.nim)} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isOpenUpdate && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
                        <CreateMaba mba={updateMaba} onClose={handleCloseUpdate} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetMaba;
