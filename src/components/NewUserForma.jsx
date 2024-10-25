import { useState } from "react";

function NewUserForma({ addUser }) {
    const [image, setImage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(null);
    const [from, setFrom] = useState("");
    const [job, setJob] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            image,
            firstName,
            lastName,
            age,
            from,
            job,
        };
        addUser(newUser); // Yangi foydalanuvchini qo'shish
    };

    return (
        <div className="modal-wrapper fixed inset-0 flex items-center justify-center z-50">
            <div className="overlay fixed inset-0 bg-black opacity-50"></div>
            <div className="modal bg-white rounded-lg shadow-lg p-6 z-10">
                <h2 className="text-xl font-bold mb-4">Create New User</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        <span className="font-semibold">Image URL:</span>
                        <input
                            onChange={(e) => setImage(e.target.value)}
                            type="url"
                            required
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        <span className="font-semibold">First Name:</span>
                        <input
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            required
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        <span className="font-semibold">Last Name:</span>
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            required
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        <span className="font-semibold">Age:</span>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            required
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        <span className="font-semibold">From:</span>
                        <input
                            onChange={(e) => setFrom(e.target.value)}
                            type="text"
                            required
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        <span className="font-semibold">Job:</span>
                        <input
                            onChange={(e) => setJob(e.target.value)}
                            type="text"
                            required
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </label>

                    <div className="flex justify-between">
                        <button
                            className="modal-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            className="modal-btn bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300"
                            type="button"
                            onClick={() => setShowModal(false)} // Yopish funksiyasini chaqirish
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewUserForma;
