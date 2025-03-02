import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import Running from "../components/Running/Running.jsx";
import Services from "../components/Services/Services.jsx";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const router = createBrowserRouter([
    {
        path: "/",  
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "running-status",
                element: (
                    <SignedIn>
                        <Running />
                    </SignedIn>
                ),
            },
            {
                path: "sign-in",
                element: (
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                ),
            },
        ],
    },
]);

export default router;
