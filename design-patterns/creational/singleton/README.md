## Singleton Design Pattern

O design pattern Singleton tem como ideia criar uma classe que gera apenas uma istância do objeto. Não importa quantas vezes for criado ou chamado, todo objeto que irá trazer vai ser a mesma istância do primeiro chamado. Isso no javascript vai funcionar na ideia de que objetos são referenciados, todos os objetos de uma classe singleton vão apontar pra mesma referência da primeira criação.

A classe tem no constructor dois caminhos:
- **No primeiro chamado:** Cria um novo objeto.
- **No segundo e nos demais:** Retorna a mesma referência do objeto criado no primeiro chamado.


### Estrutura

Utilizamos o constructor da classe para fazer o singleton. Basicamente testamos se ele ja existe e se sim, retornamos a instância existente.

Se não entrar nesse if, ou seja, no primeiro acesso, ele passa para o momento de criar essa variavéis. O Job.exists se torna true para validar a criação.  
E o istance recebe **this** que é a referência para o objeto criado naquele momento. A partir dai, todas as chamadas do constructor vão cair no if e retornar a referêcia para aquele objeto.

### Conclusão

Esse design pattern consiste em utilizar a classe para criar apenas uma única instância do objeto e depois retornar sempre essa mesma instância.
