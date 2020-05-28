## Strategy Design Pattern

O design pattern Strategy tem a ideia de criar uma série de estratégias para lidar com algum problema. Basicamente um método ou função que recebe parâmetros diversos e baseado em cada um deles, decide qual estratégia seria melhor aplicar.

Em uma forma mais Orientada a Objeto, normalmente existe uma classe com algum métodos que recebe as diversar opções, ou estratégias, que são outros objetos. Dentro desse método, ele atua com todos da mesma forma, normalmnte chamando um método padrão ou puxando algum atributo comum a todos.

Também existe uma forma mais *JavaScript Moderna* de aplicar. No caso normalmente temos uma função que recebe comandos diferentes, mas precisa saber de que forma atuar a partir disso. Nesse caso normalmente existe um objeto com todos os **strategies** e esse objeto é usado, chamando o método ideal para aquela execução, baseado no parâmetro recebido nessa função.

Vamos a um exemplo:

### Estrutura

Neste exemplo declaramos 3 funções, que são as diferentes **Strategies**. Criamos um objeto que junta essas funções logo em seguida, atribuindo chaves para cada um desses, os valores sendo as funções declaradas para cada **strategy**.

Por fim temos a função, ela recebe qual opção de strategy deve seguir e chama o método em questão, primeiro verificando se ele existe (para garantir segurança na execução) e se existe, executa o método.

Dessa forma, ao passar diferentes parâmetros, a função se encarrega de chamar o **strategy** adequado para essa situação.


### Conclusão

Este design pattern consiste em utilizar diferentes métodos baseados no parâmetro dado, chamando a melhor estratégia baseado nisso.
