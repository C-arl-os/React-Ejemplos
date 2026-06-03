import CustomerCard from './CustomerCard';

// Componente para mostrar la lista de clientes
function CustomerList({ customers, onDeleteCustomer, onEditCustomer }) {
  return (
    <section>
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onDeleteCustomer={onDeleteCustomer}
          onEditCustomer={onEditCustomer}
        />
      ))}
    </section>
  );
}

export default CustomerList;