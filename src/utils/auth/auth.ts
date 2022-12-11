import setSession from "./functions/setSession";
import loginUser from "./functions/loginUser";
import logoutUser from "./functions/logoutUser";
import middleware from "./functions/middleware";
import registerUser from "./functions/registerUser";
import isUserLoggedIn from "./functions/isUserLoggedIn";

const auth = {
    setSession,
    loginUser,
    logoutUser,
    middleware,
    registerUser,
    isUserLoggedIn
}

export default auth;