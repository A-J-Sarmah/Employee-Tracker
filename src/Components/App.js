import Navbar from "./Navbar";
import Headers from "./Headers";
import Cards from "./Card";
import TotalEmployeeToggler from "./TotalEmployeeToggler";
import Input from "./Input";
import List from "./List";

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <div className="container">
        <Cards />
        <TotalEmployeeToggler />
        <Input />
        <List />
      </div>
    </>
  );
}

export default App;
