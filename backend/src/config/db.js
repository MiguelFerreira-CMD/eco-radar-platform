const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB conectado: ${conn.connection.host}`);
        console.log(`Database: ${conn.connection.name}`);

    } catch (err) {
        console.log("Erro ao conectar MongoDB:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;