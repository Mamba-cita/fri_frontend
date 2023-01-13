import Cards from "../operationCards/Cards";
import "./Operation.css";
import Table from "../table/Table";

export default function Operation() {
  return (
    <div className="operation">
      <h1>Operations</h1>
      <Cards />
     
      <Table />
    </div>
  );
}
