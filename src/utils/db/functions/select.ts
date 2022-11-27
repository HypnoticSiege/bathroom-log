import supabase from "../../../supabase";

const select = async (table: string, columns: string, where?: string) => {
    const { data, error } = await supabase
        .from(table)
        .select(columns);
    
    if (error) console.log(error);
    console.log(data);
    return data;
};

export default select;