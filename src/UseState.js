import React, { useState } from "react";
import ReactDOM from "react-dom";

const UseState = () => {
  let [item, setItem] = useState(1);
  const incrementItem = () => setItem(++item);
  const decrementItem = () => setItem(--item);

  return (
    <div>
      <h1> Hello {item} </h1>
      <h2>Start editing to see some magic happen! </h2>
      <button onClick={incrementItem}> +1 </button>
      <button onClick={decrementItem}> -1 </button>
    </div>
  );
};
//--------------------------------------------------------------
// class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };

//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1> Hello {item} </h1>
//         <h2>Start editing to see some magic happen! </h2>
//         <button onClick={this.incrementItem}></button>
//         <button onClick={this.decrementItem}></button>
//       </div>
//     );
//   }

//   incrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };
//   decrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };
// }

export default UseState;