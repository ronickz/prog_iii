//promise permite el await??????????????

import mysql2 from "mysql2/promise"
import environments from "../config/environments.js"

const { database } = environments;

//pool de conexiones


//averiguar que hace
const conn = mysql2.createPool({
    host:database.host,
    database: database.name,
    user: database.user,
    password: database.password
})



export default conn;
