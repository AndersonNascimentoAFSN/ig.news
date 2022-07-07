import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headercontainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="Logo" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
