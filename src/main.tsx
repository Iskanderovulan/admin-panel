import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App as AntApp } from "antd";
import { ThemeProvider } from "@app/providers/theme/ThemeProvider/index.ts";
import { AntdThemeProvider } from "@app/providers/theme/AntdThemeProvider/index.ts";
import { CollapseProvider } from "@app/providers/CollapseProvider";
import App from "@app/App";
import { store } from "@app/store/store.ts";
import { ErrorBoundary } from "@app/providers/ErrorBoundary";
import "./shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider>
                <AntdThemeProvider>
                    <AntApp>
                        <ErrorBoundary>
                            <CollapseProvider>
                                <App />
                            </CollapseProvider>
                        </ErrorBoundary>
                    </AntApp>
                </AntdThemeProvider>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>,
);
