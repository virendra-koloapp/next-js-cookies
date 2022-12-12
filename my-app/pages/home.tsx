import React, { useEffect } from "react";

import Cookies from "cookies";
import cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function home(props) {
  useEffect(() => {
    console.log(faker);
    console.log(cookies.set);

    fetch("/api/hello")
      .then((response) => {
        return response.json();
      })
      .then(console.log);
  }, []);

  const onClick = () => {
    cookies.set(`Client :${faker.lorem.slug()}`, faker.name.fullName());
  };

  return (
    <div>
      <button onClick={onClick}>set</button>
      <h1>Home page</h1>

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
  const c = new Cookies(req, res);
  c.set("name", "viremdrta");
  return {
    props: {
      cookies: req.cookies,
    },
  };
};
