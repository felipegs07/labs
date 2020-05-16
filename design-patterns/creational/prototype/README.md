## Prototype Design Pattern

O design pattern Prototype tem a ideia de criar novos objetos a partir da orientação a protótipos, utilizando um outro objeto já instanciado como padrão e clonando suas propriedades e métodos, algo similar a herança em classes. O JavaScript é de fato uma linguagem com prototype como algo nativo, sendo muito simples implementar esse pattern.

Um ponto interessante de se notar sobre o prototype em JavaScript é que, toda a orientação a objetos que é feito com a linguagem, incluindo as **class** que vieram nas ultimas versões são apenas uma **sugar syntax** que esconde que nos bastidores da linguagem, a "orientação a objetos" não existe de fato. O que existe é a utilização de prototype para simular uma herança e utilização de **class** para estruturar isso.

Por isso muitos autores e estudiosos da linguagem desaconselham a utilização do paradigma Orientado a Objetos na construção de softwares reais.


### Estrutura

O Exemplo é simples:  
Existe um objeto literal instanciado que é usado como parâmetro da função **create** do Object. Esse método cria um novo objeto a partir do prótotipo do objeto passado como parâmetro, atribuindo esse objeto como protótito do novo objeto criado.

Depois esse novo objeto é retornado. No exemplo guardamos isso numa constante.

Para comprovar a ligação de protótipos, comparamos o **__proto__** do objeto **myOwnComputer** com o objeto **Computer**, o retorno é true demonstrando que a refêrencia de memória usada no **__proto__** do novo objeto **myOwnComputer** é o protótipo **Computer**.

### Conclusão

Esse design pattern consiste em utilizar protótipo para criar um objeto.
