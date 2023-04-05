describe('Teste automatizado mobile do site saucedemo.com', () => {
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.viewport('iphone-6')
    cy.visit('https://www.saucedemo.com/');
     // Aguarda 60 segundos para a página de produtos carregar
     cy.wait(600000000)
  });

  it('Deve fazer login com sucesso', () => {
    // Insere o nome de usuário
    cy.get('#user-name').type('standard_user');
    
    // Insere a senha
    cy.get('#password').type('secret_sauce');
    
    // Clica no botão de login
    cy.get('#login-button').click();

     // Aguarda alguns segundos 
    cy.wait(60000000)
    
    // Verifica se foi redirecionado para a página de produtos
    cy.url().should('include', '/inventory.html');
    
    // Verifica se o nome do usuário está correto na página de produtos
    cy.get('.nav-menu a').should('contain.text', 'STANDARD USER');

     // Aguarda alguns segundos 
     cy.wait(60000000)
  });

  it('Deve adicionar um produto ao carrinho', () => {

    // Clica no botão para adicionar o primeiro produto ao carrinho
    cy.get('.inventory_item:nth-child(1) .btn_inventory').click();

    // Verifica se o ícone do carrinho na barra de navegação exibe 1 item
    cy.get('.shopping_cart_badge').should('have.text', '1');

     // Aguarda alguns segundos 
     cy.wait(600000000)
  });

  it('Deve finalizar a compra', () => {
    // Faz login com um usuário válido
   

    // Adiciona dois produtos ao carrinho
    cy.get('.inventory_item:nth-child(1) .btn_inventory').click();
    cy.get('.inventory_item:nth-child(2) .btn_inventory').click();

    // Clica no ícone do carrinho para ir para a página de checkout
    cy.get('.shopping_cart_badge').click();

    // Clica no botão de checkout
    cy.get('#checkout').click();

     // Aguarda 60 segundos para a página de produtos carregar
     cy.wait(6000000)

    // Insere as informações de envio
    cy.get('#first-name').type('lucas');
    cy.get('#last-name').type('silva');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();

    // Verifica se a página de resumo do pedido é exibida
    cy.url().should('include', '/checkout-step-two.html');

    // Clica no botão de finalizar compra
    cy.get('#finish').click();

     // Aguarda alguns segundos 
     cy.wait(6000000)

    // Verifica se a página de confirmação de compra é exibida
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
  });
});
