## Adapter Design Pattern

O design pattern Adapter tem como função juntar duas classes, adaptando uma a outra. A ideia é, se você tem uma clase antiga, outra nova e você precisa usar a API pública de uma, mesmo de por baixo dos panos você esteja chamando os métodos de outra, o Adapter serve para ser essa classe de mescla.

Você junta as duas classes, adaptando a API e as funções do jeito que for necessário.


### Estrutura

Nesse exemplo criei uma classe antiga de envio de mensagem que apenas usa um método **send** e o tipo de mensagem (sms ou call) é passado como parâmetro.

Depois criei uma nova classe com uma nova API pública, nela existe diferentes métodos para cada tipo de mensagem. Agora imagine que essa classe antiga esteja sendo usada numa integração complexa, que por enquanto, ainda não pode ser atualizada. Todas as chamadas continuarão sendo feitas pro método **send**, mas você quer atualizar como de fato a mensagem é enviada.

Para isso criamos uma classe de ADAPTER. Ela instancia o objeto da nova classe de mensagem, pórem, só cria o método **send** do mesmo jeito que era na API antiga. A diferença é que na chamada do método, ele internamente chama os novos métodos da nova API.

Utilizando essa nova classe para instânciar, toda chamada do método **send**, no fundo ta chamando os métodos da nova API. Assim, quando o método **send** é chamado, passando o parâmetro "sms", por exemplo, o método que verdadeiramente será chamado é o **sendSMS** da nova API. De mandeira inteiramente transparente.

### Conclusão

Esse design pattern consiste em mesclar classes adaptando suas APIs e métodos internos.
