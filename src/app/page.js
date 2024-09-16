import { Header } from "@/components/heading";
import { HomeRede } from "@/components/homing";
import { SectionMachines } from "@/components/maquinihas";
import { SectionSolution } from "@/components/solution";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeRede/>
      <SectionSolution/>
      <SectionMachines/>
    </>
  );
}
