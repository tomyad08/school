import { useState } from "react";

const FAQ = () => {
  const Data = [
    {
      id: 1,
      pertanyaan: "Lorem ipsum dolor met?",
      jawaban:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores esse, error quos incidunt mollitia est laboriosam nobis voluptates culpa obcaecati voluptatem facilis voluptate illum ipsa tempora explicabo minima porro?",
      status: false,
    },
    {
      id: 2,
      pertanyaan: "Lorem ipsum dolor met sit amet?",
      jawaban:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores esse, error quos incidunt mollitia est laboriosam nobis voluptates culpa obcaecati voluptatem facilis voluptate illum ipsa tempora explicabo minima porro?",
      status: false,
    },
    {
      id: 3,
      pertanyaan: "Lorem ipsum dolor me constertt?",
      jawaban:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores esse, error quos incidunt mollitia est laboriosam nobis voluptates culpa obcaecati voluptatem facilis voluptate illum ipsa tempora explicabo minima porro?",
      status: false,
    },
    {
      id: 4,
      pertanyaan: "Lorem ipsum dolor?",
      jawaban:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maiores esse, error quos incidunt mollitia est laboriosam nobis voluptates culpa obcaecati voluptatem facilis voluptate illum ipsa tempora explicabo minima porro?",
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
                value.status
                  ? "p-2 h-32 overflow-y-scroll"
                  : "h-0 overflow-y-hidden"
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
