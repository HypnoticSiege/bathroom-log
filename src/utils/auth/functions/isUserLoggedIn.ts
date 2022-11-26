import supabase from "../../../supabase";

const isUserLoggedIn = async (req, res, next) => {
  const user = await supabase.auth.getUser(req.cookies['access_token']);

  if (user.data.user != null) {
    next();
  } else {
    res.redirect('/login');
  };
};

export default isUserLoggedIn;