import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);

    const movies = {
      title: "Inception",
      year: 2010,
    };
  }

  //For when When the component first gets loaded
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

//Compinent names need to be in uppercase
function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
}
