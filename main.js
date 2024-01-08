const form = document.getElementById('form-lista')
Nomes = []
Telefones = []
let linhas = ''


form.addEventListener('submit', function(e) {
    e.preventDefault()

adicionaLinha()
atualizaTabela()
})

function adicionaLinha() {
    const nomeListado = document.getElementById('nome-lista')
    const numeroListado = document.getElementById('numero-tel')

    if (Nomes.includes(nomeListado.value)) {
        alert(`${nomeListado.value} já foi listado`)
    } else {
        Nomes.push(nomeListado.value)
        Telefones.push(parseInt(numeroListado.value))

        let Linha = '<tr>'
        Linha += `<td>${nomeListado.value}</td>`
        Linha += `<td>${numeroListado.value}</td>`
        Linha += `</tr>`
        linhas += Linha

        nomeListado.value = ''
        numeroListado.value = ''
    }
}

function atualizaTabela() {
    const tabCorpo = document.querySelector('tbody')
    tabCorpo.innerHTML = linhas
}