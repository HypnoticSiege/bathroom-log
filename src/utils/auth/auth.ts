import setSession from "./functions/setSession";
import loginUser from "./functions/loginUser";
import logoutUser from "./functions/logoutUser";
import registerUser from "./functions/registerUser";
import isUserLoggedIn from "./functions/isUserLoggedIn";

const auth = {
    setSession,
    loginUser,
    logoutUser,
    registerUser,
    isUserLoggedIn
}

export default auth;