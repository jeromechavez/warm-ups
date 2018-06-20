function createAccount() {

  const transactions = []

  return {
    deposit: (amount) => {
      transactions.push({type: 'deposit', amount: amount})
    },
    withdraw: (amount) => {
      transactions.push({type: 'withdrawal', amount: amount})
    },
    getBalance: () => {
      if (transactions.length === 0) {
        return 0
      }
      else {
        let balance = 0
        transactions.forEach(function (event) {
          if (event.type === 'deposit') {
            balance += event.amount
          }
          else if (event.type === 'withdrawal') {
            balance -= event.amount
          }
        })
        return balance
      }
    },
    getHistory: () => {
      if (transactions.length === 0) {
        return []
      }
      else {
        const newArray = transactions.map(a => Object.assign({}, a))
        return newArray
      }
    }
  }
}
