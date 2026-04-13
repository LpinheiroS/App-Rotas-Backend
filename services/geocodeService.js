const geocodeIntegration = require("../integrations/aws/geocode");

const geocodeAddresses = async (addresses) => {
    // Repassa a lista de endereços para o integrador fazer uma única chamada
    const coordinates = await geocodeIntegration.geocodeAddress(addresses);
    return coordinates;
};

module.exports = { geocodeAddresses };
