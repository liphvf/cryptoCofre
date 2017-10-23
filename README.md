# CryptoCofre

 ## Descrição das versões dos softwares utilizados
- VueJS
- NodeJS
- MongoDB

## Arquitetura da solução

Modulo UI
- Deverá fornecer a parte gráfica para interação com o sistema.

Modulo de autenticação.
- Tem como objetivo garantir a autenticação do usuário.
- Deve permitir a recuperação de senha.

Modulo de criptografia:
- Tem como objetivo criptografar e descriptografar senhas antes de ir ou retornar ao banco de dados.

Modulo de banco
- Deverá realizar o **CRUD** de usuário, senha e log. 

Modulo de log
- Tem como objetivo registrar a movimentação no cofre de senhas.

**Interações entre os modulos:**

- Fluxo de login: `UI > Autenticação > Criptografia > Banco`

- Fluxo de log: `Autenticação > Log > Banco`

## Descrever o plano de testes que pretende executar
- Tempo de criptografia
- Manipulação de request para obter acessoa senha.