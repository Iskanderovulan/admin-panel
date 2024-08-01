import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
    MAIN = "main",
    // ABOUT = 'about',
    // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    // [AppRoutes.ABOUT]: '/about',
    // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
};