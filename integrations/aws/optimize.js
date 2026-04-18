const { GeoRoutesClient, OptimizeWaypointsCommand } = require("@aws-sdk/client-geo-routes");

const client = new GeoRoutesClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const optimizeWaypoints = async (coordinatesList) => {
    const command = new OptimizeWaypointsCommand(coordinatesList);
    const response = await client.send(command);

    return response;
};

module.exports = { optimizeWaypoints };
