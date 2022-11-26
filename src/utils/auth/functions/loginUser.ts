import supabase from "../../../supabase";

const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) return { user: null, session: null };
  return data;
};

export default loginUser;