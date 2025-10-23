import scarfaceImg from "./assets/imgs/1.jpg";
import shawshankImg from "./assets/imgs/2.jpg";
import darkKnightImg from "./assets/imgs/3.jpg";
import godfather2Img from "./assets/imgs/4.jpg";
import inceptionImg from "./assets/imgs/5.jpg";

const movies = [
  {
    id: 1,
    title: "Scarface",
    image: scarfaceImg,
    rating: 4.5,
    description:
      "In the 1980s, a determined Cuban immigrant becomes Miami’s biggest drug smuggler, only to be undone by his own addiction and ambition.",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    image: shawshankImg,
    rating: 5,
    description:
      "Two imprisoned men bond over years, finding solace and redemption through acts of common decency inside a corrupt prison.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: darkKnightImg,
    rating: 5,
    description:
      "Batman faces his greatest psychological and moral test when he confronts the anarchic Joker, who seeks to plunge Gotham into chaos.",
  },
  {
    id: 4,
    title: "The Godfather Part II",
    image: godfather2Img,
    rating: 4.5,
    description:
      "The saga of the Corleone family continues as Michael expands the crime empire while the story of young Vito’s rise unfolds in parallel.",
  },
  {
    id: 5,
    title: "Inception",
    image: inceptionImg,
    rating: 4.5,
    description:
      "A skilled thief who steals secrets through dream infiltration is offered a chance to erase his past crimes by planting an idea into a target’s mind.",
  },
];

export default movies;
