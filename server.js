import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv"
import userRoutes from "./Routes/userRoutes.js"
import mongooseConnect from "./mongooseSetting.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

mongooseConnect();

const app = express();

app.use(cors());
app.use(json()); // 解析 JSON 請求
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("🚀 Android 後端啟動成功！");
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`✅ 伺服器運行中： http://localhost:${PORT}`);
});

