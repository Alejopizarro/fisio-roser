"use client";
import { Medal, MessageCircle, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { handleScroll } from "@/lib/utils";

interface DoctoraliaProps {
  reviewsRef?: React.RefObject<HTMLDivElement | null>;
}

const Doctoralia = (props: DoctoraliaProps) => {
  const { reviewsRef } = props;

  const router = useRouter();
  return (
    <div className="-translate-y-2 2xl:-translate-y-4 z-100 relative flex flex-col-reverse lg:flex-row items-center bg-primary rounded-xl rounded-bl-4xl shadow-2xl text-slate-50 w-full mb-8">
      <div className="absolute z-10 -top-3 left-0 h-3 rounded-t-2xl w-11/12 mx-4 lg:mx-14 shadow-2xl bg-purple-300 pointer-events-none" />
      <Image
        src="/screen-doctoralia.png"
        height={500}
        width={500}
        alt="Consultorio de fisioterapia - Roser Sabater Moll"
        className="rounded-xl rounded-tl-none lg:rounded-tl-xl lg:rounded-br-none rounded-bl-4xl rounded-tr-[55%] object-contain p-4 lg:w-1/2 h-64 lg:h-auto"
      />

      <div className="flex flex-col justify-evenly h-full space-y-4 lg:space-y-8 2xl:space-y-12 p-4 pt-8">
        <h2 className="text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">
          Agenda tu cita en Doctoralia
        </h2>
        <p className="text-md xl:text-lg max-w-xl text-slate-300">
          Ingresa a mi perfil de Doctoralia para ver mis calificaciones y
          opiniones de pacientes, y agendar tu cita de forma rápida y sencilla.
        </p>
        <Button
          className="w-min py-6 rounded-full pl-4 pr-2 bg-purple-50 text-gray-950 hover:bg-purple-200"
          size="lg"
          onClick={() =>
            router.push(
              "https://www.doctoralia.es/roser-sabater-moll-2/fisioterapeuta/san-pedro-de-alcantara#profile-info"
            )
          }
        >
          Agendar cita{" "}
          <div className="bg-gray-950 rounded-full p-2 text-white">
            <MoveRight size={20} />
          </div>
        </Button>
      </div>
      <div
        onClick={() => reviewsRef && handleScroll(reviewsRef)}
        className="bg-white rounded-full p-4 ring-4 ring-purple-300 hover:shadow-inner cursor-pointer transition-shadow duration-300 text-gray-900 flex items-center space-x-4 w-fit absolute -bottom-11 md:-bottom-8 md:right-4 right-3"
      >
        <span className="text-lg font-semibold flex items-center gap-x-2">
          <Star fill="purple" stroke="white" /> 5.0
        </span>
        <span className="text-lg font-semibold flex items-center gap-x-2">
          <Medal fill="purple" stroke="white" /> 4
        </span>
        <span className="text-lg font-semibold flex items-center gap-x-2">
          <MessageCircle fill="purple" stroke="white" /> 100+
        </span>
      </div>
    </div>
  );
};

export default Doctoralia;
