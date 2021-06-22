import Head from "next/head";
import styles from "./layout.module.css";

const siteTitle = "Subscription";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="container">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Implement a subscription order process for a cloud storage provider using React."
          />
          <title>{siteTitle}</title>
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>{children}</main>
      </div>
    );
}