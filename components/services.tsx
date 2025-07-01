import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { handleScroll } from "@/lib/utils";

interface ServicesProps {
  citaRef?: React.RefObject<HTMLDivElement | null>;
}
const Services = (props: ServicesProps) => {
  const { citaRef } = props;

  return (
    <div className="flex flex-col items-center justify-center pt-12 space-y-8">
      <h2 className="text-5xl 2xl:text-6xl text-center font-semibold tracking-tight text-gray-900">
        Servicios destacados
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 w-full bg-[color:var(--background-secondary)] rounded-lg shadow-xl p-6 sm:p-8">
        <div className="flex flex-col justify-around space-y-4">
          <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium mb-2 text-[color:var(--primary-color)]">
            Rehabilitación del suelo pélvico
          </h3>
          <p className="mb-4 text-gray-700 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            fugit eos, iure a illo quis! Rerum nobis beatae totam ratione facere
            sapiente dolorem saepe officia quis laborum. Enim, quibusdam id.
          </p>
          <Button
            className="w-min py-6 rounded-full pl-4 pr-2 bg-gray-950 text-white hover:bg-gray-800"
            size="lg"
            onClick={() => citaRef && handleScroll(citaRef)}
          >
            Agendar cita{" "}
            <div className="bg-white rounded-full p-2 text-black">
              <MoveRight size={20} />
            </div>
          </Button>
        </div>
        <Image
          src="/embarazadas.jpg"
          alt="Rehabilitación del suelo pélvico"
          width={500}
          height={300}
          className="rounded-lg shadow-md shadow-purple-400 object-cover sm:w-1/2 sm:max-w-1/2 h-64 sm:h-80 lg:h-96"
        />
      </div>
      <div className="flex flex-col sm:flex-row-reverse sm:justify-between gap-6 w-full bg-[color:var(--background-secondary)] rounded-lg shadow-xl p-6 sm:p-8">
        <div className="flex flex-col justify-around space-y-4 w-full">
          <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium mb-2 text-[color:var(--primary-color)]">
            Rehabilitación deportiva
          </h3>
          <p className="text-gray-700 mb-4 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem doloribus aperiam molestiae nostrum iusto inventore
            cum odit nulla. Numquam eveniet dolores, autem similique eos quos.
            Maiores saepe tenetur placeat omnis?
          </p>
          <Button
            className="w-min py-6 rounded-full pl-4 pr-2 bg-gray-950 text-white hover:bg-gray-800"
            size="lg"
            onClick={() => citaRef && handleScroll(citaRef)}
          >
            Agendar cita{" "}
            <div className="bg-white rounded-full p-2 text-black">
              <MoveRight size={20} />
            </div>
          </Button>
        </div>
        <Image
          src="/fisio-depor.webp"
          alt="Servicios de fisioterapia deportiva - Roser Sabater Moll"
          width={500}
          height={300}
          className="rounded-lg shadow-md shadow-purple-400 object-cover h-64 sm:min-w-1/2 sm:w-1/2 sm:h-80 lg:h-96"
        />
      </div>
    </div>
  );
};

export default Services;
