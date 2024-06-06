const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date}  = req.body
    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}

exports.addBulkExpense = async (req, res) => {
    const { bulkIncome }  = req.body
    try {
        //validationsç
        for (let income of bulkIncome) {
            if(!income.title || !income.category || !income.description || !income.date){
                return res.status(400).json({message: 'All fields are required!'})
            }
            if(income.amount <= 0 ){
                console.log("🚀 ~ exports.addBulkExpense= ~ income.amount:", income.amount)
                return res.status(400).json({message: 'Amount must be a positive number!'})
            }
        }

        await ExpenseSchema.insertMany(bulkIncome)
        res.status(200).json({message: 'Expenses Added'})
    } catch (error) {
        console.log("🚀 ~ exports.addBulkExpense= ~ error:", error)
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getExpense = async (req, res) =>{
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}