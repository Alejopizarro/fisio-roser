import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 space-y-8">
      <h2 className="text-4xl 2xl:text-6xl">Servicios destacados</h2>
      <div className="flex flex-col sm:flex-row gap-6 w-full bg-purple-400 rounded-lg shadow-lg p-6 sm:p-8">
        <div className="flex flex-col justify-around space-y-4  bg-purple-200 p-6 rounded-lg shadow-lg sm:basis-2/3">
          <h3 className="text-4xl font-bold mb-2">Rehabilitación deportiva</h3>
          <p className="text-gray-700 mb-4 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem doloribus aperiam molestiae nostrum iusto inventore
            cum odit nulla. Numquam eveniet dolores, autem similique eos quos.
            Maiores saepe tenetur placeat omnis?
          </p>
          <div className="w-full flex justify-end">
            <Button
              className="w-min py-6 rounded-full pl-4 pr-2 bg-gray-950 text-white hover:bg-gray-800"
              size="lg"
            >
              Agendar cita{" "}
              <div className="bg-white rounded-full p-2 text-black">
                <MoveRight size={20} />
              </div>
            </Button>
          </div>
        </div>
        <Image
          src="/fisio-depor.jpg"
          alt="Servicios de fisioterapia"
          width={500}
          height={300}
          className="rounded-lg shadow-lg  object-cover sm:basis-1/3 h-64 sm:h-80 lg:h-96"
        />
      </div>
      <div className="flex flex-col sm:flex-row-reverse gap-6 w-full bg-purple-400 rounded-lg shadow-lg p-6 sm:p-8">
        <div className="flex flex-col justify-around space-y-4 bg-purple-200 p-6 rounded-lg shadow-lg sm:basis-2/3">
          <h3 className="text-4xl font-bold mb-2">
            Rehabilitación del suelo pélvico
          </h3>
          <p className="mb-4 text-gray-700 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            fugit eos, iure a illo quis! Rerum nobis beatae totam ratione facere
            sapiente dolorem saepe officia quis laborum. Enim, quibusdam id.
          </p>
          <div className="w-full flex justify-end">
            <Button
              className="w-min py-6 rounded-full pl-4 pr-2 bg-gray-950 text-white hover:bg-gray-800"
              size="lg"
            >
              Agendar cita{" "}
              <div className="bg-white rounded-full p-2 text-black">
                <MoveRight size={20} />
              </div>
            </Button>
          </div>
        </div>
        <Image
          src="/embarazadas.jpg"
          alt="Rehabilitación del suelo pélvico"
          width={500}
          height={300}
          className="rounded-lg shadow-lg object-cover sm:basis-1/3 h-64 sm:h-80 lg:h-96"
        />
      </div>
    </div>
  );
};

export default Services;
