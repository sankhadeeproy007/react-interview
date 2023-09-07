import { useState } from "react";

function Counter() {
  const [count] = useState(0);

  const increment = () => {};

  return (
    <>
      <h3>Count is {count}</h3>
      <div className="card">
        <button onClick={increment}>Increment</button>
      </div>
      <Profile />
    </>
  );
}

const Profile = () => {
  console.count("Render profile : ");
  return <h3>Hello from Profile</h3>;
};

export default Counter;
