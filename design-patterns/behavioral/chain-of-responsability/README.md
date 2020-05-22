## Chain of Responsability Design Pattern

O design pattern Chain of Responsability (*CoR*) tem a ideia de criar literalmente uma corrente com os métodos de um objeto. Dessa forma conseguimos chamar um método após o outro, em linha.


### Estrutura

No exemplo criado temos a classe **Calculator**, este objeto tem 3 métodos, desses, 2 seguem o *CoR*. Para criar a corrente de métodos, é necessário apenas que após a execução do código interno de cada método, ele retorne a instância do objeto em questão, utilizando o **this**.

Observe que não retornando o **this.value**, pois isto apenas retornaria o valor da soma da calculadora. Retornamos apenas o **this** que aponta para a instância daquele objeto.

Após isso, conseguimos acessar o objeto de forma direta, então conseguimos chamar outro método daquele mesmo objeto, seguindo assim por várias chamadas.

Esse design pattern é poderoso e utilizado em grandes bibliotecas e frameworks JavaScript. Um deles, o saudoso *JQuery*.

### Conclusão

Este design pattern consiste em criar uma corrente de métodos retornando a istância do objeto.
