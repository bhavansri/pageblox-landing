import { useState } from "react";
import LoginForm from "./components/LoginForm";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/utils/firebase-config";
import Settings from "./components/Settings";
import LoadingSpinner from "./components/LoadingSpinner";
import { PAGEBLOX_USER_CREDENTIALS_KEY } from "@/utils/constants";

function Login() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    setIsLoading(false);
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem(PAGEBLOX_USER_CREDENTIALS_KEY);
    } catch (error) {
      console.log("An error occurred when logging out", error.message);
    }
  };

  const handleSubmit = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem(
        PAGEBLOX_USER_CREDENTIALS_KEY,
        JSON.stringify(userCredentials.user)
      );
    } catch (error) {
      console.log(
        "An error occurred when attempting to log in.",
        error.message
      );
    }
  };

  return (
    <div>
      <main className="flex flex-col min-h-screen overflow-hidden font-inter antialiased text-slate-200 tracking-tight">
        <section className="w-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 h5 font-inter uppercase font-bold"
            >
              <img
                className="w-8 h-8 mr-2"
                src="/images/pageblox-logo.svg"
                alt="logo"
              />
              Pageblox
            </a>
            {isLoading ? (
              <LoadingSpinner />
            ) : currentUser ? (
              <Settings email={currentUser.email} onLogout={handleLogout} />
            ) : (
              <LoginForm onSubmit={handleSubmit} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
