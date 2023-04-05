# teste-automatizado-com-cypress-para-mobile

Cenário 1
Teste de login inválido:
Descrição: Testa se é possível fazer login com credenciais inválidas.
Passos:
Insere um nome de usuário inválido.
Insere uma senha inválida.
Clica no botão de login.
Verificação:
Verifica se a mensagem de erro "Epic sadface: Username and password do not match any user in this service" é exibida na página de login.

Cenário 2
Teste de adição de produto ao carrinho:
Descrição: Testa se é possível adicionar um produto ao carrinho.
Passos:
Faz login com um usuário válido.
Clica no botão para adicionar um produto ao carrinho.
Verificação:
Verifica se o ícone do carrinho na barra de navegação exibe o número correto de itens.

Cenário 3
Teste de finalização de compra:
Descrição: Testa se é possível finalizar uma compra com sucesso.
Passos:
Faz login com um usuário válido.
Adiciona dois produtos ao carrinho.
Clica no botão de checkout.
Insere as informações de envio.
Clica no botão de finalizar compra.
Verificação:
Verifica se a página de confirmação de compra é exibida e se contém a mensagem "THANK YOU FOR YOUR ORDER".]
