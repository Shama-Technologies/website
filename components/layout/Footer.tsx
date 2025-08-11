import { FooterLinks } from "../../lib/data";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="px-5 md:pl-16 md:pt-24 ">
      <div className="flex max-lg:flex-col lg:items-end">
        <div className="lg:px-28 max-lg:order-2">
          <div className="lg:grid lg:grid-cols-4 gap-16 text-[#161617] ">
            {FooterLinks.map((footer) => {
              return (
                <div className="" key={footer.header}>
                  <h5 className="text-[#483FB2]  lg:mt-10 text-xl  font-bold">
                    {footer.header}
                  </h5>
                  <ul className="lg:mt-5 mb-5 grid text-[#161617] gap-5">
                    {footer.links.map((link) => {
                      return (
                        <div key={link.name}>
                          <Link
                            href={link.link}
                            prefetch={link.link.startsWith("/")}
                          >
                            <li>{link.name}</li>
                          </Link>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <ul className="flex gap-3 max-lg:mt-10 mb-5 lg:mb-10">
          <li>
            <a
              href="https://www.linkedin.com/company/theshama-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin fontSize={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61561300449671"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook fontSize={24} />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/theshamaapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter fontSize={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/theshamaapp/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram fontSize={24} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok fontSize={24} />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center py-4 border-t-[2px] border-gray-300">
        &copy; 2025 SHAMA Technologies. All Rights Reserved.
      </p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
