import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewUserForma from "./components/NewUserForma";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const cart = useSelector((state) => state.cart.cart); // Kartani Reduxdan olish
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);

    // App ishga tushganda LocalStorage dan kartani olish
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        savedCart.forEach((item) => {
            dispatch({ type: "ADD_CART", payload: item });
        });
    }, [dispatch]);

    // Kartani LocalStorage ga saqlash
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addUser = (user) => {
        setUsers((prev) => [...prev, user]);
        dispatch({ type: "ADD_CART", payload: user }); // Yangi foydalanuvchini kartaga qo'shish
        setShowModal(false);
    };

    return (
        <div>
            <Header />
            <Hero />
            {showModal && <NewUserForma addUser={addUser} />}
            <div>
                {cart.map((value, index) => (
                    <div key={index}>
                        <h3>{value.id}</h3>
                        <h3>{value.firstName}</h3>
                        <h3>{value.lastName}</h3>
                    </div>
                ))}
            </div>
            <button
                onClick={() => setShowModal(true)}
                className="-rotate-90 font-bold font-sans text-[17px] fixed top-1/2 -left-[46px] bg-blue-500 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
                Create Card
            </button>
        </div>
    );
}

export default App;
