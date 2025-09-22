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

const createInfluencers = (req, res) => {
    const {nome, nicho, plataforma, seguidores, engajamento, pais, ativo} = req.body;

    if ( !nome || !nicho || !plataforma || !seguidores || !engajamento || !pais || !ativo) {
        return res.status(400).json({
            success: false,
            message: "Nome, nicho, plataforma, seguidores, engajamento, país e status são obrigatórios"
        });
    }

    const novoInfluencer = {
        id: influencers.length + 1,
        nome: nome,
        nicho: nicho,
        plataforma: plataforma,
        seguidores: seguidores,
        engajamento: engajamento,
        pais: pais,
        ativo: ativo
    }

    influencers.push(novoInfluencer)

    res.status(201).json({
        success: true,
        message: "Novo influencer adicionado",
        data: novoInfluencer
    });
};

const deleteInfluencer = (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)) {
        return res.status(404).json({
            success: false,
            message: "O id precisa de válido"
        });
    }

    const influencerParaRemover = influencers.find(i => i.id === id);

    if (!influencerParaRemover) {
        return res.status(404).json({
            success: false,
            message: `Infuencer com o id ${id} não existe!`
        });
    }

    const influencerFiltrados = influencers.filter(influencers => influencers.id !== id);

    influencers.splice(0, influencers.length, ...influencerFiltrados);

    res.status(200).json({
        success: true,
        message: `O influencer com o id ${id} foi removido`
    });
}

export {getAllInfluencers, getInfluencersById, createInfluencers}