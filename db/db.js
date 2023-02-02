import { Sequelize } from "sequelize";

// creamos la conexión a la db
const db=new Sequelize(
    'upsequelize',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        port:3306
    }
)

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default db