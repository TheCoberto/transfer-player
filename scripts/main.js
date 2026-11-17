import { system } from "@minecraft/server";
import { transferPlayer as sendPlayerToServer } from "@minecraft/server-admin";

system.beforeEvents.startup.subscribe(e => {
    const command = e.customCommandRegistry;

    command.registerCommand({
        name: "ev:transfer",
        description: "Transfer a player to another server",
        permissionLevel: 1,
        mandatoryParameters: [
            { type: 5, name: "Player" },
            { type: 3, name: "Server IP" },
            { type: 1, name: "Server Port" }
        ]
    }, (playerName, playerList, serverIp, serverPort) => {
        for (const player of playerList) {
            system.run(() => {
                sendPlayerToServer(player, serverIp, serverPort);
            })
        }
    });
});