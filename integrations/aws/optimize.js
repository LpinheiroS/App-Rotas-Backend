const { LocationClient } = require("@aws-sdk/client-location");

const awsLocationClient = new LocationClient({
    region: process.env.AWS_REGION
});

const optimizeWaypoints = async (coordinatesList) => {
    // TODO: Configuração básica do integrador aws optimize-waypoints
    // Aqui vai a chamada de API usando awsLocationClient
    return { route: "rota otimizada (mock)" };
};

module.exports = { optimizeWaypoints };
