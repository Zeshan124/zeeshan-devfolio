import { Socials } from "./ui/Socials";

const Footer = () => {
  return (
    <footer className="w-full sm:pt-60 pb-10 relative overflow-hidden ">
      <div className="w-full absolute left-0 top-0 min-h-96 ">
        <img
          src="assets/img-footer.svg"
          alt="grid"
          className="w-full h-full opacity-20"
        />
      </div>
      <div className="flex flex-col mt-16 justify-between items-center">
        <Socials />
        <p className="md:text-base text-sm md:font-normal font-light mt-5 opacity-40">
          Crafted with ❤ by  <a
            className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            target="_blank"
            href="https://vscodethemes.com/e/atzinescandia.theplumup/theplumup"
          >
            Atzin Escandia.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
