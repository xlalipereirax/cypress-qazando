/// <reference types="cypress" />

import commumPage from '../support/pages/commumPage';
import loginPage from '../support/pages/loginPage';
import { faker } from '@faker-js/faker';

const nameFaker = faker.person.fullName()
const emailFaker = faker.internet.email()

describe('Login', () => {

    beforeEach('Acessar a tela de login', () => {
        commumPage.acessarLogin()
    })

    it('Campo email vazio', () => {
        loginPage.clicarBotaoLogin()
        loginPage.mensagemErro('E-mail inválido.')
    })

    it('Campo email inválido', () => { 
        loginPage.preencherEmailLogin(nameFaker)
        loginPage.clicarBotaoLogin()
        loginPage.mensagemErro('E-mail inválido.')
    })

    it('Campo senha vazio', () => {
        loginPage.preencherEmailLogin(emailFaker)
        loginPage.clicarBotaoLogin()
        loginPage.mensagemErro('Senha inválida.')
    })

    it('Campo senha inválido', () => {
        loginPage.preencherEmailLogin(emailFaker)
        loginPage.preencherSenhaLogin('123')
        loginPage.clicarBotaoLogin()
        loginPage.mensagemErro('Senha inválida.')
    })

    it('Selecionar "Lembrar de mim"', () => {
        loginPage.checkLembrar()

    })

    it('Desmarcar "Lembrar de mim"', () => {
        loginPage.uncheckLembrar()

    })

    it('Login com sucesso', () => {
        loginPage.preencherEmailLogin(emailFaker)
        loginPage.preencherSenhaLogin('123456')
        loginPage.clicarBotaoLogin()

        loginPage.mensagemSucessoLogin(emailFaker)
        
    })
})