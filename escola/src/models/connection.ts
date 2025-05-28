import mongoose from "mongoose";

// A URI do banco de dados MongoDB
const uri = "mongodb://127.0.0.1:27017/bdaula";

export default function connect() {
  // Configura manipuladores de eventos para diferentes estados de conexão
  mongoose.connection.on("connected", () => {
    console.log("Conectado ao MongoDB");
  });

  mongoose.connection.on("open", () => {
    console.log("Conexão aberta com o MongoDB");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Desconectado do MongoDB");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("Reconectado ao MongoDB");
  });

  mongoose.connection.on("disconnecting", () => {
    console.log("Desconectando do MongoDB");
  });

  mongoose.connection.on("close", () => {
    console.log("Conexão fechada com o MongoDB");
  });

  // Utiliza o método connect do Mongoose para estabelecer a conexão com o MongoDB
  mongoose
    .connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout de 5 segundos para escolher o servidor
      maxPoolSize: 10, // Limite de conexões simultâneas ao banco
    })
    .then(() => {
      console.log("Conectado ao MongoDB com sucesso");
    })
    .catch((e) => {
      console.error("Erro ao conectar ao MongoDB:", e.message);
      process.exit(1); // Encerra a aplicação em caso de erro de conexão
    });

  // Lidar com o fechamento do processo
  process.on("SIGINT", async () => {
    try {
      console.log("Fechando a conexão com o MongoDB...");
      await mongoose.connection.close();
      process.exit(0); // Finaliza o processo com sucesso
    } catch (error) {
      console.error("Erro ao fechar a conexão com o MongoDB:", error);
      process.exit(1); // Finaliza o processo com erro
    }
  });
}
