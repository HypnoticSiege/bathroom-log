import supabase from "../../../supabase"

const logoutUser = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) return false;
    return true;
};

export default logoutUser;