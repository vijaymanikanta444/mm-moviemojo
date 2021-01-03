import axios from "axios";
import React, { useEffect } from "react";

const Test98 = () => {
  // const [data, setData] = useState(0);

  useEffect(() => {
    axios.get("/movies").then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <h1>this is a client setup, test:MM-0005</h1>
    </div>
  );
};
export default Test98;
