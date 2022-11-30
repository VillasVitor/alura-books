let livros = []

const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

async function getBuscarLivrosApi(){
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
    
}
getBuscarLivrosApi()

