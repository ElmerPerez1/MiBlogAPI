const mongoose = require("mongoose");

const conexion = async () => {
    try {
        const uri = "mongodb://localhost:27017/MiBlog"; // host en minúsculas por consistencia
        await mongoose.connect(uri, {
            // useNewUrlParser y useUnifiedTopology ya vienen por defecto en versiones recientes
            serverSelectionTimeoutMS: 5000,
        });
        console.log("[DB] Conectado correctamente a la base de datos MiBlog");
    } catch (error) {
        console.error("[DB] Error de conexión:", error.message);
        // Asegura que se lanza un objeto Error válido
        throw new Error("No se ha podido conectar a la base de datos");
    }
};

module.exports = {
    conexion,
};