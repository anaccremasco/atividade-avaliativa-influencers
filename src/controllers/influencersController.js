import dados from  "./../models/dados.js";
const { influencers} = dados;

const getAllInfluencers = (req, res) => {
    let resultado = influencers;

    res.status(200).json({
        total:resultado.length,
        data: resultado
    });
};

const getInfluencersById = (req, res) => {
    const id =parseInt(req.params.id);
    const influencer = influencers.find(i => i.id === id);

    if(!influencer) {
        return res.status(404).json({
            success: false,
            message: `Influencer com o ${id} não encontrado`
        });
    }

    res.status(200).json({
        total:influencer.length,
        data: influencer
    });
};


export {getAllInfluencers, getInfluencersById}