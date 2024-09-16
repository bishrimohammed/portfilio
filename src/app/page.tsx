import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { MySkill } from "@/components/MySkill";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="h-screen  lg:px-[10%] px-[2%]">
      <Hero />
      <MySkill />
      <Portfolio />
      <ContactMe />
      <Footer />
    </main>
  );
}
