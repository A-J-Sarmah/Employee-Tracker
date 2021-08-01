import Navbar from "./Navbar";
import Headers from "./Headers";
import Cards from "./Card";
import TotalEmployeeToggler from "./TotalEmployeeToggler";
import Input from "./Input";

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <div className="container">
        <Cards />
        <TotalEmployeeToggler />
        <Input />
      </div>
    </>
  );
}

export default App;
