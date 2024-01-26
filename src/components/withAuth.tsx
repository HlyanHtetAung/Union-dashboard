// import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(true);

    // useEffect(() => {
    //   setDomLoaded(true);
    // }, []);

    // useEffect(() => {
    //   const token = Cookies.get("token");
    //   const userLoggedInStatus = token;
    //   if (!userLoggedInStatus) {
    //     redirect("/login");
    //   }
    // }, []);

    // if (!Cookies.get("token")) {
    //   return domLoaded && null;
    // }

    // useEffect(() => {
    //   if (domLoaded == true) {
    //     navigate("/login");
    //   }
    // });

    const toRenderJSX =
      loggedIn == false ? (
        <div className="flex items-center justify-center mt-[40vh]">
          <Link to="/login" className="text-center">
            <p className="text-2xl font-normal">
              You have to login in order to access those data <br></br>
              <span className="underline font-bold text-2xl text-blue-600">
                Login
              </span>
            </p>
          </Link>
        </div>
      ) : (
        <Component {...props} />
      );

    return toRenderJSX;
  };
}

export default withAuth;
