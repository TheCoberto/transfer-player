import {
	system,
	CustomCommandParamType,
	CommandPermissionLevel,
	CustomCommandSource,
	CustomCommandStatus,
} from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";

// /ev:transfer <players> <serverIp> <serverPort> sends players to another server.
// Coberto's Utilities has the same command, so don't turn on both packs.

system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
	customCommandRegistry.registerCommand(
		{
			name: "ev:transfer",
			description: "Transfer a player to another server",
			// Admin = operators only, and command blocks can't run it.
			permissionLevel: CommandPermissionLevel.Admin,
			cheatsRequired: false,
			mandatoryParameters: [
				{ type: CustomCommandParamType.PlayerSelector, name: "players" },
				{ type: CustomCommandParamType.String, name: "serverIp" },
				{ type: CustomCommandParamType.Integer, name: "serverPort" },
			],
		},
		(origin, players, serverIp, serverPort) => {
			// The server console outranks operators, so the permission level alone
			// doesn't block it. Only accept the command when a player typed it.
			const runByPlayer =
				origin.sourceType === CustomCommandSource.Entity &&
				origin.sourceEntity?.typeId === "minecraft:player";
			if (!runByPlayer) {
				return {
					status: CustomCommandStatus.Failure,
					message: "Only an operator can use /ev:transfer, from in-game chat.",
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
