import { MoveRight } from "lucide-react";

interface sectionRefs {
  name: string;
  scroll: React.RefObject<HTMLDivElement | null>;
}

interface NavbarProps {
  section: sectionRefs[];
  sectionMobile: sectionRefs[];
}
const Navbar = (props: NavbarProps) => {
  const { section, sectionMobile } = props;
  const handleScroll = (scrollRef: React.RefObject<HTMLDivElement | null>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br fixed top-5 sm:top-10 sm:right-100 z-1001 from-slate-50 to-slate-200 shadow-xl flex font-semibold items-center px-4 py-1 max-w-4xl mx-auto rounded-full">
      <div className="flex sm:hidden space-x-8 overflow-x-auto py-1 px-1">
        {sectionMobile.map((item, idx) => (
          <button
            key={item.name}
            className={`text-gray-800 text-shadow-slate-400 text-shadow-xl hover:bg-gray-300 h-full px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
              idx === 1
                ? "bg-purple-700 rounded-full flex items-center text-white"
                : ""
            }`}
            onClick={() => handleScroll(item.scroll)}
          >
            {item.name}
            {idx === 1 && (
              <span className="ml-2">
                <MoveRight />
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex space-x-2">
        {section.map((item) => (
          <button
            key={item.name}
            className="text-gray-800 text-shadow-slate-400 text-shadow-xl hover:bg-gray-300 h-full px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            onClick={() => handleScroll(item.scroll)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
