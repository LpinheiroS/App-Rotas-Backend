const geocodeService = require("./geocodeService");
const optimizeService = require("./optimizeService");

const calculateCompleteRoute = async (addresses) => {
    // 1. Envia a lista de endereços para o serviço de geocode (que fará 1 requisição para o AWS Integration)
    const coordinates = await geocodeService.geocodeAddresses(addresses);
    
    // 2. Com as coordenadas mapeadas, envia para o serviço de otimização (que fará 1 requisição para o AWS Integration)
    const optimizedRoute = await optimizeService.optimizeCoordinates(coordinates);

    return optimizedRoute;
};

module.exports = { calculateCompleteRoute };
