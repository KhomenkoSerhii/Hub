import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  console.log("wfwefwef");
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="cursor-pointer object-contain"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px"
        />
      </nav>
    </header>
  );
};

export default Navbar;
