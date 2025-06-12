import { Medal, MessageCircle, Star } from "lucide-react";
import Image from "next/image";

const Doctoralia = () => {
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

      <div className="flex flex-col justify-center space-y-4 px-8 pt-8">
        <h2 className="text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">
          Agenda tu cita en Doctoralia
        </h2>
        <p className="text-md xl:text-lg max-w-xl text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </p>
      </div>
      <div className="bg-white rounded-full p-4 ring-4 ring-purple-300 inset-shadow-sm/20 text-gray-900 flex items-center space-x-4 w-fit absolute -bottom-11 md:-bottom-8 md:right-4 right-3">
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
