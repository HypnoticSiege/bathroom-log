import supabase from "../../../supabase";

const select = async (table: string, columns: string, where?: string) => {
    if (!where) {
        let { data, error } = await supabase
            .from(table)
            .select(columns);
        
        if (error) console.log(error);
        return data;
    } else {
        let { data, error } = await supabase
            .from(table)
            .select(columns)
            .eq('id', where);
        
        if (error) console.log(error);
        return data;
    }
};

export default select;