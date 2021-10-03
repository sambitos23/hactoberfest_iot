import About from "./components/About/About";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Partners from "./components/Partner/Partners";
import ProjectCardInfo from "./components/ProjectCard/ProjectCardInfo";

function App() {
  return (
   <div>
      <div className="w-full bg-primary-default px-10 md:px-6 lg:px-24 pb-20 flex justify-center">
      <div className="max-w-screen-xl">
        <Header />
        <About />
        <ProjectCardInfo/>
        <Partners/>
      </div>
    </div>
    <Footer/>
   </div>
  );
}

export default App;
