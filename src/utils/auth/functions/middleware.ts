import supabase from "../../../supabase";

const middleware = async (req: any, res: any, next: any) => {
    const user = await supabase.auth.getUser(req.cookies['supabase-auth-token']);
    req.user = user || null;
    res.locals.user = user || null;
    
    next();
};

export default middleware;