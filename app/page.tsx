import CompanyTemplate from "@/sections/CompanyTemplate";
import Hero from "@/sections/Hero";
import OurBlog from "@/sections/OurBlog";
import OurService from "@/sections/OurService";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurService />
      <CompanyTemplate/>
      <OurBlog />
    </div>
  );
}
