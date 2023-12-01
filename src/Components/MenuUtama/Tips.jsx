const Tips = () => {
  const data = [
    {
      id: 1,
      name: "Strategi Belajar Efektif",
      deskripsi:
        "Belajar 10 jam per hari belum tentu efektif.  Bisa jadi, belajar 1 jam per hari malah yang lebih efektif.  Nah, gimana tuh caranya?",
      pict: "./strategy.png",
    },
    {
      id: 2,
      name: "Anti Bosan Belajar Online",
      deskripsi:
        "Siapa sih yang bosen tiap kali belajar secara online? nah biar gak ngebosenin, coba deh tonton video ini.",
      pict: "./efektif.png",
    },
    {
      id: 3,
      name: "Menentukan Jurusan Kuliah",
      deskripsi:
        "Kamu mau kuliah di mana nih rencanya? masih bingung? gak apa-apa, perjalanan kamu masih panjang. Coba deh sambil belajar, kamu bisa eksplor perguruan tinggi di sini.",
      pict: "./university.png",
    },
  ];
  return (
    <div className="mx-5">
      <h1 className="text-sm font-bold text-amber-700 mb-2 pt-5">
        {" "}
        Tips & Trick
      </h1>
      <div className="flex justify-center w-full bg-amber-400 rounded-xl p-5">
        {data.map((value) => (
          <div className="w-96" key={value.id}>
            <div className="flex justify-center">
              <img src={value.pict} alt="" className="w-14" />
            </div>
            <h1 className="text-sm text-center pt-2">{value.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tips;
