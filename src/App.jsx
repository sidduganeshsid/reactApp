import { useEffect, useState } from "react";

export default function App(){

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-1);

  async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((prevCount) => prevCount + 1);
  }
  useEffect(
    () => {
      getAdvice();
    }, []
  )
  return (
  <>
  <h1>{advice}</h1>
  <button onClick={getAdvice}>Get Advice</button>
    <Message count={count} />
  </>
  );
}

function Message(props){
  return (
    <p>
      Advice Count: {props.count}
    </p>
  );
}