import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { MySkill } from "@/components/MySkill";

export default function Home() {
  return (
    <main className="h-screen  px-[10%]">
      <Hero />
      <MySkill />
      <ContactMe />
      <Footer />
    </main>
  );
}
