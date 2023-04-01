import { PagebloxProvider } from "pageblox-react";
import "pageblox-react/dist/index.css";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import "../styles/style.css";
import "../styles/dracula.css";

export default function App({ Component, pageProps }) {
  const excludePathsList = ["/login", "/register"];

  return (
<<<<<<< HEAD
    <PagebloxProvider projectId="maX1fU1LnwiquM4vAPZy">
=======
    <PagebloxProvider
      projectId="maX1fU1LnwiquM4vAPZy"
      excludePaths={excludePathsList}
    >
>>>>>>> 251a861 (add login paths, and update npm package)
      <Component {...pageProps} />
    </PagebloxProvider>
  );
}
