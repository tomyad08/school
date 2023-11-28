const VideoTips = () => {
  const data = [
    {
      id: 1,
      nama: "Cara Belajar Efektif",
      foto: "./draf.jpg",
    },
    {
      id: 2,
      nama: "Melatih Imajinasi",
      foto: "./draf1.jpg",
    },
    {
      id: 3,
      nama: "Design Thinking",
      foto: "./draf2.jpg",
    },
    {
      id: 4,
      nama: "Perguruan Tinggi",
      foto: "./draf.jpg",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-11/12 bg-red-600 h-32 rounded-xl p-2 flex justify-center items-center">
        <div className="text-white">
          <p className="text-sm text-center">
            " Jika kamu tidak sanggup menahan lelahnya belajar, maka kamu harus
            sanggup menahan perihnya kebodohan. "
          </p>
          <p className="text-md font-semibold text-center">Imam Syafi'i</p>
        </div>
      </div>
    </div>
  );
};
export default VideoTips;
