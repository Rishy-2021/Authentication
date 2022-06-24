import React from "react";
import LoginPage from "../components/LoginPage/LoginPage";

function Login({ setIsAuth }) {
  return (
    <div className="">
      <main>
        <section className="h-screen w-screen">
          <LoginPage setIsAuth={setIsAuth} />
        </section>
      </main>
    </div>
  );
}

export default Login;
