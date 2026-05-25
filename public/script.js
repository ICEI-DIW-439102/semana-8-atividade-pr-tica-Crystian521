const catalogo = [
  { id: 1, titulo: "O Senhor dos Anéis", tipo: "filme", ano: 2001, generos: ["fantasia", "aventura"], nota: 9.5, assistido: true },
  { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["drama", "crime"], nota: 9.8, assistido: true },
  { id: 3, titulo: "Titanic", tipo: "filme", ano: 1997, generos: ["romance"], nota: 7.8, assistido: false },
  { id: 4, titulo: "Stranger Things", tipo: "serie", ano: 2016, generos: ["ficção científica", "terror"], nota: 8.7, assistido: true },
  { id: 5, titulo: "Matrix", tipo: "filme", ano: 1999, generos: ["ação", "ficção científica"], nota: 8.7, assistido: false },
  { id: 6, titulo: "The Office", tipo: "serie", ano: 2005, generos: ["comédia"], nota: 8.9, assistido: true },
  { id: 7, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["ficção científica", "aventura", "drama"], nota: 8.6, assistido: false },
  { id: 8, titulo: "La Casa de Papel", tipo: "serie", ano: 2017, generos: ["crime", "drama"], nota: 8.2, assistido: true }
];

console.log(catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item não possui um segundo gênero.");
}

console.log("--- Listagem de todos os títulos ---");
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Quantidade de itens não assistidos:", naoAssistidos.length);

const itemComNotaAlta = catalogo.find(item => item.nota >= 9);
if (itemComNotaAlta) {
  console.log(`Primeiro item com nota >= 9: ${itemComNotaAlta.titulo} - Nota: ${itemComNotaAlta.nota}`);
} else {
  console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

const somaNotas = catalogo.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;
console.log("Média geral das notas:", mediaGeral.toFixed(2));

const assistidos = catalogo.filter(item => item.assistido === true);
const somaNotasAssistidos = assistidos.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaAssistidos = somaNotasAssistidos / assistidos.length;
console.log("Média das notas dos assistidos:", mediaAssistidos.toFixed(2));

const temItemAntigoAntes2000 = catalogo.some(item => item.ano < 2000);
console.log("Existe algum item com ano < 2000?", temItemAntigoAntes2000);

const todosTemGenero = catalogo.every(item => item.generos.length >= 1);
console.log("Todos os itens têm pelo menos 1 gênero?", todosTemGenero);

const totalItens = catalogo.length;
const quantidadeFilmes = catalogo.filter(item => item.tipo === "filme").length;
const quantidadeSeries = catalogo.filter(item => item.tipo === "serie").length;
const quantidadeNaoAssistidos = naoAssistidos.length;

const copiaOrdenada = [...catalogo];
copiaOrdenada.sort((a, b) => b.nota - a.nota);
const top3 = copiaOrdenada.slice(0, 3);

const rankingHTML = top3.map((item, index) => `<p>🏆 ${index + 1}. ${item.titulo} — Nota: ${item.nota}</p>`).join("");

const output = document.getElementById("output");
output.innerHTML = `
  <h2> Resumo do Catálogo</h2>
  <p> Total de itens: <strong>${totalItens}</strong></p>
  <p> Filmes: <strong>${quantidadeFilmes}</strong> &nbsp;|&nbsp; 📺 Séries: <strong>${quantidadeSeries}</strong></p>
  <p> Não assistidos: <strong>${quantidadeNaoAssistidos}</strong></p>
  <p> Média geral das notas: <strong>${mediaGeral.toFixed(2)}</strong></p>
  <h3> Top 3 maiores notas:</h3>
  ${rankingHTML}
`;