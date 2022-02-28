var carta1 = {
  nome: "Luffy",
  imagem:
    "https://mugiwarasoficial.com/wp-content/uploads/2021/07/One-Piece-Monkey-D-Luffy-.jpg",
  atributos: {
    Força: 135,
    Velocidade: 100,
    Inteligencia: 35
  }
};
var carta2 = {
  nome: "Zoro",
  imagem:
    "https://www.einerd.com.br/wp-content/uploads/2021/09/one-piece-roronoa-zoro-e1630498651347-890x464.jpg",
  atributos: {
    Força: 150,
    Velocidade: 130,
    Inteligencia: 40
  }
};
var carta3 = {
  nome: "Sanji",
  imagem:
    "https://media.comicbook.com/2021/06/one-piece-wano-sanji-cosplay-1273359.jpeg?auto=webp",
  atributos: {
    Força: 90,
    Velocidade: 145,
    Inteligencia: 80
  }
};
var carta4 = {
  nome: "Nami",
  imagem:
    "https://sm.ign.com/ign_br/screenshot/default/nami-one-piece-wano_k5uy.jpg",
  atributos: {
    Força: 30,
    Velocidade: 40,
    Inteligencia: 150
  }
};
var carta5 = {
  nome: "Ussop",
  imagem: "https://pbs.twimg.com/media/EfUGuBdWAAATVc9.png",
  atributos: {
    Força: 10,
    Velocidade: 20,
    Inteligencia: 150
  }
};
var carta6 = {
  nome: "Choper",
  imagem:
    "https://geekdama.com.br/wp-content/uploads/2020/11/one-piece-chopper-wano-postcover-800x450.jpg",
  atributos: {
    Força: 80,
    Velocidade: 100,
    Inteligencia: 130
  }
};
var carta7 = {
  nome: "Robin",
  imagem:
    "https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/08/Nico-Robin-One-Piece.jpg",
  atributos: {
    Força: 60,
    Velocidade: 50,
    Inteligencia: 150
  }
};
var carta8 = {
  nome: "Franky",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2021/07/Franky.jpg",
  atributos: {
    Força: 110,
    Velocidade: 50,
    Inteligencia: 110
  }
};
var carta9 = {
  nome: "Brook",
  imagem:
    "https://i.pinimg.com/originals/7e/12/4c/7e124c0fca7a319d03d0a79b66e4e71a.jpg",
  atributos: {
    Força: 70,
    Velocidade: 150,
    Inteligencia: 80
  }
};
var carta10 = {
  nome: "Jimbei",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2020/04/jinbe-1.jpg",
  atributos: {
    Força: 150,
    Velocidade: 10,
    Inteligencia: 110
  }
};
var carta11 = {
  nome: "Yamato",
  imagem:
    "https://geekdama.com.br/wp-content/uploads/2020/10/one-piece-fanart-yamato-cores-oficiais-amanomoon-postcover-800x450.jpg",
  atributos: {
    Força: 150,
    Velocidade: 135,
    Inteligencia: 60
  }
};
var carta12 = {
  nome: "Carrot",
  imagem:
    "https://onepieceex.net/wp-content/uploads/2017/12/Carrot-Revevrie1.jpg.webp",
  atributos: {
    Força: 70,
    Velocidade: 150,
    Inteligencia: 75
  }
};
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 11);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 11);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 11);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
