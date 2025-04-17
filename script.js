// 1. VARIÁVEIS
let nome = "João"; // Armazena um texto
const idade = 30;  // Constante, valor não muda
var linguagem = "JavaScript"; // var é mais antiga, ainda funciona

// 2. CONDICIONAIS (if, else)
if (idade >= 18) {
  console.log(nome + " é maior de idade.");
} else {
  console.log(nome + " é menor de idade.");
}

// 3. FUNÇÕES
function saudacao(nomeUsuario) {
  return "Olá, " + nomeUsuario + "!";
}
console.log(saudacao("Maria")); // Chama a função e mostra no console

// 4. ARRAYS (listas)
let linguagens = ["HTML", "CSS", "JavaScript"];
console.log(linguagens[0]); // Acessa o primeiro item do array

// 5. OBJETOS
let pessoa = {
  nome: "Lucas",
  idade: 25,
  saudacao: function () {
    return "Olá, meu nome é " + this.nome;
  }
};
console.log(pessoa.saudacao()); // Chama a função do objeto

// 6. LOOP (laço de repetição)
for (let i = 0; i < linguagens.length; i++) {
  console.log("Linguagem: " + linguagens[i]); // Mostra cada item do array
}

// 7. EVENTOS (interatividade com HTML)
// Suponha que exista um botão com id="btn"
document.getElementById("btn").addEventListener("click", function () {
  alert("Você clicou no botão!"); // Mostra uma caixa de alerta
});

// 8. MANIPULAÇÃO DO DOM (Document Object Model)
// Suponha que exista um parágrafo com id="mensagem"
function mudarTexto() {
  document.getElementById("mensagem").innerText = "Texto alterado com sucesso!";
}

// 9. FUNÇÃO ANÔNIMA
let dobrar = function (n) {
  return n * 2;
};
console.log(dobrar(5)); // Resultado: 10

// 10. FUNÇÃO ARROW (moderna)
let triplo = (n) => n * 3;
console.log(triplo(3)); // Resultado: 9

// 11. TEMPLATE STRING (forma moderna de concatenar)
let msg = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(msg);

// 12. TRATAMENTO DE ERROS
try {
  let resultado = 10 / 0;
  if (!isFinite(resultado)) throw "Divisão por zero!";
  console.log(resultado);
} catch (erro) {
  console.error("Erro: " + erro);
}

// 13. JSON (troca de dados em formato texto)
let dados = { nome: "Ana", idade: 20 };
let textoJSON = JSON.stringify(dados); // Converte objeto em string JSON
console.log(textoJSON);

let objConvertido = JSON.parse(textoJSON); // Converte de volta em objeto
console.log(objConvertido.nome);
