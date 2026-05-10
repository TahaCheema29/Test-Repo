import FooterSection from "@/app/components/sections/FooterSection";
import Navbar from "@/app/components/Navbar";
import HeroSection from "./components/HeroSection";
import JObDescription from "./components/JobDescription";

export default function DetailPage() {


    return (
        <>
            <main className=" min-h-screen ">
                <div className=" h-full flex flex-col">
                    <Navbar />
                    <HeroSection />
                    <JObDescription/>
                </div>
            </main>
            <FooterSection />
        </>
    )
}