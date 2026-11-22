# transfer-player

**Transfer Player** is a Minecraft Bedrock add-on that lets operators send players to another server:

```
/ev:transfer <players> <serverIp> <serverPort>
```

Operators can type it in chat, and command blocks, NPC buttons and functions can run it too, so you can build a hub where an NPC button or a pressure plate sends players to another server (`/ev:transfer @initiator play.example.net 19132`). Vanilla `/transfer` can't do that: it only works from the server console. Only operators can place command blocks and set up NPCs, so players can't use it themselves. Any player can be sent. Cheats don't need to be on.

Requires the **Beta APIs** experiment, because sending players to another server is only available in the beta `@minecraft/server-admin` module. Beta versions change with Minecraft updates, so after an update the versions in `manifest.json` may need bumping (look up the `beta` tag of `@minecraft/server` and `@minecraft/server-admin` on npm).

The same command is part of [Coberto's Utilities](https://github.com/TheCoberto/coberto-utilities), which copies `scripts/main.js` as `scripts/transfer.js` with `sync.ps1`: edit it here. Don't turn on both packs.

## Building

Use `package.ps1` from [bedrock-tools](https://github.com/TheCoberto/bedrock-tools), cloned next to this repo:

```powershell
powershell -ExecutionPolicy Bypass -File ..\bedrock-tools\package.ps1
```
