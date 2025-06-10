import Image from "next/image";
import { Asterisk, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mx-auto w-full h-full max-h-[100vh]">
      <div className="flex flex-col items-start justify-center space-y-8">
        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-gray-800 leading-none tracking-tight">
          Fisioterapeuta en
          <span className="flex items-center mt-2 sm:-ml-4">
            <Asterisk
              color="purple"
              size={80}
              className="drop-shadow-xl drop-shadow-purple-400 hidden sm:flex"
            />{" "}
            San Pedro de Alcantara
          </span>
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl text-gray-600">
          Roser Sabater Moll - Fisioterapeuta especialista en rehabilitación
          deportiva, Rehabilitación del suelo pélvico, Uroginecológica,
          Fisioterapia invasiva
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="py-6" size="lg">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
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
          <Button className="py-6 xl:w-3/4" size="lg">
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
