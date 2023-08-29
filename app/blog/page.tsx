import React from "react";
import Header from "../components/Gen/header";
import Blogpage from "../components/Blog/blogpage";
import { client } from "../contentful/contentful";
import PostCard from "../components/Posts/postcard";
import Footer from "../components/Gen/footer";

export const metadata = {
  title: "The Tech Writers | Blog",
};

export default function Blog({ posts }) {
  return (
    <main>
      <Header />
      <Blogpage />
      <Footer />
    </main>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      posts: response.items,
    },
    revalidate: 1,
  };
};
