import { lazy } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/app/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { menuItems } from "./constants/constants";
import Login from "./app/auth/Login";
const Dashboard = lazy(() => import("./app/dashboard/Dashboard"));
const ClientPostPage = lazy(() => import("@/app/client"));

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <Layout> */}
        <Routes>
          {/* {menuItems.map((menuItem) => (
              <Route
                key={menuItem.id}
                path={menuItem.path}
                element={<div>{menuItem.name}</div>}
              >
                {menuItem.children?.map((child) => (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<div>{child.name}</div>}
                  />
                ))}
              </Route>
            ))} */}
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="client" element={<ClientPostPage />} />
          </Route>
        </Routes>
        {/* </Layout> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;


