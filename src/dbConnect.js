import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/admin`
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("test");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
