alert('Olá! Adicione números através da caixa de texto e depois veja as interações entre eles.')

function add() {
    var tnum = document.querySelector('input#txtnum')
    var res = document.querySelector('select#result')
    if (tnum.value.length == 0) {
        window.alert('Por favor, insira um número.')        
    } else {
        var num = Number(tnum.value)
        var box = [num]
        if ( 1 <= num <= 100) {
            var item = document.createElement('option')
            item.text = `Número ${num} adicionado.`
            res.appendChild(item)
            /*box.push(num)
            res.innerHTML = `${box}`*/
        } else {
            window.alert('Número inválido ou já adicionado, por favor, tente novamente.')
        }
    }
}

/* - criar um array alimentado pelo Input, com validação dos valores (entre 1 e 100 e não estar vazio)
- criar alertas
- adicionar oplções no select com os valores adicionados
- fazer cálculos

se tentar numero que já disse antes, ou numero maior que 100, ou caixa vazia, mensagem de erro (numero ja informado ou invalido)
ao adicionar outro numero apos exibir o resultado, deixar de exibir o resultado
se tentar exibir resultado sem ter informado nenhum numero, mensagem de erro (adicione numeros antes de analizar)
cada numero adicionado aparece escrito: numero X adicionado

Resultado:
Você adicionou X números (quantidade) no total
O maior número adicionado é X
O menor número adicionado é X
A soma de todos os números adicionados é X
A média de todoa os números adicionados é X*/