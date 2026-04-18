const optimizeIntegration = require("../integrations/aws/optimize");
const buildRoutePayload = (coordinates) => {
    const origin = coordinates.find((c) => c.isStart);
    const destination = coordinates.find((c) => c.isEnd);
    const waypoints = coordinates.filter((c) => !c.isStart && !c.isEnd);
    const payload = {
        Origin: [origin.lon, origin.lat],
        Waypoints: waypoints.map((c) => ({ Position: [c.lon, c.lat] })),
    };
    if (destination) {
        payload.Destination = [destination.lon, destination.lat];
    }
    // Mapa de Id → index na mesma ordem em que o payload foi montado
    const idToIndex = { Origin: origin.index };
    waypoints.forEach((c, i) => { idToIndex[`Waypoint${i}`] = c.index; });
    if (destination) idToIndex["Destination"] = destination.index;
    return { payload, idToIndex };
};
const optimizeCoordinates = async (coordinates) => {
    // Transforma o array de coordenadas no payload esperado pela integração AWS
    // e obtém o mapa Id → index em uma única passagem
    const { payload, idToIndex } = buildRoutePayload(coordinates);
    // Repassa o payload para a API calcular e otimizar a rota em uma única chamada
    const optimizedRoute = await optimizeIntegration.optimizeWaypoints(payload);
    const optimizedWaypoints = optimizedRoute.OptimizedWaypoints;
    // Retorna a sequência de indexes na ordem otimizada pela AWS
    const orderedIndexes = optimizedWaypoints.map((wp) => idToIndex[wp.Id]);
    return orderedIndexes;
};
module.exports = { optimizeCoordinates };
