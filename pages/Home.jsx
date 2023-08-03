import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <main className="h-screen w-screen bg-red-50 grid grid-cols-7">
      <div>
        <Aside />
      </div>
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
