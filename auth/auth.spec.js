const request = require('supertest');
const authRouter = require('./auth-router.js');
const db = require('../data/dbConfig.js');
const Users = require('./auth-model.js');

describe('register', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })
    afterEach(async () => {
        await db('users').truncate();
    })
    describe('register status', () => {
        it('returns 201 created', () => {
            return request(authRouter)
                .post('/register')
                .send({
                    username: 'test',
                    password: 'test'
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })
    })
})
describe('login', () => {
    describe('login type', () => {
        it('return JSON', () => {
            return request(authRouter)
                .post('/login')
                .send({
                    username: 'bob',
                    password: 'bob'
                })
                .then(res => {
                    expect(res.type).toMatch(/json/)
                })
        })
    })
})