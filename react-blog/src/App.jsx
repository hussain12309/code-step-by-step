import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import User from "./User.jsx";
import Header from "./Header.jsx";
import ToDo from "./ToDo.jsx";
//  const hey=(name)=>{
//     alert(name);
//   }
function App() {
  const [counter, setCounter] = useState(0);
  const name = "";
  let path = "https://picsum.photos/300/200";
  const userObj={
    name: "john",
    age: 30,
    email:"jvdsusagdcb.email.com"
  }
  function fruit() {
    return "Banana";
  }
  function sum(a,b){
    return a +b;
  }
  function operation(a, b, op){
    let result = 0;
    if (op ==="+"){
      return a+b;
    }else if (op === "-"){
      return a-b;
    }else{
      return "invalid operation";
    }
  }
   let fruits = "dragon fruit";
  const handleFruit=()=>{
    fruit = "pineapple";
  }
  const hey=(name)=>{
    alert(name);
  }
  return (
    <>
      <Header />
      <h1>First component</h1>
      <h1>Counter val :{counter}</h1>
      <User />
      <button onClick={() => setCounter(counter + 1)}>
        click to increase the count
      </button>
      <ToDo />
      <h1>JSX with Curly Braces</h1>
      <h1>{name ? name : "user not found"}</h1>
      {fruit()}
      <h1>{operation(20, 10, "+")}</h1>
      <h1>{JSON.stringify(userObj)}</h1>
      <img
        src={path}
        alt=""
      />
      <button onClick={()=>hey("apple")}>Apple</button>
      <button onClick={()=>hey("banana")}>banana</button>
      <h1>{fruits}</h1>
      <button onClick={handleFruit}>change fruit name</button>
    </>
  );
}
export default App;
