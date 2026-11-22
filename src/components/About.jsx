import cafePhoto from "../../foto/caffe.jpg";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-beige py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <Reveal className="aspect-[4/5] overflow-hidden rounded-[2rem]">
        <img src={cafePhoto} alt="Interior of the cafe" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">A small room with a good machine.</h2>
          <p className="mt-6 max-w-md text-lg leading-[1.75] text-espresso/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4 max-w-md text-lg leading-[1.75] text-espresso/80">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
