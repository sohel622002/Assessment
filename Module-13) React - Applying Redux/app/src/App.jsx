import { useContext } from "react";
import "./App.css";
import Details from "./components/Details";
import { UserContext } from "./context/UserContextProvider";

function App() {
  const { data, setData } = useContext(UserContext);

  const handleChange = (field) => {
    setData((prevData) => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };

  return (
    <h1>
      <Details />
      <h4>
        <span style={{ marginRight: "20px" }}>Are you citizen ?</span>
        <input
          type="checkbox"
          checked={data.citizen}
          onChange={() => handleChange("citizen")}
        />
      </h4>
      <h4>
        <span style={{ marginRight: "20px" }}>Are you over 21 ?</span>
        <input
          type="checkbox"
          checked={data.over21}
          onChange={() => handleChange("over21")}
        />
      </h4>
    </h1>
  );
}

export default App;
