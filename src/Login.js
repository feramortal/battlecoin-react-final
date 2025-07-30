import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";

function Login({ setUser }) {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold text-yellow-800 mb-8">BattleCoin</h1>
      <button
        onClick={handleLogin}
        className="bg-yellow-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-yellow-700"
      >
        Entrar com Google
      </button>
    </div>
  );
}

export default Login;
