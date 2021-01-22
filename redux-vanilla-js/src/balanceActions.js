const Types = {
  WITHDRAW_MONEY: "WITHDRAW_MONEY",
  ADD_MONEY: "ADD_MONEY",
  RESET_MONEY: "RESET_MONEY",
};

const addMoney = (amount) => ({
  type: Types.ADD_MONEY,
  payload: amount,
});

const withdrawMoney = (amount) => ({
  type: Types.WITHDRAW_MONEY,
  payload: amount,
});

const resetMoney = () => ({
  type: Types.RESET_MONEY,
});

// Without explicit return
const exampleExplicit = () => {
  return {
    type: "EXAMPLE",
  };
};

export { addMoney, withdrawMoney, Types, resetMoney };
