/// <reference types="cypress" />

export default {
    clicarBotaoLogin() {
        cy.get('#btnLogin')
            .click()
    },

    mensagemErro(mensagemErroLogin) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagemErroLogin)

    },

    preencherEmailLogin(emailLogin) {
        cy.get('#user')
            .type(emailLogin)
    },

    preencherSenhaLogin(senhaLogin) {
        cy.get('#password')
            .type(senhaLogin)
    },

    checkLembrar() {
        cy.get('#materialUnchecked')
            .check()
            .should('be.checked')

    },

    uncheckLembrar() {
        cy.get('#materialUnchecked')
            .check()
            .uncheck()
            .should('not.be.checked')
        
    },

    mensagemSucessoLogin(mensagem) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('have.text', `Olá, ${mensagem}`)

    }


}