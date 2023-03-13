import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center p-4 text-sm sm:flex-row sm:justify-between "
      style={{ color: "#8a8f98" }}
    >
      <span className="order-last text-center sm:order-first ">
        Copyright © 2023 WRS FTIMS.{" "}
        <span className="max-sm:whitespace-pre max-sm:before:content-['\A']">
          All rights reserved.
        </span>
      </span>
      <div className="my-2 w-7/12 border border-gray-900 sm:hidden" />
      <div className="flex gap-3 text-3xl max-sm:order-first">
        <a
          className="hover:text-white"
          href="https://www.facebook.com/events/201538885862042"
        >
          <FaFacebookSquare />
        </a>
        <a
          className="hover:text-white"
          href="https://www.instagram.com/wrs_wftims/"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
