const OtherProduct = () => {
  const Data = [
    {
      id: 1,
      name: "Bimbel",
      pict: "./bimbel.png",
      desc: "Belajar bareng teman di kelas.",
      link: "",
    },
    {
      id: 2,
      name: "Les Private",
      pict: "./university.png",
      desc: "Belajar lebih fokus dari rumah.",
      link: "",
    },
    {
      id: 3,
      name: "Home Schooling",
      pict: "./home-schooling.png",
      desc: "Belajar lebih flexible di ruang kelas.",
      link: "",
    },
    {
      id: 4,
      name: "Persiapan Pilot",
      pict: "./pilot.png",
      desc: "Belajar persiapan tes pilot.",
      link: "",
    },
    {
      id: 5,
      name: "Distance Learning",
      pict: "./efektif.png",
      desc: "Belajar dari rumah melalui zoom",
      link: "",
    },
    {
      id: 6,
      name: "Rumah Tahfidz",
      pict: "./quran.png",
      desc: "Belajar memahami dan hafal Al-qur'an.",
      link: "",
    },
  ];
  return (
    <div>
      <h1 className="text-sm font-bold text-amber-700 px-4 my-2">
        {" "}
        Produk Lainnya
      </h1>
      <div className="flex w-screen overflow-x-scroll">
        {Data.map((value) => (
          <div
            className="flex bg-red-600 rounded-xl p-2 mx-2 text-white relative"
            key={value.id}
          >
            <div className="w-8 h-8 rounded-full bg-amber-400 absolute right-2 top-2 z-5"></div>
            <div className="w-5 h-5 rounded-full bg-amber-400 absolute right-10 top-10 z-10"></div>
            <div>
              <img src={value.pict} alt="" className="w-24" />
            </div>
            <div className="w-52 p-1 relative z-10">
              <div className="text-center text-sm font-semibold mb-1">
                {value.name}
              </div>
              <p className="text-sm text-center">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OtherProduct;
