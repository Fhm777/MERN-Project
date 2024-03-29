import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="objext-contain"
          />
          <p className="text-base text-gray-700">
            BikeHub 2023 <br /> All rights reserved
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__link">
            <h3 className="font-bold">Team 540 - Members</h3>
            <div className="flex flex-col">
              Gattam Thulasiram Jeshwanth (21BCT0151)
            </div>
            <div className="flex flex-col">
              Perugu Rishi Kiran (21BCT0428)
            </div>
            <div className="flex flex-col">
              Jall Balasai (21BCE3403)
            </div>
            <div className="flex flex-col">
              Faheem Muhammad O (21BCE2426)
            </div>
            <div className="flex flex-col">
              Vaibhav Sanket (21BCE0644)
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 BikeHub. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
