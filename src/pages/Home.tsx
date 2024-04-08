import {
  Hero,
  Team,
  Posts,
  Price,
  HeroDown,
  Products,
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
      <Products />
      <Price />
      <Team />
      <Testimonials />
    </>
  );
};

export default Home;
