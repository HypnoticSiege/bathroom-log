import setSession from "./functions/setSession";
import loginUser from "./functions/loginUser";
import registerUser from "./functions/registerUser";
import isUserLoggedIn from "./functions/isUserLoggedIn";

const auth = {
    setSession,
    loginUser,
    registerUser,
    isUserLoggedIn
}

export default auth;