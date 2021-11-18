// import Image from 'next/image'
import Containers from "../src/components/containers";
import Started from "../src/components/started";
import routes from "../src/constant";
import Contact from "../src/contact";

export default function Home() {
  return (
    <div>
      <Started></Started>
      {routes.map((el, index) => {
        return <Containers element={el} key={index}></Containers>;
      })}
       <Contact></Contact>
    </div>
  );
}
