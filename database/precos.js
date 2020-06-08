db.preco.deleteMany({});
db.preco.insert([
  {
    "origem" : "011",
    "destino" : "016",
    "valorMinuto" : "1.90"
  },
  {
    "origem" : "016",
    "destino" : "011",
    "valorMinuto" : "2.90"
  },
  {
    "origem" : "011",
    "destino" : "017",
    "valorMinuto" : "1.70"
  },
  {
    "origem" : "017",
    "destino" : "011",
    "valorMinuto" : "2.70"
  },
  {
    "origem" : "011",
    "destino" : "018",
    "valorMinuto" : "0.90"
  },
  {
    "origem" : "018",
    "destino" : "011",
    "valorMinuto" : "1.90"
  },
]);