// requires
const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${(base * i)}\n`);
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log('=============================================='.red);
    console.log(`======Tabla del ${base} hasta ${limite}=======`.red);
    console.log('=============================================='.red);
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${(base * i)}\n`);
    };
    console.log(data);
}

module.exports = {
    crearArchivo,
    listarTabla
}