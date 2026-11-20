# CurseForge listing: Transfer Player

Paste these into the CurseForge Authors Console. Once the project is approved, CurseForge syncs it to MCPEDL.

## Project

- **Name:** Transfer Player: Send Players to Another Server
- **Slug:** `transfer-player` (new project, so any free slug works)
- **Summary:** One operator command to send players from your world or server to another Bedrock server.
- **Class:** Minecraft Bedrock, Scripts
- **Project Distribution** (License section): allow third-party distribution, or it won't show on MCPEDL
- **Logo:** promo/logo.png
- **Gallery:** promo/banner.png titled `MCPEDL` (used as the MCPEDL thumbnail)

## Description

Running more than one server? Transfer Player lets operators send players to another Bedrock server with one command, so you can link a hub to minigames, survival and creative worlds.

`/ev:transfer <players> <serverIp> <serverPort>`

Example: `/ev:transfer @a play.example.net 19132` sends everyone online.

- Only operators can use it, from in-game chat.
- Any player can be sent, including yourself.
- Cheats don't need to be on.

### Installation

1. Download the .mcaddon and open it.
2. Create or edit a world, turn on the Transfer Player behavior pack, and turn on the **Beta APIs** experiment (sending players to another server is only available there).
3. Don't use it alongside Coberto's Utilities, which already includes this command.

Beta APIs change with Minecraft updates, so after a big update you may need a new version of this add-on.

### Supported Minecraft versions

1.26.60 and newer (Beta APIs experiment required)

### Changelog

**1.1.0**
- Fixed for current versions of Minecraft

## File

- **File:** `builds\Transfer-Player-1.1.0.mcaddon`
- **Display name:** Transfer Player 1.1.0
- **Release type:** Release
- **Game versions:** 1.26.60 and newer (Beta APIs experiment required)
- **Changelog:**

- Fixed for current versions of Minecraft
