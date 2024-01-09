const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const protectedRouter = require("./protectedRouter");
const authMiddleware = require("../middleware/authMiddleware");

router.use('/auth', authRouter)
router.use("/api", authMiddleware, protectedRouter);

module.exports = router