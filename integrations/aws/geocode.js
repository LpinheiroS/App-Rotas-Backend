const { LocationClient } = require("@aws-sdk/client-location");

const awsLocationClient = new LocationClient({ 
    region: process.env.AWS_REGION || "us-east-1"
});

const geocodeAddress = async (address) => {
    // TODO: Configuração básica do integrador aws geocode
    // Aqui vai a chamada de API usando awsLocationClient (ex: SearchPlaceIndexForTextCommand)
    // Retorna as coordenadas do endereço.
    return { latitude: 0, longitude: 0 };
};

module.exports = { geocodeAddress };
