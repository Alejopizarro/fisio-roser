import { Instagram, Mail, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import LinkUrl from "./ui/link-url";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="w-full bg-[color:var(--secondary-color)] text-slate-50">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-4 sm:py-16 sm:px-24 text-left gap-4">
        <div>
          <p className="font-bold text-xl mb-4">Sobre mí</p>
          <ul className="space-y-4">
            {" "}
            <li>
              <h4>
                <LinkUrl
                  title="Lorem"
                  route="Lorem"
                  titleSeo="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </h4>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-xl">Servicios</p>
          <ul className="font-light text-slate-300 space-y-4 text-sm">
            <li>
              <h4>
                <LinkUrl
                  title="Lorem"
                  route="Lorem"
                  titleSeo="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </h4>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">Roser Sabater Moll</p>
          <ul className="text-sm font-light text-slate-300 space-y-4">
            <li>
              <h4>
                <Link
                  href="https://www.instagram.com/segurosfuengirola"
                  className="flex items-center gap-x-2"
                  title="Instagram de Seguros Fuengirola"
                >
                  <Instagram size={14} />
                  loremipsum
                </Link>
              </h4>
            </li>
            <li>
              <h4>
                <p className="text-md flex items-center gap-x-2">
                  <Mail size={14} /> lorem@lorem.es
                </p>
              </h4>
            </li>
            <li>
              <h4>
                <p className="text-md gap-x-2 flex items-center">
                  <Phone size={14} /> 666 66 66 66
                </p>
              </h4>
            </li>
            <li>
              <h4>
                <p className="text-md flex gap-x-2 items-center">
                  <Smartphone size={14} /> 666 66 66 66
                </p>
              </h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 sm:px-24">
        <Separator />
        <span className="py-4 block text-sm text-slate-300 justify-start">
          &copy; 2016 - 2025
          <Link href="*"> Roser Sabater Moll</Link> Todos los derechos
          reservados.
        </span>
      </div>
    </div>
  );
};

export default Footer;
