import { NavLinks } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, memo } from "react";

interface IProps {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = memo(({ openNav, setOpenNav }: IProps) => {
  // Prevent scroll when nav is open
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openNav]);

  return (
    <AnimatePresence mode="wait">
      {openNav && (
        <motion.section
          className="md:hidden fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenNav(false)}
          />

          {/* Content */}
          <motion.div
            className="bg-white h-screen w-[85%] max-w-[400px] absolute right-0 top-0 pt-7 px-6 shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="flex flex-col z-30 h-full">
              <div className="flex justify-end mb-8">
                <button
                  type="button"
                  onClick={() => setOpenNav(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close navigation menu"
                >
                  <Image
                    src="/icons/closenav.svg"
                    alt="Close menu"
                    width={24}
                    height={24}
                    priority
                  />
                </button>
              </div>

              <nav>
                <ul className="space-y-6">
                  {NavLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpenNav(false)}
                        className="text-lg font-medium text-gray-800 hover:text-[#483FB2] transition-colors block"
                        prefetch={true}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    href="/ambassador"
                    onClick={() => setOpenNav(false)}
                    prefetch={true}
                  >
                    <button
                      type="button"
                      className="w-full text-base font-medium px-6 py-3 text-white rounded-lg bg-[#483FB2] hover:bg-[#3c34a3] transition-colors"
                    >
                      Become an Ambassador
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
});

MobileNav.displayName = "MobileNav";

export default MobileNav;
