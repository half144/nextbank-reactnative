import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  console.log(token);
  if (!token) return next(createError(401, "Você não está autenticado"));
  try {
    const user = jwt.verify(token, "rafael123");
    req.user = user.user;
    next();
  } catch (error) {
    return next(createError(404, "Token inválido"));
  }
};
