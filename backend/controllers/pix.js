import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { userFunctions } from "../functions/userFunctions.js";

const { appendExtract, addMoney, removeMoney } = userFunctions;

const pixServices = {
  pixTransition: async (from, to, ammount) => {
    try {
      appendExtract({
        user: from,
        type: "Pix",
        ammount,
        from: to,
        plus: false,
      });
      appendExtract({
        user: to,
        type: "Pix",
        ammount,
        from: from,
      });

      removeMoney(from, ammount);
      addMoney(to, ammount);

      from.markModified("extract");
      to.markModified("extract");

      await from.save();
      await to.save();
    } catch (error) {
      throw createError(500, "Erro ao realizar transição");
    }
  },
  createPix: (user, pix) => {
    user.pix = [...user.pix, pix];
    user.save();
  },
};

export const createPix = async (req, res, next) => {
  const { pix } = req.body;
  try {
    const user = await User.findOne({ email: req.user.email });
    pixServices.createPix(user, pix);
    res.status(200).json(user);
  } catch (error) {
    next(createError(500, "Erro ao criar pix"));
  }
};

export const sendPix = async (req, res, next) => {
  const { from, to, ammount } = req.body;
  try {
    const fromUser = await User.findOne({ pix: from });
    const toUser = await User.findOne({ pix: to });

    if (fromUser.ammount < ammount) {
      return next(createError(403, "Saldo insuficiente"));
    }

    await pixServices.pixTransition(fromUser, toUser, ammount);

    const resumeTransition = {
      from: fromUser.name,
      to: toUser.name,
      ammount,
      date: new Date(),
    };

    res.json(resumeTransition);
  } catch (error) {
    next(error);
  }
};
