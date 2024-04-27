function ListGroup() {
  const items = ["New York", "London", "Paris", "Tokyo"];
  return (
    <>
      <h1>List Group</h1>
      {items.map((items) => (
        <li key={items} className="list-group-item">
          {items}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
