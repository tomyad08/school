import { useState } from "react";

const FAQ = () => {
  const Data = [
    {
      id: 1,
      pertanyaan: "Apa itu bimbel Laskar UI?",
      jawaban:
        "Laskar UI adalah bimbingan belajar untuk persiapan materi sekolah, persiapan ujian sekolah dan persiapan SNPMB atau sbmptn dan umptn.",
      status: false,
    },
    {
      id: 2,
      pertanyaan: "Mulai dari kelas berapa saja bimbel di Laskar UI",
      jawaban:
        "Laskar UI menerima siswa dari kelas 1 SD sampai 12 SMA dan alumni untuk persiapan PTN.",
      status: false,
    },
    {
      id: 3,
      pertanyaan: "Ada program apa saja?",
      jawaban:
        "Bimbel Reguler, Bimbel Platinum, Bimbel Persiapan PTN Reguler, Bimbel Persiapan PTN Intensif.",
      status: false,
    },
    {
      id: 4,
      pertanyaan: "Fasilitas apa saja yang di dapat?",
      jawaban:
        "1. Kelas konsultasi setiap Senin sampai Jumat jam 17.00-20.00. 2.Free kelas bahasa Inggris setiap Sabtu (pekan ke 2 dan ke 4) - TryOut. 3. Konsultasi strategi persiapan PTN",
      status: false,
    },
    {
      id: 5,
      pertanyaan: "Siapa pengajar laskar UI?",
      jawaban:
        "Pengajar laskar UI alumni PTN dan S2 PTN seperti UI, UGM, IPB, UIN, UNJ dll.",
      status: false,
    },
  ];
  const [list, setList] = useState(Data);

  const handleClick = (id) => {
    let transit = [];
    list.filter((value) => {
      if (value.id === id) {
        transit.push({
          id: id,
          pertanyaan: value.pertanyaan,
          jawaban: value.jawaban,
          status: true,
        });
      } else {
        transit.push({
          id: value.id,
          pertanyaan: value.pertanyaan,
          jawaban: value.jawaban,
          status: false,
        });
      }
    });

    setList(transit);
  };
  return (
    <div className="m-5 md:flex md:justify-center">
      <div className="md:w-3/4">
        <h1 className="text-lg font-semibold text-center mb-4">
          Frequently Ask Question (FAQ)
        </h1>
        {list.map((value) => (
          <div className="text-sm text-justify" key={value.id}>
            <h1
              className="font-semibold p-3 bg-white border border-1 rounded-lg mb-2 hover:cursor-pointer hover:bg-amber-200"
              onClick={() => handleClick(value.id)}
            >
              {value.pertanyaan}
            </h1>
            <p
              className={` ${
                value.status ? "p-2 overflow-y-scroll" : "h-0 overflow-y-hidden"
              }`}
            >
              {value.jawaban}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
