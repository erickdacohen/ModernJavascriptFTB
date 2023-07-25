class Wallet {
	#balance = 0
	#transactions = []

	deposit(amount) {
		this.#processDeposit(amount)
		this.#balance += amount
	}

	withdraw(amount) {
		if (amount > this.#balance) {
			console.log('Insufficient funds')
			return
		}
		this.#processWithdraw(amount)
		this.#balance -= amount
	}

	#processDeposit(amount) {
		console.log(`depositing: ${amount}`)
		this.#transactions.push({
			type: 'deposit',
			amount,
		})
	}

	#processWithdraw(amount) {
		console.log(`withdrawing: ${amount}`)
		this.#transactions.push({
			type: 'withdraw',
			amount,
		})
	}

	get balance() {
		return this.#balance
	}

	get transactions() {
		return this.#transactions
	}
}

const wallet = new Wallet()
// console.log(wallet.#balance)
wallet.deposit(500)
wallet.withdraw(100)
console.log(wallet.balance)
