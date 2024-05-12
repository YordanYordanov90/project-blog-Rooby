import Articles from "@/components/Articles";
import BlueSection from "@/components/BlueSection";
import Customers from '@/components/Customers';
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import NewRoooby from "@/components/NewRoooby";
import Supercharge from '@/components/Supercharge';

export default function Home() {
  return (
    <main>
      <Hero />
      <BlueSection />
      <Articles />
      <LogoSection />
      <NewRoooby />
      <Customers />
      <Supercharge />
    </main>
  );
}
