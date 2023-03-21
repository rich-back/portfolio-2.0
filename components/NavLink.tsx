import Link from "next/link";
import { useRouter } from "next/router";

export const NavLink = () => {
  const router = useRouter();

  return (
    <div className="">
      <Link href="#about">
        <button
          className={router.asPath == "/#about" ? "active" : "heroButton"}
          
        >
          About
        </button>
      </Link>
      <Link href="#experience">
        <button
          className={router.asPath == "/#experience" ? "active" : "heroButton"}
        >
          Experience
        </button>
      </Link>
      <Link href="#skills">
        <button
          className={router.asPath == "/#skills" ? "active" : "heroButton"}
        >
          Skills
        </button>
      </Link>
      <Link href="#projects">
        <button
          className={router.asPath == "/#projects" ? "active" : "heroButton"}
        >
          Projects
        </button>
      </Link>
    </div>
  );
};
