import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const clerkPubKey = "pk_test_YXBwYXJlbnQtZG9yeS05LmNsZXJrLmFjY291bnRzLmRldiQ"; // Replace with actual key

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <StrictMode>
      {/* Protect the entire website */}
      <SignedIn>
        <RouterProvider router={router} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </StrictMode>
  </ClerkProvider>
);
