
export const eventOn = (eventTarget, successEvent, errorEvent = "error") => {
  let $resolve, $reject

  const promise = new Promise((resolve, reject) => {
    $resolve = resolve
    $reject = reject
  })

  eventTarget.addEventListener(successEvent, $resolve)
  eventTarget.addEventListener(errorEvent, $reject)

  promise.finally(() => {
    eventTarget.removeEventListener(successEvent, $resolve)
    eventTarget.removeEventListener(errorEvent, $reject)
  })

  return promise
}

export const timeout = milliseconds => {
  return new Promise(
    resolve => setTimeout(resolve, milliseconds)
  )
}

export const polling = async (predicate, options = {}) => {
  const { maxTries = 10, interval = 10 } = options

  if (maxTries <= 0) {
    // reject
    throw undefined
  } else if (predicate()) {
    // resolve
    return undefined
  } else {
    await timeout(interval)
    await polling(predicate, { maxTries: maxTries-1, interval })
  }
}