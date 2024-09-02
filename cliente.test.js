const request = require ('supertest')
const app = require('./index')

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200)
    });
    it('verificar se a lista de clientes está cheia', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.body).toBeDefined();
    })
    it('1 id da lista', async () => {
        const res = await request(app).get('/clientes/56c9abc9-4689-4782-8e26-b2159c7ec6ff').send();
        expect(res.body).toBeDefined();
    })
})

describe('Criar /clientes', () => {
    it('criar cliente com sucesso', async () =>{
        const res = await request(app).post('/clientes').send({
            nome: 'Larissa Isaias',
            email: 'larissa31isaias@hotmail.com',
            senha: '40028922'
        })
        expect(res.status).toBe(204)
    })
    it('Esqueceu o nome', async () =>{
        const res = await request(app).post('/clientes').send({
            email: 'larissa31isaias@hotmail.com',
            senha: '40028922'
        })
        expect(res.status).toBe(406)
    })
    it('Esqueceu o nome e o email', async () =>{
        const res = await request(app).post('/clientes').send({
            senha: '40028922'
        })
        expect(res.status).toBe(406)
})
})

describe('Atualizar /clientes/:id', () => {
    it('Atualizar nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/68724c4f-2a24-43d4-a6b4-24a5d8f5e371').send({
            nome: 'Larissa update'
        })
        expect(res.status).toBe(200)
    })
})


describe('Deletar /clientes', () => {
    it('Deletar cliente com sucesso', async () => {
        const res = await request(app).delete('/clientes/6a8ea7e1-62c9-4d58-be06-59b000ff3219')
        expect(res.status).toBe(204);
    })
})


describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200)
    });
    it('verificar se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.body).toBeDefined();
    })
    it('1 id da lista', async () => {
        const res = await request(app).get('/produtos/00175f14-f65e-4ab0-a8be-f2c88827d760').send();
        expect(res.body).toBeDefined();
    })
})


describe('Criar /produtos', () => {
    it('criar produtos com sucesso', async () =>{
        const res = await request(app).post('/produtos').send({
            nome: 'Amigurumi do deadpool',
            descricao: 'um amigurumi do deadpool',
            preco: '40,00',
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheamigurumi.com%2Fcrochet-deadpool-amigurumi-free-pattern%2F&psig=AOvVaw0GGsfItNjXKyA2Si5JuENd&ust=1725392346385000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJju2cGBpYgDFQAAAAAdAAAAABAE'
        })
        expect(res.status).toBe(204)
    })
    it('Esqueceu o nome', async () =>{
        const res = await request(app).post('/produtos').send({
            descricao: 'um amigurumi do deadpool',
            preco: '40,00',
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheamigurumi.com%2Fcrochet-deadpool-amigurumi-free-pattern%2F&psig=AOvVaw0GGsfItNjXKyA2Si5JuENd&ust=1725392346385000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJju2cGBpYgDFQAAAAAdAAAAABAE'
        })
        expect(res.status).toBe(406)
    })
    it('Esqueceu o nome e a descrição', async () =>{
        const res = await request(app).post('/produtos').send({
            preco: '40,00',
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheamigurumi.com%2Fcrochet-deadpool-amigurumi-free-pattern%2F&psig=AOvVaw0GGsfItNjXKyA2Si5JuENd&ust=1725392346385000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJju2cGBpYgDFQAAAAAdAAAAABAE'
        })
        expect(res.status).toBe(406)
    })
    it('Esqueceu o nome, a descrição e o preço', async () =>{
        const res = await request(app).post('/produtos').send({
            imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheamigurumi.com%2Fcrochet-deadpool-amigurumi-free-pattern%2F&psig=AOvVaw0GGsfItNjXKyA2Si5JuENd&ust=1725392346385000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJju2cGBpYgDFQAAAAAdAAAAABAE'
        })
        expect(res.status).toBe(406)
    })
})

describe('Atualizar /produtos/:id', () => {
    it('Atualizar nome do produto com sucesso', async () => {
        const res = await request(app).post('/produtos/35c20476-6019-4ee1-936a-5bc72fcfaaed').send({
            nome: 'Amigurumi do nicepool'
        })
        expect(res.status).toBe(200)
    })
})

describe('Deletar /produtos', () => {
    it('Deletar produto com sucesso', async () => {
        const res = await request(app).delete('/produtos/35c20476-6019-4ee1-936a-5bc72fcfaaed')
        expect(res.status).toBe(204);
    })
})

