const MaxSchema= require("../models/Limit")


exports.addNewLimit = async (req, res) => {
    const { maxExpance }  = req.body

    const income = MaxSchema({ maxExpance })

    try {
        //validations
        if(maxExpance===""){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(parseInt(maxExpance) <= 0 || !maxExpance === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'MaxExpance added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}

exports.getLimit = async (req, res) => {
    try {
        const limit = await MaxSchema.findOne().sort({ createdAt: -1 }).exec();
        console.log("🚀 ~ exports.getIncomes= ~ incomes:", limit)
        res.status(200).json(limit)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteLimit = async (req, res) =>{
    const { maxExpance }  = req.body
    try {
        if(maxExpance===""){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(parseInt(maxExpance) <= 0 || !maxExpance === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        MaxSchema({ maxExpance: maxExpance || "0" }).save()
        res.status(200).json({message: maxExpance ? "Max limit updated ":'Max limit Deleted'})
    }
    catch (err) {
        console.log("🚀 ~ exports.deleteLimit ~ err:", err)
        res.status(500).json({message: 'Server Error'})
    }
}
