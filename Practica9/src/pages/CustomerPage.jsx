import CustomerList from '../components/CustomerList';
import { useCustomers } from '../hooks/useCustomers';
import CustomerForm from '../components/CustomerForm';
import { useState } from 'react';
// Página principal para mostrar la lista de clientes
function CustomersPage() {
  const { customers, addCustomer, deleteCustomer, updateCustomer } = useCustomers();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  console.log(selectedCustomer);
  return (
    <main>
      <h1>Mini CRM de Clientes</h1>

      <CustomerForm
        onAddCustomer={addCustomer}
        selectedCustomer={selectedCustomer}
        onUpdateCustomer={updateCustomer}
      />
      <CustomerList
        customers={customers}
        onDeleteCustomer={deleteCustomer}
        onEditCustomer={setSelectedCustomer}
      />
    </main>
  );
}

export default CustomersPage;