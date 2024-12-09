import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import FacebookIcon from "../../../public/facebook.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import TwitterIcon from "../../../public/twitter.svg";
import InstagramIcon from "../../../public/instagram.svg";

export const Navigation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sociallinkdiv}>
        <Link
          href={"https://www.linkedin.com/in/hakif-kadriu-97166333b/"}
          target="_blank"
        >
          <Image
            priority
            src={LinkedinIcon}
            alt="Follow us on Twitter"
            width={36}
            height={36}
          />
        </Link>
        <Link href={"https://www.instagram.com/hakiffkadriuu/"} target="_blank">
          <Image
            priority
            src={InstagramIcon}
            alt="Follow us on Twitter"
            width={36}
            height={36}
          />
        </Link>
        <Link href={"https://www.facebook.com/hakiffkadriuu/"} target="_blank">
          <Image
            priority
            src={FacebookIcon}
            alt="Follow us on Twitter"
            width={36}
            height={36}
          />
        </Link>
        <Link href={"https://x.com/justkifa"} target="_blank">
          <Image
            priority
            src={TwitterIcon}
            alt="Follow us on Twitter"
            width={36}
            height={36}
          />
        </Link>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbarlink1}><Link href="/">Home</Link></div>
        <div className={styles.navbarlink2}><Link href="#">Projects</Link></div>
        <div className={styles.navbarlink3}><Link href="#">About</Link></div>
      </div>
    </div>
  );
};
