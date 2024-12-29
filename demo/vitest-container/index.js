const getValue = (client) => (key) => client.get(key);
const setValue = (client) => (key, value) => client.set(key, value);
const delKey = (client) => (key) => client.del(key);
const dbSize = (client) => () => client.dbSize();
const mSet = (client) => (...args) => client.mSet(...args);

const seedDatabase = (client) => async () => {
    await client.set('umbrella', 10);
    await client.set('k-way', 25);
    await client.set('ciré', 40);
};
const flushDb = (client) => async () => {
    await client.flushDb();
    await client.quit();
};


export const withClient = (client) => ({
    getValue: getValue(client),
    setValue: setValue(client),
    seedDatabase: seedDatabase(client),
    delKey: delKey(client),
    flushDb: flushDb(client),
    dbSize: dbSize(client),
    mSet: mSet(client)
});

