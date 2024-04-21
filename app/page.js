import Image from "next/image";
import Logo from "assets/dndsuite_cropzoom.png";

import Content from "./content.mdx";

export const metadata = {
  title: "D&D Suite | Home",
};

export default function Page() {
  return (
    <article className="prose mx-auto text-justify mt-8 p-10">
      <Image src={Logo} alt="D&D Suite Logo" height={100} width={100} />
      <Content />
    </article>
  );
}
