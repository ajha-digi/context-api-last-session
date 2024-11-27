import useRootContext from "./hooks/useRootContext";
import { getUser } from "./services";

function App() {
  const { age , setAge} = useRootContext();

  const handleClick = async () => {
    const data = await getUser();
    console.log(data);
    
  }
  return(
    <>
      <button onClick={handleClick}>Get User data</button>
      <h1 onClick={()=>setAge(pre => pre+1)}>Hi - {age}</h1>;
    </>
  ) 
}

export default App;
