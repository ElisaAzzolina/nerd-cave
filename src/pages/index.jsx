import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Hamburger from "@/components/Hamburger/Index";
import ChatSidebar from "@/components/chatSidebar/Index";
import TitleBar from "@/components/TitleBar";
import MessagesList from "@/components/MessagesList/Index";
import SingleMessage from "@/components/SingleMessage/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.leftSide}>
          <ChatSidebar />
        </div>
        <div className={styles.rightSide}>
          <TitleBar />
          <MessagesList dbname={"messages"} />
        </div>
        {/* <SingleMessage/> */}
        {/* <Hamburger /> */}
      </main>
    </>
  );
}
