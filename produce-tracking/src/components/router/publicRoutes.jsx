import LoginPage from "../authorization/LoginPage";
import RegistrationPage from "../authorization/RegistrationPage";

export const publicRoutes = [
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/register",
        Component: RegistrationPage,
    },
];