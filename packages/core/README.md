<div align="center">
	<br />
	<p>
		<a href="https://spacebar.js.org"><img src="https://spacebar.js.org/static/logo.svg" width="546" alt="spacebar.js" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/djs"><img src="https://img.shields.io/discord/222078108977594368?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/@discordjs/core"><img src="https://img.shields.io/npm/v/@discordjs/core.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/@discordjs/core"><img src="https://img.shields.io/npm/dt/@discordjs/core.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://github.com/spacebarjs/spacebar.js/actions"><img src="https://github.com/spacebarjs/spacebar.js/actions/workflows/test.yml/badge.svg" alt="Build status" /></a>
		<a href="https://codecov.io/gh/spacebarjs/spacebar.js" ><img src="https://codecov.io/gh/spacebarjs/spacebar.js/branch/main/graph/badge.svg?precision=2&flag=core" alt="Code coverage" /></a>
	</p>
	<p>
		<a href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss"><img src="https://raw.githubusercontent.com/spacebarjs/spacebar.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>
	</p>
</div>

## About

`@discordjs/core` is a thinly abstracted wrapper around the "core" components of the Discord API: REST, and gateway.

## Installation

**Node.js 16.9.0 or newer is required.**

```sh
npm install @discordjs/core
yarn add @discordjs/core
pnpm add @discordjs/core
```

## Example usage

```ts
import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import { GatewayDispatchEvents, GatewayIntentBits, InteractionType, MessageFlags, Client } from '@discordjs/core';

// Create REST and WebSocket managers directly
const rest = new REST({ version: '10' }).setToken(token);
const ws = new WebSocketManager({
	token,
	intents: GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent,
	rest,
});

// Create a client to emit relevant events.
const client = new Client({ rest, ws });

// Listen for interactions
// Each event contains an `api` prop along with the event data that allows you to interface with the Discord REST API
client.on(GatewayDispatchEvents.InteractionCreate, async ({ data: interaction, api }) => {
	if (interaction.type !== InteractionType.ApplicationCommand || interaction.data.name !== 'ping') {
		return;
	}

	await api.interactions.reply(interaction.id, interaction.token, { content: 'Pong!', flags: MessageFlags.Ephemeral });
});

// Listen for the ready event
client.once(GatewayDispatchEvents.Ready, () => console.log('Ready!'));

// Start the WebSocket connection.
ws.connect();
```

## Independent REST API Usage

```ts
// Create REST instance
const rest = new REST({ version: '10' }).setToken(token);

// Pass into API
const api = new API(rest);

// Fetch a guild using the API wrapper
const guild = await api.guilds.get('1234567891011');
```

## Links

- [Website][website] ([source][website-source])
- [Documentation][documentation]
- [Guide][guide] ([source][guide-source])
  See also the [Update Guide][guide-update], including updated and removed items in the library.
- [spacebar.js Discord server][discord]
- [Discord API Discord server][discord-api]
- [GitHub][source]
- [npm][npm]
- [Related libraries][related-libs]

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation][documentation].  
See [the contribution guide][contributing] if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [spacebar.js Server][discord].

[website]: https://spacebar.js.org/
[website-source]: https://github.com/spacebarjs/spacebar.js/tree/main/apps/website
[documentation]: https://spacebar.js.org/
[guide]: https://spacebarjs.guide/
[guide-source]: https://github.com/spacebarjs/guide
[guide-update]: https://spacebarjs.guide/additional-info/changes-in-v14.html
[discord]: https://discord.gg/djs
[discord-api]: https://discord.gg/discord-api
[source]: https://github.com/spacebarjs/spacebar.js/tree/main/packages/core
[npm]: https://www.npmjs.com/package/@discordjs/core
[related-libs]: https://discord.com/developers/docs/topics/community-resources#libraries
[contributing]: https://github.com/spacebarjs/spacebar.js/blob/main/.github/CONTRIBUTING.md
