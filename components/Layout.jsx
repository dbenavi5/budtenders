import React from "react";
import Head from "next/head";
import Announcement from "./Announcement";
import Header from "./Header";
import { SLayout, SMain } from "./styles/LayoutStyles";
import Sidebar from "./Sidebar";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Budtenders" : "Budtenders"}</title>
        <meta name="description" content="Budtenders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Announcement />
      <Header />
      <SLayout>
        <Sidebar />
        <SMain>{ children }</SMain>
      </SLayout>
      {/* footer */}
    </>
  );
};

export default Layout;
