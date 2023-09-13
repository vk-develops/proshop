import bcrypt from "bcryptjs";


const users = [
    {
        name: "Admin User",
        email: "admin@proshop.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "John Doe",
        email: "Jhon@proshop.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Jane Doe",
        email: "Jane@proshop.com",
        password: bcrypt.hashSync("123456", 10),
    },
]

export default users;