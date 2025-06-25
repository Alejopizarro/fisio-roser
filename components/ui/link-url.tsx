import Link from "next/link";

interface LinkUrlProps {
  title: string;
  route: string;
  titleSeo: string;
}

const LinkUrl = (props: LinkUrlProps) => {
  const { title, route, titleSeo } = props;

  return (
    <Link
      href={route}
      title={titleSeo}
      className="font-light text-sm text-slate-300 cursor-pointer hover:underline"
    >
      {title}
    </Link>
  );
};

export default LinkUrl;
