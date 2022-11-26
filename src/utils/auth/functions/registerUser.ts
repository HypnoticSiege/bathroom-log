import supabase from "../../../supabase";

const registerUser = async (name: string, email: string, password: string, subscribed: boolean) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        subscribed: subscribed
      }
    }
  });

  if (error) {
    console.log(error);
    return false;
  }

  return data;
};

export default registerUser;