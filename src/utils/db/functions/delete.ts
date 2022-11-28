import supabase from "../../../supabase";

type where = {
    id: string,
}
type DeleteOptions = {
    from: string,
    where?: where
};

const deleteRow = async (opts: DeleteOptions) => {
    if (!opts.where) {
        let { data, error } = await supabase
            .from(opts.from)
            .delete();
        
        if (error) console.log(error);
        return data;
    } else {
        let { data, error } = await supabase
            .from(opts.from)
            .delete()
            .eq('id', opts.where);
        
        if (error) console.log(error);
        return data;
    };
};

export default deleteRow;