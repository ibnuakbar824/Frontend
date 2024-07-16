import React, { useEffect, useState } from 'react';
import apis from '../../Api/maba';

const UpdateMaba = ({ isOpen, onClose, mba }) => {
  const [_mhs, setMba] = useState({ nim: '', nama: '', angkatan: '', prodi: '' });

  // useEffect untuk mengatur nilai _mhs saat mba berubah
  useEffect(() => {
    setMba(mba); // Menetapkan nilai mba ke _mhs saat prop mba berubah
  }, [mba]);

  // Handler untuk mengubah nilai _mhs saat input berubah
  const handleInputChange = (event) => {
    setMba({
      ..._mba,
      [event.target.name]: event.target.value
    });
  };

  // Handler untuk mengirimkan data maba yang diperbarui
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apis.updateMaba(_mhs.nim, _mba); // Memanggil fungsi updateMaba dengan nilai _mhs
      onClose(); // Menutup form setelah berhasil
    } catch (error) {
      console.error(error); // Menangkap dan mencetak error jika ada
    }
  };

  // Mengembalikan null jika form tidak terbuka (isOpen bernilai false)
  if (!isOpen) {
    return null;
  }

  // Render form untuk memperbarui data maba
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>NIM:</label>
        <input
          type="text"
          name="nim"
          value={_mba.nim}
          onChange={handleInputChange}
        />
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={_mba.nama}
          onChange={handleInputChange}
        />
        <label>Angkatan:</label>
        <input
          type="text"
          name="angkatan"
          value={_mba.angkatan}
          onChange={handleInputChange}
        />
        <label>Prodi:</label>
        <input
          type="text"
          name="prodi"
          value={_mba.prodi}
          onChange={handleInputChange}
        />
        <button type="submit">Update Maba</button>
      </form>
    </div>
  );
};

export default UpdateMaba;