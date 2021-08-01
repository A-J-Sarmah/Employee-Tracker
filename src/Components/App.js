import Navbar from "./Navbar";
import Headers from "./Headers";
import Cards from "./Card";
import TotalEmployeeToggler from "./TotalEmployeeToggler";
import Input from "./Input";
import Button from "./Button";

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <div className="container">
        <Cards />
        <TotalEmployeeToggler />
        <Input />
        <Button />
      </div>
    </>
  );
}

export default App;
