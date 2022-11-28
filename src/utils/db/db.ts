import select from "./functions/select";
import deleteRow from "./functions/delete";

const db = {
    select,
    delete: deleteRow,
}

export default db;