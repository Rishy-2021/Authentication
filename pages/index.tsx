import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "./login";
import { getCookie } from "cookies-next";

import LoginSuccessfull from "./LoginSuccessfull";
// const [isAuth, setIsAuth] = useState(false);

const Home: NextPage = () => {
  const [isAuth, setIsAuth] = useState(getCookie("isAuth"));
  // const [isAuth, setIsAuth] = useState(true);
  return isAuth ? <LoginSuccessfull /> : <Login setIsAuth={setIsAuth} />;
};

export default Home;
