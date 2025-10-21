import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  // const [complete, setComplete] = useState<boolean>(false);
  // const [gender, setGender] = useState<string>("male");
  // const [city, setCity] = useState<string>("patna");

  const [todos,setTodos] = useState([
    {id:1,title:"Kaam Kar le",isCompleted:false}
  ])  

  return (
    <div className="bg-gray-800 w-screen h-screen flex text-white">
      
        {/* <input
          id="complete"
          type="checkbox"
          checked={complete}
          onChange={(e) => {
            setComplete(e.target.checked);
          }}
        />
        <label htmlFor="complete">Completed</label> */}
        {/* <br />
        <br />
        <input
          id="male"
          type="radio"
          value="male"
          checked={gender == "male" && true}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="male">male</label>
        <input
          id="female"
          type="radio"
          value="female"
          checked={gender == "female" && true}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="female">female</label>
        <br />
        <br />
        <select
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        >
          <option value="surat">Surat</option>
          <option value="patna">Patna</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <br /> */}
       <Create todos = {todos} setTodos = {setTodos}/>
       <Read todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
