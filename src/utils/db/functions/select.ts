import supabase from "../../../supabase";

type where = {
    id: string,
}
type SelectOptions = {
    from: string,
    select: string,
    where?: where
};

const select = async (opts:SelectOptions) => {
    if (!opts.where) {
        let { data, error } = await supabase
            .from(opts.from)
            .select(opts.select);
        
        if (error) console.log(error);
        return data;
    } else {
        let { data, error } = await supabase
            .from(opts.from)
            .select(opts.select)
            .eq('id', opts.where);
        
        if (error) console.log(error);
        return data;
    };
};

export default select;