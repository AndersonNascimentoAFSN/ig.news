// import { GetServerSideProps } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import avatar from "../../public/images/avatar.svg";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <Image src={avatar} alt="Girl coding" />
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve("price_1LIlKHHS5GzY8uCNI4ccIzWM", {
//     expand: ["product"],
//   }); // server-side-rendering
export const getStaticProps: GetStaticProps = async () => { // static site generation
  const price = await stripe.prices.retrieve("price_1LIlKHHS5GzY8uCNI4ccIzWM", {
    expand: ["product"],
  });
  const twentyFourHours = 60 * 60 * 24;

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: twentyFourHours,
  };
};
