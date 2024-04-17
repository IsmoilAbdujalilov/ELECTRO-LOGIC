import {
  Engineer1,
  EngineerImage1,
  EngineerImage2,
  EngineerImage3,
  EngineerImage4,
  EngineerImage5,
  EngineerImage6,
} from "../assets/images/jpg/engineer/engineer-1";

const products = [
  {
    id: 1,
    count: 20,
    name: "Шкафы АВР на 2 ввода",
    data: [
      {
        id: 1,
        image: Engineer1,
        price: "786 900",
        name: "АВР-А-1000-2-1",
        title: "Шкаф АВР 1000А 2 ввода",
        images: [
          {
            id: 1,
            img: EngineerImage1,
          },
          {
            id: 2,
            img: EngineerImage2,
          },
          {
            id: 3,
            img: EngineerImage3,
          },
          {
            id: 4,
            img: EngineerImage4,
          },
          {
            id: 5,
            img: EngineerImage5,
          },
          {
            id: 6,
            img: EngineerImage6,
          },
        ],
      },
    ],
  },
];

export { products };
