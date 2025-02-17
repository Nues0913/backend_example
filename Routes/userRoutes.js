import express, { Router, json } from "express";
const router = Router();
import User from "../models/User.js";

// 註冊 API
router.post("/register", async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: "註冊成功", user: newUser });
        // console.log({ message: "註冊成功", user: newUser });
    } catch (error) {
        res.status(500).json({ error: "註冊失敗" });
        console.log(error);
    }
});

// 登入 API
// router.post("/login", async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await findOne({ username, password });
//         if (user) {
//             res.json({ message: "登入成功", user });
//         } else {
//             res.status(401).json({ error: "帳號或密碼錯誤" });
//         }
//     } catch (error) {
//         res.status(500).json({ error: "登入失敗" });
//     }
// });

// 測試用 - 獲取所有用戶
// router.get("/users", async (req, res) => {
//     const users = await find();
//     res.json(users);
// });

export default router;
