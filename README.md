# transfer-player

**Transfer Player** is a Minecraft Bedrock add-on that lets operators send players to another server:

```
/ev:transfer <players> <serverIp> <serverPort>
```

Only operators can use it, and only from in-game chat (not command blocks or the server console). Any player can be sent. Cheats don't need to be on.

Requires the **Beta APIs** experiment, because sending players to another server is only available in the beta `@minecraft/server-admin` module. Beta versions change with Minecraft updates, so after an update the versions in `manifest.json` may need bumping (look up the `beta` tag of `@minecraft/server` and `@minecraft/server-admin` on npm).

The same command is part of [Coberto's Utilities](https://github.com/TheCoberto/coberto-utilities). Don't turn on both.

## Building

Use `package.ps1` from [bedrock-tools](https://github.com/TheCoberto/bedrock-tools), cloned next to this repo:

```powershell
powershell -ExecutionPolicy Bypass -File ..\bedrock-tools\package.ps1
```
