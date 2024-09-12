/// <reference types="cypress" />

import commumPage from '../support/pages/commumPage'
import cadastroUsuarioPage from '../support/pages/cadastroUsuarioPage'
import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {

    beforeEach('Acessar tela de cadastro', () => {
        commumPage.acessarCadastroUsuario()  
    })

    it('Campo nome vazio', () => {
        cadastroUsuarioPage.clicarCadastrar()
        cadastroUsuarioPage.validarMensagemErro('O campo nome deve ser prenchido')
        cadastroUsuarioPage.validarMensagemErro2('O campo nome deve ser prenchido') //alternativa
    })

    it('Campo email vazio', () => {
        cadastroUsuarioPage.preencherNome(faker.person.fullName())
        cadastroUsuarioPage.clicarCadastrar()
        cadastroUsuarioPage.validarMensagemErro2('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo email inválido', () => {
        cadastroUsuarioPage.preencherNome(faker.person.fullName())
        cadastroUsuarioPage.preencherEmail(faker.person.firstName())
        cadastroUsuarioPage.clicarCadastrar()
        cadastroUsuarioPage.validarMensagemErro2('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastroUsuarioPage.preencherNome(faker.person.fullName())
        cadastroUsuarioPage.preencherEmail(faker.internet.email())
        cadastroUsuarioPage.clicarCadastrar()
        cadastroUsuarioPage.validarMensagemErro2('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválida', () => {
        cadastroUsuarioPage.preencherNome(faker.person.fullName())
        cadastroUsuarioPage.preencherEmail(faker.internet.email())
        cadastroUsuarioPage.preencherSenha('123')
        cadastroUsuarioPage.clicarCadastrar()
        cadastroUsuarioPage.validarMensagemErro2('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {

        const name = await faker.person.fullName() //código só vai rodar, depois que gerar esse

        cadastroUsuarioPage.preencherNome(name)
        cadastroUsuarioPage.preencherEmail(faker.internet.email())
        cadastroUsuarioPage.preencherSenha('123456')
        cadastroUsuarioPage.clicarCadastrar()
        cadastroUsuarioPage.validarMensagemSucesso(name)
    })
})