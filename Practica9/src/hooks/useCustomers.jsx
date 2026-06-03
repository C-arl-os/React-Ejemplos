import { useState } from "react";
import { getCustomers } from "../services/customerService";

// Hook personalizado para manejar la lógica de clientes
export function useCustomers() {
    const [customers, setCustomers] = useState(getCustomers());


// Función para agregar un nuevo cliente
    const addCustomer = (customer) => {
        const newCustomer = {
            id: crypto.randomUUID(),
            status: 'Activo',
            ...customer,
        };

        setCustomers([...customers, newCustomer]);
    };

    // Función para eliminar un cliente por su ID
    // devuelve una nueva lista de clientes sin el cliente eliminado
    const deleteCustomer = (customerId) => {
        setCustomers(customers.filter((customer) => customer.id !== customerId));
    };

    const updateCustomer = (updatedCustomer) => {
        // Lógica para actualizar un cliente (a implementar)
        const updatedCustomers = customers.map((customer) =>
            customer.id === updatedCustomer.id ? { ...customer, ...updatedCustomer } : customer
        );
        setCustomers(updatedCustomers);
    }
    

    return {
        customers, //devuelve la lista de clientes
        addCustomer, // devuelve la función para agregar clientes
        deleteCustomer, // devuelve la función para eliminar clientes
        updateCustomer, // devuelve la función para actualizar clientes
    };
}