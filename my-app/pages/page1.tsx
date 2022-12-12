import React, { useEffect } from "react";

import Cookies from "cookies";
import { GetServerSideProps } from "next";
import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function page1(props) {
  return (
    <div>
      <h1> Page 1</h1>
      <pre>{JSON.stringify(props, null, 3)}</pre>
      <Link href={"/page1"}>1</Link>
      <br />
      <Link href={"/page2"}>2</Link>
      <br />
      <Link href={"/page3"}>3</Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  console.log(req.cookies);
  return {
    props: {
      cookies: req.cookies,
    },
  };
};
