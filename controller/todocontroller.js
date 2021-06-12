const todoCategory = require('../models/todo')
exports.gettodoCategoryById = function (req, res, next, id) {
    todoCategory.find(id).exec(function (err, todocate) {
        if (err) {
            return res.status(400).json({
                error: "todocategory not found in db"
            })

        }
        req.todoCategory = todocate;
        next();
    });
};

exports.createtodoCategory = function (req, res) {
    const todocategory = new todoCategory(req.body);
    todocategory.save(function (err, todocategory) {
        if (err) {
            return res.status(400).json({
                error: "Not able to save todocategory in db"
            })

        }
        res.json({ todocategory })
    })
}
exports.gettodoCategory = function (req, res) {
    return res.json(req.todocategory);
}
exports.getAlltodoCategory = function (req, res) {
    todoCategory.find().exec(function (err, todoCategories) {
        if (err) {
            return res.status(400).json({
                error: "No Todo categories found"
            })

        }
        res.json(todoCategories)
    })
}

exports.updatetodoCategory = function (req, res) {
    const todocategory = req.todocategory;
    category.title = req.body.title;
    todocategory.save(function (err, updatedCategory) {
        if (err) {
            return res.status(400).json({
                error: "Failed to update category"
            })

        }
        res.json(updatedCategory);
    })
}
exports.removetodoCategory = function (req, res) {
    const todocategory = req.todocategory
    todocategory.remove(function (err, todocategory) {
        if (err) {
            return res.status(400).json({
                error: "failed to delete todocategory"
            })

        }
        res.json({
            message: "successfully deleted"
        })
    });
}
