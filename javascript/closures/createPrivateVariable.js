function createAccount() {
  let balance = 1000;

  return {
    deposite(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createAccount();

console.log();
