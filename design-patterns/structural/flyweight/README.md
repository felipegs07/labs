## Flyweight Design Pattern

O design pattern Flyweight tem a ideia de otimizar recursos, trazendo leveza (flyweight) para a execução do sistema. A maneira de otimizar é a reutilização de objetos, para isso utilizamos outro design pattern, o *Factory* que é utilizado para gerar objetos. 

### Estrutura

No exemplo criado utilizamos uma *Factory* para criação de produtos, nessa *Factory* o pattern de Flyweight é colocado. Basicamente salvamos um *array* com os objetos criados anteriormente e no momento da criação de um novo objetos comparamos e verificados se um objeto "igual" já foi criado.

Nesse caso utilizamos o **title** para comparar. A ideia é que se um produto com aquele nome já existe, não existe razão para ter outro objeto igual. Nesse caso é retornado a instância desse objeto já existente.

No caso de um objeto que não existe similares, um novo é gerado. Adicionamos esse objeto na lista de produtos (o *array* **productList**) para futura utilização na comparação feita na criação de objetos.

Assim quando um objeto que não existe similares é criado, uma nova instância é retornada.

Se um objeto com alguma igualdade importante tenta ser criado, retornamos o objeto já instânciado, evitando o consumo de processamento, memória e recursos da linguagem para a criação.


### Conclusão

Esse design pattern consiste em otimizar o desempenho do software reciclando objetos quando possível.
