import {
	system,
	CustomCommandParamType,
	CommandPermissionLevel,
	CustomCommandSource,
	CustomCommandStatus,
} from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";

// /thecoberto:transfer <players> <serverIp> <serverPort> sends players to another server.
// Operators can type it in chat, and command blocks, NPC buttons and functions can
// run it too (like an NPC that runs /thecoberto:transfer @initiator ...), which vanilla
// /transfer can't. Only operators can set those up, so players still can't use it.
// Coberto's Utilities copies this file (as scripts/transfer.js) with sync.ps1.

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
	customCommandRegistry.registerCommand(
		{
			name: "thecoberto:transfer",
			description: "Transfer players to another server",
			// Game Directors = operators, command blocks and NPCs.
			permissionLevel: CommandPermissionLevel.GameDirectors,
			cheatsRequired: false,
			mandatoryParameters: [
				{ type: CustomCommandParamType.PlayerSelector, name: "players" },
				{ type: CustomCommandParamType.String, name: "serverIp" },
				{ type: CustomCommandParamType.Integer, name: "serverPort" },
			],
		},
		(origin, players, serverIp, serverPort) => {
			// The server console has vanilla /transfer for this.
			if (origin.sourceType === CustomCommandSource.Server) {
				return {
					status: CustomCommandStatus.Failure,
					message: "Use /thecoberto:transfer in game, from chat, a command block or an NPC.",
				};
			}

			const port = Number(serverPort);
			// Players can't be transferred from inside a command, so do it next tick.
			system.run(() => {
				for (const player of players) {
					if (player.isValid) transferPlayer(player, { hostname: serverIp, port });
				}
			});
			return {
				status: CustomCommandStatus.Success,
				message: `Transferring ${players.length} player(s) to ${serverIp}:${port}`,
			};
		}
	);
});
