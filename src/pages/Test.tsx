import { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("Data:", data);
      });
  }, []);

  return <div>hello</div>;
};

export default Test;
