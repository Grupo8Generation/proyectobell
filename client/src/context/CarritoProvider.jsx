import { useReducer, useEffect } from 'react';
import { CarritoContext } from './CarritoContext';

const initialState = [];

const CarritoProvider = ({ children }) => {
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload];
            case '[CARRITO] Aumentar Cantidad Compra':
                return state.map(item => {
                    const cant = item.cantidad + 1;
                    if (item.id === action.payload) return { ...item, cantidad: cant };
                    return item;
                });
            case '[CARRITO] Disminuir Cantidad Compra':
                return state.map(item => {
                    const cant = item.cantidad - 1;
                    if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant };
                    return item;
                });
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => compra.id !== action.payload);
            default:
                return state;
        }
    };

    // Intenta cargar el carrito desde localStorage.
    // Si no hay nada en localStorage, utiliza el initialState por defecto.
    const storedCompras = localStorage.getItem("carrito");
    const initialCompras = storedCompras ? JSON.parse(storedCompras) : initialState;

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialCompras);

    // Cada vez que listaCompras cambie, guarda el nuevo estado en localStorage.
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(listaCompras));
    }, [listaCompras]);

    const agregarCompra = (compra) => {
        compra.cantidad = 1;
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        };
        dispatch(action);
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id
        };
        dispatch(action);
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id
        };
        dispatch(action);
    }

    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        };
        dispatch(action);
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    );
}

export default CarritoProvider;
