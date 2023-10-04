import React,{useState} from 'react';
interface IPROPS {
	name: String;
	title?: String;
}
interface IState {
  count: number;
  name: String;
  title: String;
}
let Customer: React.FC<IPROPS> = ({ name }) => {
	const [state, setState] = useState<IState>({
    name: "default",
    title: "Typescript",
    count: 0,
  });
	
	const handleIncrement = () => {
    setState((prevState) => ({
      ...prevState, // Spread the existing state
      count: prevState.count + 1, // Update the count property
    }));
  };
	const handleDecrement = () => {
    setState((prevState) => ({
      ...prevState, // Spread the existing state
      count: prevState.count - 1, // Update the count property
    }));
  };
	return (
    <div>
      <h1>hello {name}</h1>
      <h3>
        name: {state.name} {state.count}
      </h3>
      <h3>Title: {state.title}</h3>
      <button className="rounded m-3 " onClick={handleIncrement}>
        {" "}
        Increment
      </button>
      <button className="rounded m-3 " onClick={handleDecrement}>
        {" "}
        Decrement
      </button>
    </div>
  );
}
export default Customer;