import Image from "next/image";

const AboutMe = () => {
  return (
    <div className=" flex flex-col-reverse gap-4 lg:flex-row items-center bg-primary rounded-xl rounded-bl-4xl shadow-2xl text-slate-50 w-full">
      <Image
        src="/salon-fisio.jpg"
        height={500}
        width={500}
        alt="Consultorio de fisioterapia - Roser Sabater Moll"
        className="rounded-xl rounded-tl-none lg:rounded-tl-xl lg:rounded-br-none rounded-bl-4xl rounded-tr-[55%] object-cover lg:w-1/2 h-64 lg:h-auto"
      />

      <div className="flex flex-col justify-center space-y-4 px-8 pt-8">
        <h2 className="text-3xl xl:text-5xl font-bold mb-4 lg:mb-8">
          Sobre mí
        </h2>
        <p className="text-md xl:text-lg max-w-xl text-slate-300">
          Soy Roser Sabater Moll, fisioterapeuta especializada en rehabilitación
          deportiva y suelo pélvico. Mi pasión es ayudar a las personas a
          recuperar su bienestar físico y emocional.
        </p>
        <p className="text-md xl:text-lg max-w-xl text-slate-300">
          Con años de experiencia en el campo, ofrezco tratamientos
          personalizados para cada paciente, utilizando técnicas avanzadas y un
          enfoque integral.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
