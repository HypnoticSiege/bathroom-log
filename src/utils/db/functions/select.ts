import supabase from "../../../supabase";

const select = async (table: string, columns: string, where: string) => {
    const { data, error } = await supabase
        .from(table)
        .select(columns)
        .eq("id", where);
    if (error) throw error;
    return data;
};

export default select;