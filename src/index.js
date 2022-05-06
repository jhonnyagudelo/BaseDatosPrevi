import '@babel/polyfill';
import app from './app';
import configEnvi from './config';
import { sequelize } from './database/database';

async function main() {
  await app.listen(3000, async () => {
    // create models
    // force true : DROP TABLES
    await sequelize.sync({ force: false });
    //  await createRoles();
    //  await createUsers();
  });
}

main()
  .then(() => console.log(`Listen in port http://${configEnvi.host}:${configEnvi.port}`))
  .then((err) => console.log(err));