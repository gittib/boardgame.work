window.setIndexNameToListItems = () => {
    import skywayToken from "@skyway-sdk/token";
const { nowInSec, SkyWayAuthToken, uuidV4 } = skywayToken;

const appId = process.argv[2];
const secret = process.argv[3];

const token = new SkyWayAuthToken({
    jti: uuidV4(),
    iat: nowInSec(),
    exp: nowInSec() + 60 * 60 * 24,
    scope: {
        app: {
            id: appId,
            turn: true,
            // analytics: true,
            actions: ["read"],
            channels: [
                {
                    id: "*",
                    name: "*",
                    actions: ["write"],
                    members: [
                        {
                            id: "*",
                            name: "*",
                            actions: ["write"],
                            publication: {
                                actions: ["write"],
                            },
                            subscription: {
                                actions: ["write"],
                            },
                        },
                    ],
                    sfuBots: [
                        {
                            actions: ["write"],
                            forwardings: [
                                {
                                    actions: ["write"],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
}).encode(secret);

console.log(token);
