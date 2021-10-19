
# Callforth :running:

[![npm version](https://badge.fury.io/js/callforth.svg)](https://badge.fury.io/js/callforth)
![minzipped size](https://badgen.net/bundlephobia/minzip/callforth)

A tiny utility library to replace callbacks with Promises where possible.
**Don't callback, callforth!**

It simply includes a hand-full of functions I see myself re-implementing in nearly every project.
So I might as well put them in a package.

Do things like:

```js
await timeout(3000)
```
```js
await eventOn(videoElement, "loadeddata")
```
```js
const message = await eventOn(webWorker, "message")
```

## Install :package:

```sh
npm install callforth
```

Now you can:

```js
import { eventOn, timeout, polling } from "callforth"
```

Alternatively, include [this script](https://unpkg.com/callforth/dist/callforth.umd.js) and:

```html
<script src="./path/to/callforth.umd.js"></script>
<script>
  const { eventOn, timeout, polling } = window.callforth
</script>
```

## API :eyes:

### `eventOn`

```js
const payload = await eventOn(target, successEvent, errorEvent)
```

#### Parameters

 * _target_ : `EventTarget` - any object you can call `addEventListener` on.
 * _successEvent_ : `string` - name of the event you want to await.
 * _errorEvent_ : `string` (optional) - if this event fires, the promise is rejected.

#### Return Value

 * `Promise<any>` - wraps callback result (callbacks first argument)


### `timeout`

```js
await timeout(delay)
```

#### Parameters

 * _delay_ : `int` - milliseconds after which the Promise should resolves.

#### Return Value

 * `Promise<void>`


### `polling`

```js
await polling(predicate, { maxTries, interval })
```

#### Parameters
 
 * _predicate_ : `any -> boolean` - delay in milliseconds after which the Promise should resolve.
 * _options_ : `object` (optional)
    * _maxTries_ : `int` (default = 10) - maximum number of times to call predicate before giving up.
    * _interval_ : `int` (default = 10) - delay in milliseconds between calls of predicate.

#### Return Value

 * `Promise<void>`

## More Examples

```js
async function loadScript(url) {
  let script = document.createElement("script")

  script.src = url

  await eventOn(script, "loaded")
}
```
```js
async function primesLessThen(number) {
  primeWorker.postMessage(number)

  const result = await eventOn(primeWorker, "message")

  return result
}
```
