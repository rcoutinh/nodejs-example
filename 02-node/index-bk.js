/*
0 Obter um usuario
1 Obter o numero de telefone de um uaurio a partir de sei ID
2 Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
    // quando der algum problema -> reject(ERRO)
    // quando sucess -> resolv
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    }) 
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: '1199002',
            ddd: '11'
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback (null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

// obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 === false
//     if (error) {
//         console.error('DEU RUIM em USUARIO', error)
//         return;
//     }
//     obterTelefone(usuario.id, function(error1, telefone) {
//         if (error1) {
//             console.error('DEU RUIM em TELEFONE', error1)
//             return;
//         }
//         obterEndereco(usuario.id, function (error2, endereco) {
//             if (error2) {
//                 console.error('DEU RUIM em ENDERECO', error1)
//                 return;
//             }

//             console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua},${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })
// })
// const telefone = obterTelefone(usuario.id)
// const endereco = obterEndereco(usuario.id)

// console.log('telefone', telefone)