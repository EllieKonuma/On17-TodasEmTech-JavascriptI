const books = [
  {
    isbn: "9781593275846",
    title: "Eloquent JavaScript, Second Edition",
    author: "Marijn Haverbeke",
    published: "2014-12-14T00:00:00.000Z",
  },
  {
    isbn: "9781449331818",
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    published: "2012-07-01T00:00:00.000Z",
  },
  {
    isbn: "9781449365035",
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    published: "2014-02-01T00:00:00.000Z",
  },
  {
    isbn: "9781491950296",
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    published: "2014-07-01T00:00:00.000Z",
  },
  {
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    published: "2016-09-03T00:00:00.000Z",
  },
  {
    isbn: "9781491904244",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    published: "2015-12-27T00:00:00.000Z",
  },
  {
    isbn: "9781449325862",
    title: "Git Pocket Guide",
    author: "Richard E. Silverman",
    published: "2013-08-02T00:00:00.000Z",
  },
  {
    isbn: "9781449337711",
    title: "Designing Evolvable Web APIs with ASP.NET",
    author: "Glenn Block, et al.",
    published: "2014-04-07T00:00:00.000Z",
  },
];

function exibirInformacoes(objeto) {
  const livrosFiltrados = objeto.map((item) => [
    `title:${item.title}`,
    `author:${item.author}`,
    `published:${item.published}`,
  ]);
  console.log(livrosFiltrados);
}
exibirInformacoes(books);
function removerObjeto(objeto) {
  const objetoremovido = objeto.splice(5, 1, {
    isbn: "9781788623872",
    title: "Learning JavaScript Data Structures and Algorithms",
    author: "Loiane Groner",
    published: "2018-04-26T00:00:00.000Z",
  });
  console.log(objeto);
}
removerObjeto(books);

// function mapeandoLivros(objeto) {
//   const livrosMapeados = objeto.map(({ title, author, published }) => {
//     return { title, author, published };
//   });
//   console.log(livrosMapeados);
// }
// mapeandoLivros(books);

// function removendoEsubstituindo(objeto) {
//   objeto.splice(5, 1, {
//     isbn: "9781788623872",
//     title: "Learning JavaScript Data Structures and Algorithms",
//     author: "Loiane Groner",
//     published: "2018-04-26T00:00:00.000Z",
//   });
//   return console.log(objeto);
// }
// removendoEsubstituindo(books);

// function formatandoData(objeto) {
//   objeto.forEach(({ published }) => {
//     data = published.replace("T00:00:00.000Z", "");
//     dataPtBr = data.split("-").reverse().join("/");
//     return console.log(dataPtBr);
//   });
// }
// formatandoData(books);
