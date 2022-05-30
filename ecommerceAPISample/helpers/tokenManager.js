const jwt = require("jsonwebtoken");
const { privateJWTKey } = require("../config/environments");

const tokenManager = {
    control: (req, res, next) => {
        try {
            const bearerHeader = req.headers["authorization"];
            if (bearerHeader) {
                const bearer = bearerHeader.split(" ");
                const bearerToken = bearer[1];
                const decoded = jwt.verify(bearerToken, privateJWTKey);
                if (decoded) {
                   next();
                }
            }
            else {
                res.json({
                    status: 401,
                    success: false,
                    message: "Token is not valid",
                });
            }
        } catch (error) {
            if (error.message === "invalid signature") {
                res.json({
                    status: 401,
                    success: false,
                    message: "Token is not valid",
                });
            } else if (error.message === "jwt expired") {
                res.json({ status: 400, success: false, message: "Token is expired" });
            } else {
                console.log("token_manager/control()", error);
                res.json({ status: 500, message: "Server Error" });
            }
        }
    },
};

module.exports = {
    tokenManager,
};