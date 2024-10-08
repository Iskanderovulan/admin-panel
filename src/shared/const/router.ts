export enum AppRoutes {
    MAIN = "main",
    LOGIN = "login",
    REGISTER = "register",
    NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteLogin = () => "/login";
export const getRouteRegister = () => "/register";
export const getRouteNotFound = () => "*";

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: getRouteMain(),
    [AppRoutes.LOGIN]: getRouteLogin(),
    [AppRoutes.REGISTER]: getRouteRegister(),
    [AppRoutes.NOT_FOUND]: getRouteNotFound(),
};
