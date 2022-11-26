import supabase from "../../../supabase";

const setSession = async (refresh_token: string, access_token: string) => {
  const { data, error } = await supabase.auth.setSession({ refresh_token, access_token });
  
  if (error) return false;
  return data;
};

export default setSession;