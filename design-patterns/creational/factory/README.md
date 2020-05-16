## Factory Design Pattern

O design pattern Builder resolve o problema de criação de objetos. Porém, o faz com a utilização de uma função ou método que recebe pode receber parâmetros e retorna o objeto instanciado.

### Estrutura

No código exemplo utilizei uma abordagem mais alinhada ao JavaScript moderno, a utilização de funções e objetos literais na criação das estruturas, ao invés de usar q "Orientação a Objeto" e o **class** existente na linguagem.

No fim a idéia é a mesma: Utilizar uma função que pode receber parâmetros, vai executar o trabalho de criação do objeto, podendo inclusive fazer validações e outros tipos de processamento e depois retorna o objeto criado.

Nessa abordagem implementada é interessante notar a questão do isolamento dos métodos interno e o desacoplamento que esse pattern permite. Essa forma mais funcional, inclusive, é utilizada em muitas das bibliotecas modernas de JavaScript como Redux e outras do ecossistema React.

### Conclusão

Esse design pattern consiste em utilizar uma função ou método para criar um objeto.
