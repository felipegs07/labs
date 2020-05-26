## Command Design Pattern

O design pattern Command tem a ideia de gerar uma classe de **Command** que é usado para executar e salvar todos os métodos e ações gerados no software.

Esse design pattern é usado para salvar coisas que foram feitas e até mesmo ser usado em funcionalidades de *time-travel*. Um exemplo de funcionalidade que usa o Command é o *debugging* do *Redux*, que cria o time-travel e possibilita ir e voltar na execução dos *actions*.

### Estrutura

No exemplo, criamos uma classe chamada **Command** que em seu **constructor** recebe uma instância do objeto que será usado para monitorar as execuções. Depois criamos o *array* que guardará os comandos.

Existem também o método **execute**, que recebe o método que será executado e guarda no *array* de comandos e depois executa o método.

Toda a execução do objeto em questão será feito a partir dessa classe de **Command**.

Um ponto interessante é as formas de adaptar isso. De uma maneira funcional, o Command pode ser uma *function* que recebe um objeto e chama seus métodos, chamando outra *function* que guarda os comandos na lista.

Falando em lista, no exemplo usamos uma lista simples, que apenas guarda o nome dos métodos executados. Podemos, porém, criar algo muito mais complexo. 

Neste exemplo, poderiamos criar um *array* de objetos, onde poderiamos guardar o valor inicial, valor de parâmetro, valor final e o método.

Com isso, pederiamos iterar esse *array* podendo retroceder e avançar cada etapa da execução do software, pois teriamos toda o caminho para isto. Quando pensamos nas aplicações reais com esse design pattern, pensamos nisso.

### Conclusão

Este design pattern consiste em criar um método para guardar todos os comandos executados por um objeto.
