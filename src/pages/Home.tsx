import {
  Hero,
  Team,
  Posts,
  Catalog,
  HeroDown,
  Questions,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroDown />
      <Questions />
      <Posts />
      <Catalog />
      {/* <Price /> */}
      <Team />
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
