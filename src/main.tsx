import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider, theme } from "antd";
import { CategoryProvider } from "./provider/CategoryProvider.tsx";
import { NavBarProvider } from "./provider/NavBarProvider.tsx";
import { ToolsProvider } from "./provider/ToolsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ToolsProvider>
    <NavBarProvider>
      <CategoryProvider>
        <ConfigProvider
          theme={{
            // 1. Use dark algorithm
            algorithm: theme.darkAlgorithm,
            // 2. Combine dark algorithm and compact algorithm
            // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
          }}
        >
          <App />
        </ConfigProvider>
      </CategoryProvider>
    </NavBarProvider>
  </ToolsProvider>
  // </React.StrictMode>
);
