let config = {
    "name": "aula03sdmanha1503",
    "version": "1.0.0",
    "description": "Um teste de aula",
    "main": "main.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/higoviana/Aula03SDManha1503.git"
    },
    "author": "Marcelo",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/higoviana/Aula03SDManha1503/issues"
    },
    "homepage": "https://github.com/higoviana/Aula03SDManha1503#readme",
    "dependencies": {
      "pdfjs": "^2.4.7"
    }
  }
  
  console.log(config);
  
  let texto = '{ "nome": "ANA", "idade": 5 }';
  console.log(texto);
  
  let obj = JSON.parse(texto)
  console.log(obj.nome);
  
  let texto2 = JSON.stringify(config);
  console.log(texto2);
  
  let acdc = JSON.parse('{"batchcomplete":"","continue":{"gsroffset":5,"continue":"gsroffset||"},"query":{"pages":{"11400":{"pageid":11400,"ns":0,"title":"1980","index":3},"55022":{"pageid":55022,"ns":0,"title":"AC/DC","index":1},"3476487":{"pageid":3476487,"ns":0,"title":"ACDC Lane","index":2},"1984437":{"pageid":1984437,"ns":0,"title":"Fly on the Wall","index":4},"5935066":{"pageid":5935066,"ns":0,"title":"Mundo C\u00e3o (banda)","index":5}}}}')
  
  console.log(acdc.query.pages);