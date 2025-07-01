import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { handleScroll } from "@/lib/utils";

interface HeroProps {
  citaRef?: React.RefObject<HTMLDivElement | null>;
  reviewsRef?: React.RefObject<HTMLDivElement | null>;
}
const Hero = (props: HeroProps) => {
  const { citaRef, reviewsRef } = props;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-full mt-20 max-w-auto max-h-[100vh]">
      <div className="flex flex-col items-start justify-center w-full">
        <div className="flex flex-col-reverse items-start justify-center">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-semibold pt-2 leading-none tracking-tight">
            Fisioterapeuta en{" "}
            <span className="text-[color:var(--primary-color-light)]">
              San Pedro de Alcantara, Marbella
            </span>
          </h1>
          <h2 className="text-sm lg:text-md font-extrabold text-[color:var(--primary-color)]">
            Roser Sabater Moll
          </h2>
        </div>
        <div className="flex flex-col items-start justify-center space-y-1 pt-2 text-lg lg:text-xl max-w-2xl text-gray-600">
          <p>
            Especialista en Rehabilitación del suelo pélvico, Uroginecológica,
            Rehabilitación deportiva y Fisioterapia invasiva.
          </p>
          <p>-</p>
          <p>Nro. de colegiado: 5620</p>
        </div>
        <div className="flex items-center w-full space-x-2 justify-between pt-4">
          <Button
            onClick={() => reviewsRef && handleScroll(reviewsRef)}
            variant="outline"
            className="py-6 w-2/5"
            size="lg"
          >
            <div className="*:data-[slot=avatar]:ring-background hidden sm:flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar className="bg-green-300 !grayscale-0">
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <Avatar className="bg-blue-300 !grayscale-0">
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar className="bg-purple-300 !grayscale-0">
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </div>
            Ver opiniones
          </Button>
          <Button
            onClick={() => citaRef && handleScroll(citaRef)}
            className="py-6 w-3/5"
            size="lg"
          >
            Agendar cita
            <MoveRight size={24} className="mr-2" />
          </Button>
        </div>
      </div>
      <Image
        src="/profile-roser.png"
        alt="Imagen de Roser Sabater Moll - Fisioterapeuta"
        width={1000}
        height={1000}
        priority={true}
        className="relative bottom-0 right-10 xl:right-0 drop-shadow-xl drop-shadow-purple-400 z-10 sm:max-h-[90vh] lg:max-h-[100vh] w-auto"
      />
    </div>
  );
};

export default Hero;
