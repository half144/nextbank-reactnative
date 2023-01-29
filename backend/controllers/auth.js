import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import { userFunctions } from "../functions/userFunctions.js";

const createToken = (data) =>
  jwt.sign(data, "rafael123", {
    expiresIn: "4d",
  });

export const createUser = async (req, res, next) => {
  try {
    const hash = bcrypt.genSaltSync();
    const hashedPass = bcrypt.hashSync(req.body.password, hash);
    const newUser = new User({ ...req.body, password: hashedPass });
    const nameSplited = req.body.fullname.split(" ");
    newUser.name = `${nameSplited[0]} ${nameSplited[nameSplited.length - 1]}`;
    newUser.creditCards.push(
      userFunctions.generateCreditCard(),
      userFunctions.generateCreditCard(true)
    );
    newUser.pix = [...newUser.pix, Math.floor(Math.random() * 100000000000)];
    const savedUser = await newUser.save();
    res.status(200).json({
      id: savedUser._id,
      token: createToken({ fullname: savedUser.fullname }),
    });
  } catch (error) {
    console.log(error);
    next(createError(500, error));
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isCorrectPass = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrectPass) return next(createError(401, "Senha incorreta"));
    res.status(200).json({
      token: createToken({ fullname: user.fullname }),
      id: user._id,
    });
  } catch (error) {
    next(createError(500, "Erro ao logar usuário"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, "Usuário não encontrado"));
    res.status(200).json(user);
  } catch (error) {
    next(createError(500, "Erro ao buscar usuário"));
  }
};
