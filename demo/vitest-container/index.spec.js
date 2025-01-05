import {createClient} from 'redis';
import {afterEach, beforeEach, describe, expect, it} from 'vitest'
import {withClient} from './index';

describe.concurrent('cart feature', () => {
    let client;
    let redisClient;
    beforeEach(async () => {
        client = await createClient()
            .on('error', err => console.log('Redis Client Error', err))
            .connect();

        redisClient = withClient(client);

        await redisClient.seedDatabase();
    });

    afterEach(async () => {
        try {
            await client.flushDb();
            await client.quit();
        } catch (e) {
            console.error('Error while quitting client', e);
        }
    });


    it('should remove an item from the cart', async () => {
        await redisClient.delKey('umbrella');
        expect(await client.dbSize()).toBe(2);
        expect(await client.get('umbrella')).toBeNull();
    });

    it('should get the cart size', async () => {
        expect(await redisClient.dbSize()).toBe(3);
    });

    it('should add an item to the cart', async () => {
        await redisClient.setValue('beurre', 5);
        expect(await client.dbSize()).toBe(4);
    });

    it('should add many items to the cart', async () => {
        await redisClient.mSet({confiture: '3', pain: '2', caramel: '1'});
        expect(await client.dbSize()).toBe(6);
    });

    it('should update an item in the cart', async () => {
        await redisClient.setValue('umbrella', 20);
        expect(await client.get('umbrella')).toBe('20');
    });
});