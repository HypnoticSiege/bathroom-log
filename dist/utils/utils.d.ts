declare const utils: {
    getStudent: (id: Number) => {
        name: string;
        surname: string;
        email: string;
        id: string;
    };
    getAllStudents: () => {
        name: string;
        surname: string;
        email: string;
        id: string;
    }[];
};
export default utils;
