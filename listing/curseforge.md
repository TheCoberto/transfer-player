# CurseForge listing: Transfer Player

Paste these into the CurseForge Authors Console. Once the project is approved, CurseForge syncs it to MCPEDL.

## Project

- **Name:** Transfer Player: Send Players to Another Server
- **Slug:** `transfer-player` (new project, so any free slug works)
- **Summary:** Send players to another Bedrock server from chat, command blocks or NPC buttons. Build a hub that links all your servers.
- **Class:** Minecraft Bedrock, Scripts
- **Project Distribution** (License section): allow third-party distribution, or it won't show on MCPEDL
- **Logo:** promo/logo.png
- **Gallery:** promo/banner.png titled `MCPEDL` (used as the MCPEDL thumbnail)

## Description

Running more than one server? Transfer Player sends players to another Bedrock server, so you can link a hub to your minigames, survival and creative servers.

`/ev:transfer <players> <serverIp> <serverPort>`

Unlike vanilla `/transfer`, which only works from the server console, this works from:

- **NPC buttons:** an NPC that runs `/ev:transfer @initiator play.example.net 19132` sends whoever clicks the button.
- **Command blocks:** a pressure plate or button wired to a command block becomes a portal to another server.
- **Chat:** operators can type it, like `/ev:transfer @a play.example.net 19132` to send everyone online.

Only operators can type it or set up command blocks and NPCs, so players can't send themselves or anyone else. Any player can be sent, and cheats don't need to be on.

### Installation

1. Download the .mcaddon and open it.
2. Create or edit a world, turn on the Transfer Player behavior pack, and turn on the **Beta APIs** experiment (sending players to another server is only available there).
3. Don't use it alongside Coberto's Utilities, which already includes this command.

Made for Bedrock Dedicated Servers. Realms don't allow sending players to another server.

Beta APIs change with Minecraft updates, so after a big update you may need a new version of this add-on.

### Supported Minecraft versions

1.26.60 and newer (Beta APIs experiment required)

### Changelog

**1.2.0**
- Command blocks and NPC buttons can now send players to another server, like an NPC that runs /ev:transfer @initiator <ip> <port>
- Players still can't use it themselves

**1.1.0**
- Fixed for current versions of Minecraft

## File

- **File:** `builds\Transfer-Player-1.2.0.mcaddon`
- **Display name:** Transfer Player 1.2.0
- **Release type:** Release
- **Game versions:** 1.26.60 and newer (Beta APIs experiment required)
- **Changelog:**

- Command blocks and NPC buttons can now send players to another server, like an NPC that runs /ev:transfer @initiator <ip> <port>
- Players still can't use it themselves
