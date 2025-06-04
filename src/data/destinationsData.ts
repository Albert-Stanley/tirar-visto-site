import destino1 from "../assets/images/destinos/bali.svg";
import destino2 from "../assets/images/destinos/newyork.svg";
import destino3 from "../assets/images/destinos/santorini.svg";
import destino4 from "../assets/images/destinos/paris.svg";
import destino5 from "../assets/images/destinos/capetown.svg";
import destino6 from "../assets/images/destinos/mumbai.svg";

export const destinationsData = [
  {
    imageUrl: destino1,
    imageAlt: "Paisagem de Bali, Indonésia",
    width: 280,
    height: 240,
    group: 1, // para agrupar com Paris
  },
  {
    imageUrl: destino2,
    imageAlt: "Skyline de Nova York, Estados Unidos",
    width: 280,
    height: 280,
    group: 0,
  },
  {
    imageUrl: destino3,
    imageAlt: "Casas brancas em Santorini, Grécia",
    width: 280,
    height: 240,
    group: 2, // para agrupar com Mumbai
  },
  {
    imageUrl: destino4,
    imageAlt: "Torre Eiffel em Paris, França",
    width: 280,
    height: 240,
    group: 1,
  },
  {
    imageUrl: destino5,
    imageAlt: "Vista da Cidade do Cabo, África do Sul",
    width: 280,
    height: 280,
    group: 0,
  },
  {
    imageUrl: destino6,
    imageAlt: "Gateway of India em Mumbai, Índia",
    width: 280,
    height: 240,
    group: 2,
  },
];
