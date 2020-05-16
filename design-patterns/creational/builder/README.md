## Builder Design Pattern

O design pattern Builder resolve o problema de criação de objetos complexos. Por exemplo, em objetos onde alguns parâmetros de criação são outros objetos por si só ou apenas valores que precisam de algum processamento prévio.

### Estrutura

Consiste em retirar do método constructor da classe os parâmetros complexos, criando métodos dentro da classe que são chamados na inicialização do novo objeto.

Neste exemplo, retiramos os parâmetros **companyName** e **setSalary** e adicionamos métodos para adicioná-los no momento da criação do objeto.

Na criação, usamos o new passando os 2 parâmetros que restaram, no caso **jobTitle** e **location** chamando os métodos para fazer o __set__ desses parâmetos no objeto.

Por fim, utilizamos o método **build** para retormarmos o objeto final criado com todos os parâmetros corretos. Nesse passo podemos também utilizar verificações para descobrir se todos os paramêtros estão vindo corretamente, antes de passá-los para o objeto final.

### Conclusão

Esse design pattern consiste, no momento da criação de um objeto complexo, quebrar seus parâmetros em diferentes métodos para criá-los individualmente e depois juntar na criação final.
