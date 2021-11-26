
// tem que importar o firebase na página antes
// exemplo de função buscando do banco, só mudar o conteúdo do ref() e os campos
firebase.database().ref('/Cardapio')
    .orderByChild('categoria').equalTo('bebida')
    .on('value', (snapshot) => {
        const list = []
        snapshot.forEach((childItem) => {
            list.push({
                // mudar esses campos pros campos do banco
                key: childItem.key,
                nome: childItem.val().nome,
                descricao: childItem.val().descricao,
                valor: childItem.val().valor,
                status: childItem.val().status,
                imagem: childItem.val().imagem
            })
        })
        // função que vai rodar dps que puxar do banco
        setListBebidas(list)
    })

// exemplo de função criando um registro no banco
const definirComanda = firebase.database().ref('/Comandas')
    .orderByChild('usuario').equalTo(user.uid)
    .on('value', (snapshot) => {
        snapshot.forEach((childItem) => {
            list.push({
                // mudar esses campos pros campos do banco
                key: childItem.key,
                data: childItem.val().data,
                usuario: childItem.val().usuario,
            })
        })
        // função que vai rodar dps que criar no banco
        setComanda(list)
    })