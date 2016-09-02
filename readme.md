# Elm Native Helpers

> Helper functions for creating Native Elm code

## Install

```
npm install @panosoft/elm-native-helpers
```

## Usage

```js
const E = {
	Scheduler: {
		nativeBinding: _elm_lang$core$Native_Scheduler.nativeBinding,
		succeed:  _elm_lang$core$Native_Scheduler.succeed,
		rawSpawn: _elm_lang$core$Native_Scheduler.rawSpawn
	}
};
const cmd = require('@panosoft/elm-native-helpers/cmd')(E);
```
## Scoping

Normally, Elm code is all in the global space. But when run in Node, the Elm code gets brought in via the `require` function. This creates a ***private*** scope for Elm.

Since this package calls some Elm global functions, we need to pass them in from our Native code. That's why `E` is passed in.

Here's an example of what Node program might look like that `require`s our Elm program.

```js
// compile Main.elm with:
//		elm make Main.elm --output main.js

// load Elm module
const elm = require('./main.js');

// get Elm ports
const ports = elm.Main.worker().ports;

// keep our app alive until we get an exitCode from Elm or SIGINT or SIGTERM (see below)
setInterval(id => id, 86400);

ports.node.subscribe(exitCode => {
	console.log('exit code from Elm:', exitCode);
	process.exit(exitCode);
});

process.on('uncaughtException', err => {
	console.log(`Uncaught exception:`, {err: err});
	process.exit(1);
});

process.on('SIGINT', () => {
	console.log(`SIGINT received.`);
	process.exit(0);
});

process.on('SIGTERM', () => {
	console.log(`SIGTERM received.`);
	process.exit(0);
});

```

## Warning

This library is still in alpha.
