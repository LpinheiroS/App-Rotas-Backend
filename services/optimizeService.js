const optimizeIntegration = require("../integrations/aws/optimize");

const optimizeCoordinates = async (coordinates) => {
    // Repassa as coordenadas para a API calcular e otimizar a rota em uma única chamada
    const optimizedRoute = await optimizeIntegration.optimizeWaypoints(coordinates);
    return optimizedRoute;
};

module.exports = { optimizeCoordinates };
