import { useState, useEffect } from 'react';

function CustomerForm({
    onAddCustomer,
    onUpdateCustomer,
    selectedCustomer,
    onCancel
}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (selectedCustomer) {
            setFormData({
                name: selectedCustomer.name,
                email: selectedCustomer.email,
                phone: selectedCustomer.phone,
            });
        } else {
            setFormData({
                name: '',
                email: '',
                phone: '',
            });
        }
    }, [selectedCustomer]);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (selectedCustomer) {
            onUpdateCustomer({
                ...selectedCustomer,
                ...formData,
            });

            onCancel(); // <- importante
        } else {
            onAddCustomer(formData);
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="text"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
            />

            <button type="submit">
                {selectedCustomer
                    ? 'Guardar cambios'
                    : 'Agregar cliente'}
            </button>

            {selectedCustomer && (
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
            )}
        </form>
    );
}

export default CustomerForm;