const db = [
  {
    name : 'John',
    surname : 'Doe',
    email : 'johndoe@gmail.com',
    id : '220110134'
  },
  {
    name : 'Alessia',
    surname : 'Ciccarello',
    email : 'alessiaciccarello@gmail.com',
    id : '200110134'
  },
  {
    name : 'Ciccio',
    surname : 'Belo',
    email : 'cicciobelo@gmail.com',
    id : '129385678'
  },
  {
    name : 'Santo',
    surname : 'Terranova',
    email : 'santoterranova@gmail.com',
    id : '098765432'
  },
  {
    name : 'Damiano',
    surname : 'Pulvirenti',
    email : 'damianopulvirenti@gmail.com',
    id : '567890123'
  },
  {
    name : 'Enrico',
    surname : 'Bruno',
    email : 'enricobruno@gmail.com',
    id : '123456789'
  },
];

/**
 * 
 * @param id ID of user to find
 * @returns User object {name, surname, email, id}
 */
const getStudent = (id: Number) => {
    let user = db.find(user => user.id == id as unknown as string);

    return user;
};

const getAllStudents = () => {
    return db;
};

const utils = {
    getStudent,
    getAllStudents
};

export default utils;