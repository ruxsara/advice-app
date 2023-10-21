import {
  useEffect,
  useState
} from "react";
import "./App.css";
import { getAdvice } from "./api/GetAdvice";
import { MessageCount } from "./components/Message";

function App() {
  const [advice, setAdvice] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    getAdvice(setAdvice, setCount);
  }, []);

  const handleClick = () => {
    getAdvice(setAdvice, setCount);
  };

  return (
    <div className="img">
      <div className="advice">
        <h1>{advice}</h1>
      </div>

      <button onClick={handleClick} className="button">
        Get advice
      </button>
      <MessageCount count={count} />
    </div>
  );
}

export default App;
