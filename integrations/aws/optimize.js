const { GeoRoutesClient, OptimizeWaypointsCommand } = require("@aws-sdk/client-geo-routes");

const client = new GeoRoutesClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const optimizeWaypoints = async (coordinatesList) => {
    const command = new OptimizeWaypointsCommand(
        {
            "Origin": [-46.4938375, -23.4471931],
            "Waypoints": [
                { "Position": [-46.6032701, -23.4800747] },
                { "Position": [-46.5766424, -23.5402524] },
                { "Position": [-46.6163355, -23.5451136] },
                { "Position": [-46.4938082, -23.4333006] }
            ]
        }
    );
    const response = await client.send(command);

    return response;
};

module.exports = { optimizeWaypoints };
