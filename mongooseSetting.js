import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "" 

export default () => { mongoose.connect(MONGO_URI)
                    .then(() => console.log("✅ 成功連接 MongoDB"))
                    .catch(err => console.error("❌ MongoDB 連接失敗", err))};