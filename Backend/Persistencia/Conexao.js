import mysql from 'mysql2/promise';

export default  async function conectar (){
    //Js possui escopo em memoria que
    //permite compartilhar variaveis em toda aplicação
    if(global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }
    global.poolConexoes = mysql.createPool({
        host:'129.146.68.51',
        porta:3306,
        database:'backendaluno6-ppiadsead',
        user:'aluno6-ppiadsead',
        password: 'V1FbagMvDpyE89jGcbFn',
        waitForConnections: true,
        connectionLimit:10,
        queueLimit: 0,
        idleTimeout: 60000,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0

    });

    return await global.poolConexoes.getConnection();
   
}

