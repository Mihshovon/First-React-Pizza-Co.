import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

import Loader from "../ui/Loader";

export default function AppLayout() {
  const navigate = useNavigation();

  const isLoading = navigate.state === "loading";

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {isLoading && <Loader />}

      {/* Header */}
      <header className="flex-shrink-0">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        <h1 className="hidden">Content</h1>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0">
        <CartOverview />
      </footer>
    </div>
  );
}
