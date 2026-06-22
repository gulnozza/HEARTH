import { Chatbot } from "@/components/Chatbot";
import { Community } from "@/components/Community";
import { EmergencySOS } from "@/components/EmergencySOS";
import { Features } from "@/components/Features";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SafetyMap } from "@/components/SafetyMap";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <SafetyMap />
        <Community />
        <Chatbot />
        <Feedback />
      </main>
      <Footer />
      <EmergencySOS />
    </>
  );
}
