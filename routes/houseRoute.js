const {Router}= require("express")
const { createHouse, getHouse } = require("../controllers/houseController")


const router =Router()


router.route("/house").post(createHouse).get(getHouse)


module.exports=router