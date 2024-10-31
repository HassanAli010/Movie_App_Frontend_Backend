const mongoose = require("mongoose");
const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        if(connection.STATES.connecting) console.log("Database connecting.....");
        if(connection.STATES.connected) console.log("Database connection successfully");
        if(connection.STATES.disconnected) console.log("Database does not connection successfully");
    } catch (error) {
            console.log(error.message);
    }
}

module.exports = {connectDB};