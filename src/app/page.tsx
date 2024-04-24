import NavBar from "@/app/components/NavBar";
import Hero from "@/app/components/Hero";
import Description from "@/app/components/Description";
import ContactForm from "./components/ContactForm";
import Other from "./components/Other";

export default function Home() {
  return (
    <main className="bg-white flex flex-col p-10 min-h-screen items-center justify-between">
        <NavBar/>

        <Hero/>

        <Description/>

        <ContactForm/>

        <Other/>
    </main>
  );
}
