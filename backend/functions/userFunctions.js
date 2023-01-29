import Card from "../models/Card.js";

export const userFunctions = {
  generateCreditCard: (isVirtual = false) => {
    const bin = 433256;
    const lastDigits = Math.floor(Math.random() * 10000000000);
    const cvv = Math.floor(Math.random() * 999);
    const expirationMouth = Math.floor(Math.random() * 12);
    const expirationDate = new Date(2029, expirationMouth)
      .toLocaleDateString({
        year: "numeric",
        month: "2-digit",
      })
      .split("/");
    const cardNumber = `${bin}${lastDigits}`;
    const creditCard = new Card({
      cardNumber,
      expires: `${expirationDate[1]}|${expirationDate[2]}`,
      cvv,
      isVirtual,
      options: { blocked: false, contactless: true, international: true },
    });
    return creditCard;
  },
  createExtract: (type, ammount, from = null, plus = true) => {
    const extract = {
      type,
      ammount,
      from: from.name,
      plus,
      date: new Date().toLocaleDateString("pt-BR"),
    };
    return extract;
  },
  addToExtract: async (user, extract) => {
    try {
      const today = new Date().toLocaleDateString("pt-BR");
      const lastExtract = user.extract[0];

      const isExtractFromToday = () => lastExtract && lastExtract.date == today;

      if (isExtractFromToday()) {
        lastExtract.items = [extract, ...lastExtract.items];
        return;
      }

      user.extract = [{ date: today, items: [extract] }, ...user.extract];
    } catch (error) {
      console.log(error);
    }
  },
  appendExtract: ({ user, type, ammount, from, plus }) => {
    const extract = userFunctions.createExtract(type, ammount, from, plus);
    userFunctions.addToExtract(user, extract);
  },
  addMoney: async (user, ammount) => {
    user.ammount = Number(user.ammount) + Number(ammount);
  },
  removeMoney: async (user, ammount) => {
    user.ammount = Number(user.ammount) - Number(ammount);
  },
};
