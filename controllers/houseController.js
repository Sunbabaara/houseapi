const House = require("../model/houseSchema")


//get all houses
const getHouse = (req, res)=>{
    res.status(200).json({success:true, data:houses})
}



//post a house
// const createHouse =(req, res)=>{
//     const house = req.body;
//     house.push(house)
    
//     res.status(200).json({success:true, data})
//     }

    const createHouse = (req, res)=>{
        const newHouse = new House(
            {
                housename:req.body.housename,
                description:req.body.description,
                image:req.body.image
            }
        )
        newHouse.save()
        res.status(200).json(newHouse)
    }


    module.exports = {getHouse, createHouse}