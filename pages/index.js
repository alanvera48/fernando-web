// import Image from 'next/image'
import Containers from "../src/components/containers";
import Started from "../src/components/started";
import routes from "../src/constant";
import Contact from "../src/contact";
import Header from "../src/header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Started></Started>
      {routes.map((el, index) => {
        return <Containers element={el} key={index}></Containers>;
      })}
       <Contact></Contact>
    </div>
  );
}
