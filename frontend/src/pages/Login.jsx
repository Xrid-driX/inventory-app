import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login attempt: ${email}`);
    };

return (
    <div className="">
        <form onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-80"
        >
        <h1 className="">Login</h1>
        <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
        /> 
        <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
        />
        <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
        
        >Login</button>
        </form>
  </div>
);

}
export default Login;