// import Image from 'next/image'
import Containers from "../src/components/containers";
import routes from "../src/constant";

export default function Home() {
  return (
    <div>
      {routes.map((el, index) => {
        return <Containers element={el} key={index}></Containers>;
      })}
    </div>
  );
}
