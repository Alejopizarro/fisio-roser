interface sectionRefs {
  name: string;
  scroll: React.RefObject<HTMLDivElement | null>;
}

interface NavbarProps {
  section: sectionRefs[];
}
const Navbar = (props: NavbarProps) => {
  const { section } = props;
  const handleScroll = (scrollRef: React.RefObject<HTMLDivElement | null>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 shadow-xl hidden sm:flex font-semibold items-center px-4 py-1 max-w-4xl mx-auto rounded-full">
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
  );
};

export default Navbar;
