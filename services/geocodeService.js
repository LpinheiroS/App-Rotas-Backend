const geocodeIntegration = require("../integrations/aws/geocode");

const geocodeAddresses = async (addresses) => {
    const coordinates = [];
    
    // Executa a API de geocode uma vez para cada endereço
    for (const address of addresses) {
        const coord = await geocodeIntegration.geocodeAddress(address);
        coordinates.push(coord);
    }
    
    return coordinates;
};

module.exports = { geocodeAddresses };
