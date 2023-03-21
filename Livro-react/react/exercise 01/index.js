import "./styles.css";

// Cria os elementos a
var elAHome = document.createElement("a");
var elALivros = document.createElement("a");
var elAAutores = document.createElement("a");

// Insere o atributo href e seu valor nos elmentos a
elAHome.setAttribute("href", "index.html");
elALivros.setAttribute("href", "livros.html");
elAAutores.setAttribute("href", "autores.html");

// Cria o texto para os elementos a
var textoHome = document.createTextNode("Home");
var textoLivros = document.createTextNode("Livros");
var textoAutores = document.createTextNode("Autores");

// Insere o texto dos elemento a
elAHome.appendChild(textoHome);
elALivros.appendChild(textoLivros);
elAAutores.appendChild(textoAutores);

// Cria os elementos li
var elLiHome = document.createElement("li");
var elLiLivros = document.createElement("li");
var elLiAutores = document.createElement("li");

// Cria o elemento ul
var elUl = document.createElement("ul");

// Insere os elementos li em um e os elementos a nos elementos li
elUl.appendChild(elLiHome).appendChild(elAHome);
elUl.appendChild(elLiLivros).appendChild(elALivros);
elUl.appendChild(elLiAutores).appendChild(elAAutores);

// Cria o elemento nav com o atributo class com valor menu
var elNav = document.createElement("nav");
elNav.setAttribute("class", "menu");

// Insere o elemento ul no elemento nav
elNav.appendChild(elUl);

// Insere o elemento nav dentro do div#root da marcação
var root = document.getElementById("root");
root.appendChild(elNav);