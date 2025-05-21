import Greeting from "./Greeting";

function Timebasegreeting() {
  const hours = new Date().getHours();
  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";
  return <h1>{greeting} !</h1>;
}
export default Timebasegreeting;
