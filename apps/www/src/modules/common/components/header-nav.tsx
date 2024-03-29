"use client";
import useAppData from "@hooks/useAppData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { bisonFont } from "@/modules/common/assets/fonts";
import { useMediaQuery } from "react-responsive";

const navItems = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "Portfolio",
    link: "/work",
  },
  {
    title: "What We Do",
    link: "/services",
  },
  {
    title: "Who We Are",
    link: "/about",
  },
  {
    title: "Resources",
    link: "/blog",
    children: [
      {
        title: "Blog",
        link: "/blog",
      },
      {
        title: "Youtube",
        link: "https://www.youtube.com/@DeftDodo",
        target: "_blank",
      },
      {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/dan-duehren-61743149/",
        target: "_blank",
      }
    ]
  }
];

type linkItem = {
  title: string;
  link: string;
  target?: string;
  children?: linkItem[];
}

const HeaderNav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav>
      <ul className={cn("flex items-center gap-8 text-2xl md:text-xl lg:text-2xl tracking-wide", bisonFont.className, className)}>
        {navItems.map((item, index) => (
          <NavItem key={index} title={item.title} link={item.link} children={item.children} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem: React.FC<linkItem> = ({
  title,
  link,
  children = [],
}) => {
  const [isHover, toggleHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isOnPage, setIsOnPage] = useState(false);
  const { locale } = useAppData();
  const pathname = usePathname();
  const url = useMemo(() => `/${locale}${link}`, [locale, link]);
  const isMedium = useMediaQuery({ minWidth: 768 });

  const onMouse = () => {
    setIsActive(!isActive);
    toggleHover(!isHover);
  }

  useEffect(() => setIsOnPage(pathname === url), [pathname, url]);


  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.4
      },
      display: "block"
    },
    exit: {
      opacity: isMedium ? 0 : 1,
      rotateX: -15,
      transition: {
        duration: 0.2
      },
      transitionEnd: {
        display: isMedium ? "none" : "block"
      }
    }
  };

  return (
    <li
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
    >
      <Link className="relative" href={url}>
        <motion.span
          className="relative"
          initial={isActive || isOnPage ? "hover" : "default"}
          animate={isActive || isOnPage ? "hover" : "default"}
          transition={{ ease: "linear", duration: 0.2, delay: 0.1 }}
          variants={{
            hover: {
              opacity: 0,
            },
            default: {
              opacity: 1,
            },
          }}
        >
          {title}
        </motion.span>
        <motion.span
          className="!absolute bottom-0 left-0"
          initial={isActive || isOnPage ? "hover" : "default"}
          animate={isActive || isOnPage ? "hover" : "default"}
          transition={{ duration: 0.2, ease: "linear" }}
          variants={{
            hover: {
              bottom: 0,
              opacity: 1,
              color: "#09C5A3",
            },
            default: {
              bottom: "-100%",
              opacity: 0,
              color: "#09C5A3",
              pointerEvents: "none",
            },
          }}
        >
          {title}
        </motion.span>
      </Link>
      {children.length > 0 ? (
        <motion.div
          className="sub-menu text-center md:text-start md:absolute md:border-white-16 md:backdrop-blur md:bg-dark/40 md:p-4 md:border-2 top-10 z-60 md:min-w-48"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <hr className="md:hidden border-white-16 my-2" />
          <ul className="sub-menu-container">
            {children.map((child, index) => (
              <li key={index} className="sub-menu-item">
                <Link href={child.link} target={child.target} className="hover:text-primary transition-all">{child.title}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </li>
  );
};

export { HeaderNav };
