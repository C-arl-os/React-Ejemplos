
//  Componente para mostrar la información de un cliente
function CustomerCard({ customer, onDeleteCustomer, onEditCustomer }) {
  return (
    <article>
      <h3>{customer.name}</h3>
      <p>{customer.email}</p>
      <button onClick={() => onDeleteCustomer(customer.id)}>Eliminar</button>
      <button onClick={() => onEditCustomer(customer)}>Editar</button>
    </article>
  );
}

export default CustomerCard;