import dados from  "./../models/dados.js";
const { influencers} = dados;

const getAllInfluencers = (req, res) => {
    let resultado = influencers;

    res.status(200).json({
        total:resultado.length,
        data: resultado
    });
};


export {getAllInfluencers}