const { polling } = require('../dist/callforth.js')

const test = async (desc, testFn) => {
    try {
        await testFn()

        console.log("✔️ " + desc)
    } catch (error) {
        console.log("x " + desc)
        console.error(`
            ${error}
        `)
    }
}

test("polling resolves on change detection", async () => {
    let state = { ready: false }

    setTimeout(() => state.ready = true, 100)

    await polling(() => state.ready, { maxTries: 100, interval: 10 })
})

test("polling rejects after max tries", async () => {
    let state = { ready: false }

    setTimeout(() => state.ready = true, 3000)

    try {
        await polling(() => state.ready, { maxTries: 100, interval: 10 })

        throw undefined
    } catch (error) {
        // success
    }
})