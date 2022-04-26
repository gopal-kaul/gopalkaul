import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faSteam,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gopal Kaul</title>
        <meta name="description" content="Portfolio page for Gopal Kaul" />
        <link rel="icon" href="/Gopal.png" />
      </Head>
      <section className={styles.main}>
        <Image
          className={styles.myimg}
          src="/Gopal.png"
          width={450}
          height={450}
        />
        <h1 className={styles.name}>Gopal Kaul</h1>
        <h2 className={styles.tag}>Full Stack Developer</h2>
        <div className={styles.socials}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://discordapp.com/users/545099023976235029"
          >
            <FontAwesomeIcon className={styles.icons} icon={faDiscord} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/gopal-kaul"
          >
            <FontAwesomeIcon className={styles.icons} icon={faGithub} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://steamcommunity.com/id/gopalkaul"
          >
            <FontAwesomeIcon className={styles.icons} icon={faSteam} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://instagram.com/kaulmegops"
          >
            <FontAwesomeIcon className={styles.icons} icon={faInstagram} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://open.spotify.com/user/1xr1nqgy1t0n47dhj23h1xaev"
          >
            <FontAwesomeIcon className={styles.icons} icon={faSpotify} />
          </a>
        </div>
      </section>
      <section className={styles.description}>
        <h1>Who am I?</h1>
        <p>
          I am Gopal Kaul, a Computer Science Engineer from University College
          of Engineering, Osmania University
        </p>
        <h1>What do I know?</h1>
        <p>Currently, I am working on the following technologies : </p>
        <ul>
          <li>NextJS</li>
          <li>React</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Flutter</li>
        </ul>
        <p>Stuff I also know : </p>
        <ul>
          <li>Django</li>
          <li>React Native</li>
          <li>C/C++</li>
          <li>Python</li>
          <li>Java</li>
          <li>Linux</li>
          <li>Git</li>
        </ul>
        <p>I am currrently learning : </p>
        <ul>
          <li>Rust</li>
          <li>Figma</li>
          <li>DaVinci Resolve</li>
          <li>GIMP</li>
          <li>Redux</li>
        </ul>
      </section>
      <section className={styles.projects}>
        <h1>Some of my Projects: </h1>
        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/gopal-kaul/infinity2k22"
            >
              Infinity 2K22
            </a>
            <p>
              College Fest Website written in React + Bootstrap, deployed at :{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://infinity2k22ou.tech/"
              >
                Infinity 2k22 OU
              </a>
            </p>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/gopal-kaul/emccuceou"
            >
              EMC² UCEOU
            </a>
            <p>
              College Music Club Website written in React and Bootstrap,
              deployed at :{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://emccuceou.vercel.app/"
              >
                EMC² UCEOU
              </a>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
