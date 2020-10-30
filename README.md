# DESAFIO – React Web
A necessidade desse desafio prova o conhecimento do básico ao intermediário contido nos treinamentos para React Web com Redux. O conhecimento a ser analisado envolve a estrutura de código, identação, padrão de projeto, e objetivo simples de solução para o desafio. Segue os pontos relevantes da necessidade e o que deverá ser entregue.

# Pontos Relevantes
- O desafio envolve 2 projetos um para Frontend ( React – Redux – Nodejs ) e Backend ( Nodejs – Express.js – Banco MongoDB ou Mysql)
- Ambos os projetos poderão possuir dependências conforme a necessidade
- O versionamento dos projetos deverão estar em Git de preferência localizados no Github como projetos públicos, para que ao finalizar o projeto, na entrega ser disponibilizado os links para clone, assim contendo um Readme informando como deverá ser executado os comandos para subir os projetos localmente.
- O prazo de entrega deverá ser até o dia 30/10/2020 ( Próxima sexta - feira ). Importante que o desafio deverá ser realizado dentro do horário de expediente na empresa.

# O que deverá ser entregue
Necessitamos para um novo desenvolvimento um sistema que possuirá uma tela de Login, Cadastro de Usuário e Home. 

•	Login
- Para a tela de login deverá possuir os campos de login e senha assim como uma opção para cadastrar usuário. 
- Ao clicar em cadastrar usuário será redirecionado para a tela de ( Cadastro de Usuário ) que possuirá os campos ( Nome, E-mail, Telefone, Senha e Confirmar Senha ) . O cadastro de usuário deverá validar se o usuário já existe e não deixar prosseguir com o cadastro assim dando um feedback para o usuário que está tentando fazer o cadastro com uma mensagem amigável.
- No ato de login ao informar no campo login e senha e clicar em entrar, deverá ser validado os seguintes cenários. Se o usuário não existe, se o login e senha estão errados, sendo que a mensagem a ser apresentada deverá ser a mesma para esses 2 casos. “ Login ou Senha inválidos “.

- Caso o login for efetuado com sucesso, o usuário deverá ser redirecionado para a Home com uma mensagem de boas – vindas. Contendo o Nome, E-mail e Telefone do usuário logado.

•	Home

- Página deverá conter os dados do usuário logado como Nome, E-mail e Telefone. Assim como um botão de Sair  que efetuará o logout do usuário e forçará o usuário para a página de Login

# Requisito fundamental
- A comunicação deverá ser feita entre o frontend e o brackend conforme as requisições, como cadastro de usuário e login, também deverá manter o usuário logado por até 10 minutos, assim controlando se o usuário está logado, ou seja, após efetuado o login. Será feito um teste para a página ser recarregada com um F5 ou Atualizar e deverá apresentar a página Home com os dados do usuário logado.
- Após 10 minutos de inatividade o usuário será deslogado e deverá apresentar a página de Login
