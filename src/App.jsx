import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Banner/Header/Header";
import Profile from "./components/Banner/Profile/Profile";
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
      <section >
        <Projects />
      </section>
    </>
  );
};

export default App;
