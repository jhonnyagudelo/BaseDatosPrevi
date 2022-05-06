//import * as fs from 'fs';

const fs = require('fs');

export const exportacionCredencial = async (nombre, datos) => {
  //const file = path.join(__dirname, '..', 'storage/credencial/p.txt');
  try {
    return fs.writeFileSync(`./src/storage/credencial/${nombre}`, datos);
  } catch (e) {
    console.log('no exporto la info: ', e);
  }
};
