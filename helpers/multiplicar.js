const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5,listar = false, hasta=10) => {
    try{
    
    let salida = '';
    let consola = '';

    for(let i=1; i<=hasta; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`;
    }
    // Si se pasa el comando node app --b 6 --l por consola listarta la tabla 
    if(listar === true){
        console.log('================='.green);
        console.log('Tabla del:'.green,colors.blue(base));
        console.log('================='.green);

        console.log(consola);
    }

    //Crea el archivo
    fs.writeFileSync(`./salida/tabla-${base}.txt` ,salida);

    return `tabla-${base}.txt`;

    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}