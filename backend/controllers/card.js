import mongoose from "mongoose";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const changeCardOptions = async (req, res, next) => {
  const { cardId, userId, options } = req.body;
  try {
    const user = await User.findById(userId);
    const creditCardToEdit = user.creditCards.find(
      (card) => card._id == cardId
    );
    creditCardToEdit.options = {
      ...creditCardToEdit.options,
      ...options,
    };
    const result = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "creditCards.$[card].options": creditCardToEdit.options,
        },
      },
      {
        arrayFilters: [{ "card._id": mongoose.Types.ObjectId(cardId) }],
        new: true,
      }
    );

    res.status(200).json(result.creditCards);
  } catch (error) {
    console.log(error);
    next(createError(500, "Erro ao alterar opções do cartão"));
  }
};
