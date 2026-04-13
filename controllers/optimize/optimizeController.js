const routeService = require("../../services/routeService");

const optimizeRoute = async (req, res) => {
    try {
        const { addresses } = req.body;
        
        if (!addresses || !Array.isArray(addresses)) {
            return res.status(400).json({ error: "addresses é obrigatório e deve ser um array." });
        }

        // Chama o routeService que rege o fluxo principal
        const routeResult = await routeService.calculateCompleteRoute(addresses);

        return res.status(200).json({
            message: "Rota otimizada com sucesso.",
            data: routeResult
        });
    } catch (error) {
        console.error("Erro no optimizeController:", error);
        return res.status(500).json({ error: "Erro interno no servidor ao calcular rotas." });
    }
};

module.exports = { optimizeRoute };
