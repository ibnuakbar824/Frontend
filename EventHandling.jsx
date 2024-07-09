import React, { useState } from "react";

const EventHandling = () => {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [gender, setGender] = useState('');
    const [programStudi, setProgramStudi] = useState('');
    const [prestasi, setPrestasi] = useState('');

    function handleNameChange(event) {
        setNama(event.target.value);
    }

    function handleAlamatChange(event) {
        setAlamat(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.target.value);
    }

    function handleProgramStudiChange(event) {
        setProgramStudi(event.target.value);
    }

    function handlePrestasiChange(event) {
        setPrestasi(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        alert(`Nama: ${nama}\nAlamat: ${alamat}\nGender: ${gender}\nProgram Studi: ${programStudi}\nPrestasi: ${prestasi}`);
    }

    return (
        <div className="container mt-4 ml-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nama" className="block text-gray-700 font-bold mb-2">Nama:</label>
                    <input
                        type="text"
                        id="nama"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan nama"
                        value={nama}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="alamat" className="block text-gray-700 font-bold mb-2">Alamat:</label>
                    <input
                        type="text"
                        id="alamat"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan Alamat"
                        value={alamat}
                        onChange={handleAlamatChange}
                    />
                </div>

                <div className="mb-4">
                    <span className="block text-gray-700 font-bold mb-2">Gender:</span>
                    <div className="flex flex-row items-center">
                        <label className="inline-flex items-center mr-6">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                name="gender"
                                value="pria"
                                checked={gender === 'pria'}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Pria</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                name="gender"
                                value="wanita"
                                checked={gender === 'wanita'}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Wanita</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="programStudi" className="block text-gray-700 font-bold mb-2">Program Studi:</label>
                    <select
                        id="programStudi"
                        className="shadow appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={programStudi}
                        onChange={handleProgramStudiChange}
                    >
                        <option value="">Pilih Program Studi</option>
                        <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                        <option value="S1 Teknik Informasi">S1 Teknik Informasi</option>
                        <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                    </select>
                </div>
                
                <div className="mb-4">
                    <label htmlFor="prestasi" className="block text-gray-700 font-bold mb-2">Prestasi:</label>
                    <select
                        id="prestasi"
                        className="shadow appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={prestasi}
                        onChange={handlePrestasiChange}
                    >
                        <option value="">Prestasi</option>
                        <option value="Akademis">Akademis</option>
                        <option value="Nonakademis">Nonakademis</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-serif py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>

            <div className="mt-8 p-4 border rounded">
                <h2 className="text-xl font-bold mb-4">Resume</h2>
                <p><strong>Nama:</strong> {nama}</p>
                <p><strong>Alamat:</strong> {alamat}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Program Studi:</strong> {programStudi}</p>
                <p><strong>Prestasi:</strong> {prestasi}</p>

            </div>
        </div>
    );
}

export default EventHandling;
