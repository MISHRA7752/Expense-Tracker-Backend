const { addExpense, getExpense, deleteExpense, addBulkExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome} = require('../controllers/income');
const { addNewLimit, getLimit, deleteLimit } = require('../controllers/limit');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .post('/add-limit', addNewLimit)
    .post('/add-bulk', addBulkExpense)
    .get('/get-limit', getLimit)
    .post('/delete-limit', deleteLimit)
    .post('/edit-limit', deleteLimit)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router