import UpperPage from "./UpperPage";
import LowerPage from "./LowerPage";
import Navbar from "@/components/Navbar";
export default function _Home() {
  return (
    <>
      <div className="h-screen w-screen bg-primary overflow-y-scroll overflow-x-hidden scroll-smooth">
        <Navbar />
        <UpperPage />
        <LowerPage />
      </div>
    </>
  );
}
