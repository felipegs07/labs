## Decorator Design Pattern

O design pattern Decorator tem a ideia de alterar objetos em tempo de execução. Imagine que você tenha um objeto que dependendo do andamento do fluxo do software, precisa se adaptar e tomar ações e propriedades diferentes. O decorator altera propriedade e métodos de um objeto.

O design pattern é naturalmente criado sob o ponto de vista do paradigma Orientado a Objetos, porém funciona muito bem no ambiente do *Javascript Moderno* podendo ser usado em um paradigma mais funcional. Até mesmo porque o próprio decorator pode ser visto como uma função pura, já que este recebe parâmetros, faz suas alterações internamente e retorna o novo objeto modificado. 

Inclusive, utilizando um *spread operator* dentro da função, criando um novo objeto a partir do objeto de parâmetro (e não utilizando o parâmetro que é a referência do objeto original, ou seja, mutável) podemos utilizar até mesmo uma visão imutável, tornando a função pura de fato.

No javascript existe uma grande facilidade em alterar objetos, seja diretamente adicionando propriedades e métodos, utilizando *prototype* para os objetos padronizados ou utilizando o método do objeto nativo [Object.defineProperty](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) se você precisa de uma maior definição de aspectos internos de uma propriedade (como configurable, enumerable, writable, ou até mesmo get e set, se você for uma pessoa ousada).

### Estrutura

No exemplo criei um objeto simples e apenas uma função decorator. Essa função recebe o objeto e adiciona uma função nova de maneira direta e retorna o objeto com a nova alteração.


### Conclusão

Esse design pattern consiste em alterar objetos em tempo de execução.
