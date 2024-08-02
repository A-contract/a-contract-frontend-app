import Landing from "@/components/landing";
import { HomeContextProvider } from "@/context/HomeContext";

export default function Home() {
  return (
    <HomeContextProvider>
      <Landing />
    </HomeContextProvider>
  );
}
