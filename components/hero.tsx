import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-full mt-30 max-w-auto max-h-[100vh]">
      <div className="flex flex-col items-start justify-center space-y-8 w-full">
        <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-extrabold italic text-gray-800 text-shadow-gray-400 text-shadow-xs leading-none tracking-tight">
          Fisioterapeuta en <br />
          <span className="text-purple-800 font-medium md:text-5xl 2xl:text-6xl  text-shadow-pink-200 text-shadow-xs">
            * San Pedro de Alcantara
          </span>
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl text-gray-600">
          Roser Sabater Moll - Fisioterapeuta especialista en rehabilitación
          deportiva, Rehabilitación del suelo pélvico, Uroginecológica,
          Fisioterapia invasiva
        </p>
        <div className="flex items-center w-full space-x-2 justify-between">
          <Button variant="outline" className="py-6 w-2/5" size="lg">
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
            Ver calificaciones
          </Button>
          <Button className="py-6 w-3/5" size="lg">
            Agendar cita
            <MoveRight size={24} className="mr-2" />
          </Button>
        </div>
      </div>
      <Image
        src="/profile-roser.png"
        alt="Imagen de Roser Sabater Moll - Fisioterapeuta"
        width={650}
        height={650}
        className="relative bottom-0 right-10 xl:right-0 drop-shadow-xl z-10 sm:max-h-[90vh] lg:max-h-[100vh] w-auto"
      />
    </div>
  );
};

export default Hero;
