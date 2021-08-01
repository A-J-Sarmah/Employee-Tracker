import Navbar from "./Navbar";
import Headers from "./Headers";
import Card from "./Card";
import TotalEmployeeToggler from "./TotalEmployeeToggler";
import Input from "./Input";
import Button from "./Button";

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <div className="container">
        <Card />
        <TotalEmployeeToggler />
        <Input />
        <Button />
      </div>
    </>
  );
}

export default App;
