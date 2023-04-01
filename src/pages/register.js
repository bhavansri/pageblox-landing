import { auth } from "@/utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    }
  });

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem(
        "pagebloxUserCredentials",
        JSON.stringify(userCredentials.user)
      );
      router.push("/login");
    } catch (error) {
      console.log("An error occurred", error.message);
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
            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  {`Create an account ${
                    currentUser !== null ? currentUser.email : ""
                  }`}
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleRegister}
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="name@company.com"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      for="confirm-password"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-indigo-500 hover:bg-indigo-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-indigo-800"
                  >
                    Create an account
                  </button>
                  <p class="text-sm font-light text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      class="font-medium hover:underline text-blue-500"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
