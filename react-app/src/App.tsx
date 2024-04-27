import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  const items = ["New York", "London", "Paris", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item[0]);
  };
  const text = "Hello";
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(items) => handleSelectItem(items)}
      />
      <Button btntxt={text} />
    </div>
  );
}

export default App;
