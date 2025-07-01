import EmblaCarousel from "./ui/carousel";

export const reviews = [
  {
    id: 1,
    name: "Belky Garcia",
    review:
      "Excelente trabajó muy buena experiencia volvería sien por cinto muy a tenta a lo que se necesita",
    inicial: "B",
    stars: 5,
  },
  {
    id: 2,
    name: "Laura L",
    review:
      "Roser is amazing, she's so knowledgeable, I learn something new each time I go to an appointment. I had problems after pregnancy with inflammation, bloating and hiving/itchy skin. I had been to the doctors about it who were not very helpful, but luckily I found Roser who has been helping me so much on the journey. Thanks so much Roser!",
    inicial: "L",
    stars: 5,
  },
  {
    id: 3,
    name: "MR",
    review:
      "Trato personalizado, amable y cercano. Vi resultados favorables desde la primera sesión.",
    inicial: "M",
    stars: 5,
  },
  {
    id: 4,
    name: "Teresa",
    review: "Me gustó mucho su trato y cercanía, un encanto y muy profesional.",
    inicial: "T",
    stars: 5,
  },
  {
    id: 5,
    name: "Mia",
    review:
      "Roser is a very sweet and dedicated fysio with great knowledge! She listens and is very committed and dedicated to her profession!",
    inicial: "M",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center pt-8">
      <h2 className="text-4xl font-bold mb-6">Opiniones de pacientes</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Aquí puedes leer las opiniones de los pacientes satisfechos con mis
        servicios de fisioterapia.
      </p>
      <EmblaCarousel slides={reviews} />
    </div>
  );
};

export default Reviews;
