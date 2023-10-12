const receitas = [
    {
        'titulo': 'Sorvete',
        'imagem': './src/imagens/pote de sorvete.jpg',
        'preparo': 'Em uma batedeira adicione as duas caixas de creme de leite e deixe batendo até dobrar de tamanho, alguns minutos depois, vai adicionando o leite condensado aos poucos, enquanto bate, depois adicione o sabor de sua preferência e deixe bater um pouco mais. Agora coloque o sorvete em uma vasilha e leve ao congelador, o sorvete estará pronto no dia seguinte.',
        'ingredientes': [
            'Um sabor de sua preferência (Toddy, pó de suco, etc.);',
            '2 caixas de creme de leite;',
            '1 caixa de leite condensado.',
        ]
    },
    {
        'titulo': 'Calda de Chocolate',
        'imagem': './src/imagens/cobertura de chocolate.jpg',
        'preparo': 'Em uma panela adicione todos os ingredientes (coloque o leite equivalente a metade da caixa do leite condensado), e leve ao fogo, enquanto cozinha, mexa para que a calda não queime. Continue mexendo por aproximadamente 15 minutos, por fim, deixe esfriando por um tempo e sua calda já estará pronta para adicionar ao seu bolo ou alguma outra comida de sua escolha.',
        'ingredientes': [
            '1 caixa de leite condensado;',
            '1 colher de sopa de manteiga;',
            'Leite;',
            'Cocolate em pó, ou em barra.',
        ]
    },
    {
        'titulo': 'Pudim de Maria Mole',
        'imagem': './src/imagens/pudim.jpg',
        'preparo': 'Dissolva o pó em água quente, coloque todos os ingredientes no liquidificador e bata bem. Coloque numa forma caramelizada ou untada com óleo e leve à geladeira, desenforme no dia seguinte, e pronto.',
        'ingredientes': [
            '1 caixa de creme de leite;',
            '1 caixa de leite condensado;',
            '1 xícara de leite;',
            '1 xícara de água fervente;',
            '1 pacote de pó de maria mole.',
        ]
    },
    {
        'titulo': 'Pamonha Frita',
        'imagem': './src/imagens/pamonha frita.jpg',
        'preparo': 'Rale os milhos, eles viram uma massa depois de ralado, depois adicione o tempero, misture e deixe descansar por 1hr. Em uma frigideira antiaderente, adicione 4 colheres de óleo, coloque uma colher bem cheia de pamonha e espalhe com um garfo ou uma colher, frite de um lado e de outro como se fosse um bife. Pronto, sua pamonha frita ficará como se fosse panqueca.',
        'ingredientes': [
            '12 espigas de milho verde (milho mole fica ressecado);',
            '1/2 colher de sopa de tempero (alho e sal).',
        ]
    },
    {
        'titulo': 'Bolinho de Arroz',
        'imagem': './src/imagens/bolinho de arroz.jpg',
        'preparo': 'Em um recipiente, misture todos os ingredientes até criar uma massa firme e encorpada.Molde os bolinhos e frite-os no óleo quente, até que fiquem dourados.Escorra sobre papel absorvente, espere esfriar e aproveite.',
        'ingredientes': [
            '2 xícaras (chá) de arroz cozido;',
            '1/2 xícara (chá) de leite;',
            '1 colher (sopa) de fermento em pó;',
            '1/2 xícara (chá) de farinha de trigo;',
            'óleo para fritar;',
            '1/2 xícara (chá) de queijo ralado;',
            '2 colheres (sopa) de cheiro-verde picado;',
            '1/2 xícara (chá) de amido de milho;',
            '3 ovos.',
        ]
    },
    {
        'titulo': 'Salpicão',
        'imagem': './src/imagens/salpicao.jpg',
        'preparo': 'Misture todos os ingredientes, menos a batata palha. Depois de tudo misturado, forre com a batata palha. Depois e só servir.',
        'ingredientes': [
            '500 g de peito de frango cozido e desfiado;',
            '1 lata de ervilha;',
            '200 g de uva passa (opcional);',
            'maionese a gosto;',
            'batata palha a gosto;',
            '2 cenouras grandes raladas;',
            '1 lata de milho verde;',
            '1 maçã;',
            'cheiro-verde a gosto.',
        ]
    },
];

getListaIngrediente = (receita) => {
    let listaIngrediente = receita.ingredientes.map(function(ingrediente) {
        return '<li>' + ingrediente + '</li>';
    }).join('');

    let lista = '<ul>' + listaIngrediente + '</ul>';
    return lista;
};

//getListaIngrediente(receitas[0]);

getCard = (receita) => {
    let titulo = document.createElement('h5')
    titulo.classList.add('card-title')
    titulo.textContent = receita.titulo

    let novaDiv = document.createElement('div');
    novaDiv.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = receita.imagem;

    let divBody = document.createElement('div');
    divBody.classList.add('card-body');

    let divIngrediente = document.createElement('div');
    divIngrediente.classList.add('card-text');
    divIngrediente.innerHTML = getListaIngrediente(receita);

    let separadorHr = document.createElement('hr');

    let preparoText = document.createElement('p');
    preparoText.textContent = receita.preparo;

    divBody.appendChild(titulo);
    divBody.appendChild(divIngrediente);

    novaDiv.appendChild(img);
    novaDiv.appendChild(divBody);
    novaDiv.appendChild(separadorHr);
    novaDiv.appendChild(preparoText);

    return novaDiv;
};

//on load
preencheCatalogo = () => {
    let catalogo = document.getElementById('pnlCatalogo');

    let paineisReceita = receitas.map(function(receita) {
        return getCard(receita);
    }).reduce(function(texto, cardHTML) {
        return texto + cardHTML.outerHTML;
    }, '');
    
    catalogo.innerHTML = paineisReceita
};

preencheCatalogo()