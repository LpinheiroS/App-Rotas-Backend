const geocodeIntegration = require("../integrations/aws/geocode");

const geocodeAddresses = async (addresses) => {
    const coordinates = [];

    // Executa a API de geocode uma vez para cada endereço
    for (const address of addresses) {
        const addressString = `${address.rua}, ${address.numero}, ${address.cep}`;
        const coord = await geocodeIntegration.geocodeAddress(addressString);
        const [lon, lat] = coord.ResultItems[0].Position;
        const position = { lon, lat };

        coordinates.push(position);
    }

    return coordinates;
};

module.exports = { geocodeAddresses };
