# Elm Native Helpers

> Helper functions for creating Native Elm code

## Install

```
npm install @panosoft/elm-native-helpers
```

## Usage

```js
const E = {
	A2: A2,
	A3: A3,
	A4: A4,
	Scheduler: {
		nativeBinding: _elm_lang$core$Native_Scheduler.nativeBinding,
		succeed:  _elm_lang$core$Native_Scheduler.succeed,
		rawSpawn: _elm_lang$core$Native_Scheduler.rawSpawn
	}
};
const helper = require('@panosoft/elm-native-helpers/helper')(E);
```

## Scoping

Normally, Elm code is all in the global space. But when run in Node, the Elm code gets brought in via the `require` function. This creates a ***private*** scope for Elm.

Since this package calls some Elm global functions, we need to pass them in from our Native code. That's why `E` is passed in.
