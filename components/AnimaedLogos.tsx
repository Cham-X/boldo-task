import Image from 'next/image';

const AnimatedLogos = () => {
  return (
    <div className="mt-8 overflow-hidden relative">
      <div className="flex animate-scroll gap-4 justify-center items-center w-max">
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </div>

 <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-10 h-full bg-darkgray blur-xl"></div>
        <div className="absolute top-0 right-0 w-10 h-full bg-darkgray blur-xl"></div>
          </div>
      </div>
  );
};

const Logo = () => (
  <span className="bg-inherit px-4 py-2 rounded flex gap-4">
        <Image src="/assets/icons/Logo (1).svg" width={145} height={42} alt="Logo 1" />
        <Image src="/assets/icons/Logo (5).svg" width={145} height={42} alt="Logo 2" />
  </span>
);

export default AnimatedLogos;
