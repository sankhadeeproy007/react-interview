import useLocalStorage from "use-local-storage";

import Counter from "./tasks/Counter";
import Fetch from "./tasks/Fetch";
import Checkbox from "./tasks/Checkbox";
import "./App.css";

const TASKS = [
  { id: "counter", display: "Counter", component: <Counter /> },
  {
    id: "checkbox",
    display: "Checkbox",
    component: <Checkbox />,
  },
  {
    id: "fetch",
    display: "Fetch Data",
    component: <Fetch />,
  },
];

function App() {
  const [option, setOption] = useLocalStorage("task", "");

  const renderTask = () => {
    return TASKS.find((task) => task.id === option).component;
  };

  return (
    <>
      <button className="back" onClick={() => setOption("")}>
        Back
      </button>
      {!option ? (
        <>
          {TASKS.map(({ display, id }) => (
            <h2 onClick={() => setOption(id)} key={id}>
              {display}
            </h2>
          ))}
        </>
      ) : (
        renderTask()
      )}
    </>
  );
}

export default App;
