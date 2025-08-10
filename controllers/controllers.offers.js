import offerModel from '../models/offers.js';

const prueba = async (req,res) =>{
    console.log("hola mundo");
    res.status(200).send("hola mundo")
};

const offerCreate = async (req,res) =>{
    try {
        console.log("REQ.BODY:", req.body);
        const offer = new offerModel(req.body)
        await offer.save()
        return res.status(201).json(offer)
    } catch (error) {
        console.error(error);
        if(error.code == 11000){
            return res.status(500).json({
                message:"Company name no disponible",
                error:error
                })
        }
        return res.status(error.status).json(error)   
    }
}
const getOffer = async (req,res)=>{
    try {
        const offers = await offerModel.find()
        res.json(offers)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ofertas' });
    }
}

export {getOffer, offerCreate}