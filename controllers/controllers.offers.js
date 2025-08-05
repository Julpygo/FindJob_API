import offerModel from '../models/offers';

const prueba = async (req,res) =>{
    console.log("hola mundo");
    res.status(200).send("hola mundo")
}

const offerCreate = async (req,res) =>{
    try {
        const offer = new offerModel
        await offer.save()
        return res.status(201).json(offer)
    } catch (error) {
        console.error(error);
        return res.status(error.status).json(error)
    }
}

export {prueba, offerCreate}