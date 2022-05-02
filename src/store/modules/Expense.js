export default ({
  state: {
  expenses:[]
  },
  mutations: {
    addExpense(state, payload) {
      state.expenses.push(payload);
    },

    deleteExpense(state, payload) {
      state.expenses.splice(payload, 1);
    },

    setExpense(state, { index, expense }) {
      state.expenses[index] = expense;
    }
  },
  getters: {
    getExpenses: state => state.expenses
  }

});
