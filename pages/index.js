import About from "../components/about";
import Team from "../components/agileTeam";
import Banner from "../components/banner";
import Body from "../components/body";
import College from "../components/college";
import Footer from "../components/footer.js";
import Growing from "../components/growing";
import { Header } from "../components/header";
import Offices from "../components/offices";
import Ping from "../components/ping";
import Project from "../components/project";
import Service from "../components/services";
import Topic from "../components/topics";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Body />
      <Service />
      <Team />
      <Ping />
      <About />
      <College />
      <Growing />
      <Offices />
      <Topic />
      <Project />
      <Footer />
    </>
  );
}
