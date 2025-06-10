import Image from "next/image";

const Doctoralia = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center bg-primary rounded-xl rounded-bl-4xl shadow-2xl text-slate-50 w-full">
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
    </div>
  );
};

export default Doctoralia;
