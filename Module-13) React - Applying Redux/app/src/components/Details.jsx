import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

export default function Details() {
  const { data } = useContext(UserContext);
  return (
    <div>
      <h1>Are You a Citizen : {data.citizen ? "True" : "False"}</h1>
      <h1>Are You over 21 : {data.over21 ? "Yes" : "No"}</h1>
    </div>
  );
}
