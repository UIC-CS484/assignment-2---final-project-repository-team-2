const { 
    getQ,
    runQ,
    DBConfig,
} = require("../DB");

describe('tests with database', () => {

    test('test on run query', async () => {
        const res = await runQ("SELECT * FROM users")
        expect(res.success).toBe(true);
    })

    test('test on get query', async () => {
        const res = await getQ("SELECT * FROM users")
        expect(res.success).toBe(true);
    })

    test('test on create user & get user', async () => {
        const res = await runQ(DBConfig.users.queries.insert('user', 'pass', 100))
        expect(res.success).toBe(true);

        const res2 = await getQ(DBConfig.users.queries.getByUsername('user'))
        expect(res2.success).toBe(true);
        expect(res2.data.money).toBe(100)
    })

    test('test ob getUserById', async () => {
        const res = await runQ(DBConfig.users.queries.insert('user2', 'pass', 100))
        expect(res.success).toBe(true);

        const res2 = await getQ(DBConfig.users.queries.getByUsername('user2'))
        expect(res2.success).toBe(true);
        
        const userId = res2.data.id

        const res3 = await getQ(DBConfig.users.queries.getById(userId))
        expect(res3.success).toBe(true);
        expect(res3.data.username).toBe('user2');
    })

    test('test on update username by its id', async () => {
        const res = await runQ(DBConfig.users.queries.insert('user3', 'pass', 100))
        expect(res.success).toBe(true);

        const res2 = await getQ(DBConfig.users.queries.getByUsername('user3'))
        expect(res2.success).toBe(true);
        
        const userId = res2.data.id

        const res3 = await runQ(DBConfig.users.queries.updateById(userId, { username: 'kek'}))
        expect(res3.success).toBe(true);
        
        const res4 = await runQ(DBConfig.users.queries.getByUsername('kek'))
        expect(res4.success).toBe(true);
    })
})