import Educations from "./components/Educations/Educations";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const HomePage = () => {
    return <div className="grid gap-80">
        <Hero />
        <Skills />
        <Experiences />
        <Educations />
    </div>;
};

export default HomePage;