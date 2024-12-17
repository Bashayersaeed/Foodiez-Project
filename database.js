const mongoose= require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://bashayersaeed:GfI8saqBMM0ZiPJV@cluster0.xm4eu.mongodb.net/");
        console.log(`Mongo connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;