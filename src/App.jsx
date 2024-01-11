import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Banner/Header/Header";
import Profile from "./components/Banner/Profile/Profile";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

export const App = () => {
  return (
    <>
      <section>
        <Header />
        <Profile />
      </section>
      <section id="light-color">
        <AboutMe />
      </section>
      <section>
        <Projects />
      </section>
      <section id="light-color">
        <Contact />
      </section>
    </>
  );
};

export default App;
