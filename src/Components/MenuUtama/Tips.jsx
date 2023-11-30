const Tips = () => {
  const data = [
    {
      id: 1,
      name: "Strategi Belajar",
      deskripsi:
        "Belajar 10 jam per hari belum tentu efektif.  Bisa jadi, belajar 1 jam per hari malah yang lebih efektif.  Nah, gimana tuh caranya?",
      pict: "./strategy.png",
    },
    {
      id: 2,
      name: "Belajar Online",
      deskripsi:
        "Siapa sih yang bosen tiap kali belajar secara online? nah biar gak ngebosenin, coba deh tonton video ini.",
      pict: "./efektif.png",
    },
    {
      id: 3,
      name: "Perguruan Tinggi",
      deskripsi:
        "Kamu mau kuliah di mana nih rencanya? masih bingung? gak apa-apa, perjalanan kamu masih panjang. Coba deh sambil belajar, kamu bisa eksplor perguruan tinggi di sini.",
      pict: "./university.png",
    },
  ];
  return (
    <div className="">
      <h1 className="text-sm font-bold text-amber-700 mb-2 px-5 pt-5">
        {" "}
        Tips & Trick
      </h1>
      <div className="flex w-full overflow-x-scroll">
        {data.map((value) => (
          <img
            src="./box.PNG"
            alt=""
            className="mx-1 h-20 rounded-xl"
            key={value.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Tips;
