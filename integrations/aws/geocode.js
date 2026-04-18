const { GeoPlacesClient, GeocodeCommand } = require("@aws-sdk/client-geo-places");

const client = new GeoPlacesClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const geocodeAddress = async (address) => {
    const command = new GeocodeCommand({
        QueryText: address,
        MaxResults: 1
    });

    const response = await client.send(command);
    return response;
};

module.exports = { geocodeAddress };
