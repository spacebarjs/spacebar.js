<div align="center">
	<br />
	<p>
		<a href="https://spacebar.js.org"><img src="https://spacebar.js.org/static/logo.svg" width="546" alt="spacebar.js" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/djs"><img src="https://img.shields.io/discord/222078108977594368?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/@discordjs/voice"><img src="https://img.shields.io/npm/v/@discordjs/voice.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/@discordjs/voice"><img src="https://img.shields.io/npm/dt/@discordjs/voice.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://github.com/spacebarjs/spacebar.js/actions"><img src="https://github.com/spacebarjs/spacebar.js/actions/workflows/test.yml/badge.svg" alt="Build status" /></a>
		<a href="https://codecov.io/gh/spacebarjs/spacebar.js" ><img src="https://codecov.io/gh/spacebarjs/spacebar.js/branch/main/graph/badge.svg?precision=2&flag=voice" alt="Code coverage" /></a>
	</p>
	<p>
		<a href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss"><img src="https://raw.githubusercontent.com/spacebarjs/spacebar.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>
	</p>
</div>

## About

An implementation of the Discord Voice API for Node.js, written in TypeScript.

**Features:**

- Send and receive\* audio in Discord voice-based channels
- A strong focus on reliability and predictable behaviour
- Horizontal scalability and libraries other than [spacebar.js](https://spacebar.js.org/) are supported with custom adapters
- A robust audio processing system that can handle a wide range of audio sources

\*_Audio receive is not documented by Discord so stable support is not guaranteed_

## Installation

**Node.js 16.9.0 or newer is required.**

```sh
npm install @discordjs/voice
yarn add @discordjs/voice
pnpm add @discordjs/voice
```

## Dependencies

This library has several optional dependencies to support a variety
of different platforms. Install one dependency from each of the
categories shown below. The dependencies are listed in order of
preference for performance. If you can't install one of the options,
try installing another.

**Encryption Libraries (npm install):**

- `sodium-native`: ^3.3.0
- `sodium`: ^3.0.2
- `tweetnacl`: ^1.0.3
- `libsodium-wrappers`: ^0.7.9

**Opus Libraries (npm install):**

- `@discordjs/opus`: ^0.4.0
- `opusscript`: ^0.0.7

**FFmpeg:**

- [`FFmpeg`](https://ffmpeg.org/) (installed and added to environment)
- `ffmpeg-static`: ^4.2.7 (npm install)

## Examples

The [voice-examples][voice-examples] repository contains examples on how to use this package. Feel free to check them out if you need a nudge in the right direction.

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
[documentation]: https://spacebar.js.org/#/docs/voice
[guide]: https://spacebarjs.guide/
[guide-source]: https://github.com/spacebarjs/guide
[guide-update]: https://spacebarjs.guide/additional-info/changes-in-v14.html
[discord]: https://discord.gg/djs
[discord-api]: https://discord.gg/discord-api
[source]: https://github.com/spacebarjs/spacebar.js/tree/main/packages/voice
[npm]: https://www.npmjs.com/package/@discordjs/voice
[related-libs]: https://discord.com/developers/docs/topics/community-resources#libraries
[contributing]: https://github.com/spacebarjs/spacebar.js/blob/main/.github/CONTRIBUTING.md
[voice-examples]: https://github.com/spacebarjs/voice-examples
