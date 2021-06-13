const express = require("express")
const router = express.Router()
const { gettodoCategoryById,
    createtodoCategory,
    gettodoCategory,
    getAlltodoCategory,
    updatetodoCategory,
    removetodoCategory
} = require("../controller/todocontroller")

router.param("id", gettodoCategoryById)
//to create
router.put("/todocategory/:id", createtodoCategory)

//to read
router.get("/todocategory/:id", gettodoCategory)
router.get("/todoCategories", getAlltodoCategory)
// to update
router.put("/todocategory/:id", updatetodoCategory)
//delete
router.delete("/todocategory/:id", removetodoCategory)


module.exports = router;