/// <reference types="cypress" />

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    validarMensagemErro(message) {
        cy.get('.errorLabel')
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(message)

            })

    },

    validarMensagemErro2(message2) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', message2)
    },

    preencherNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    preencherEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(fullName) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${fullName}`)
    }
    
}