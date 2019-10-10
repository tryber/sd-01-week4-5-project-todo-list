Iniciando o projeto To do List.

Sua lista deve possuir um título, por exemplo “Minha Lista de Tarefas”. Esse título não varia de acordo com o conteúdo da lista. Não confunda esse título com o título da página, que deve aparecer dentro da tag head.

Abaixo do título deve haver um pequeno e discreto parágrafo explicando o funcionamento da lista para o usuário. Exemplo: “Clique duas vezes em um item para marcá-lo como completo”.

Deve haver um input onde o usuário poderá digitar o nome do item que deseja adicionar à lista.

Ao lado do input deve haver um botão. Ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

Logo abaixo, deverá vir sua lista de tarefas. Os itens devem ser ordenados por ordem de criação.

Ao passar o mouse sobre um botão o ícone do mouse deve mudar para uma mãozinha.

Ao clicar em um item ele deve ser selecionado. Estilize o item selecionado de forma a se destacar dos demais.

Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

Abaixo da lista deve haver um botão que quando clicado deve apagar todos os items da lista.

Ao lado do botão acima deverá haver um outro botão que quando clicado remove somente os elementos completos da sua lista.

Você deve usar CSS para estilizar sua lista. Não utilize bibliotecas como Bootstrap. Queremos que você mesmo estilize o seu site. Contudo, não gaste muito tempo nisso. Uma lista de tarefas visualmente simples e funcional tem muito mais valor que uma que é bela mas não funciona. Você poderá gastar tempo deixando sua lista visualmente mais agradável ao final, caso sobre tempo, ou como atividade extra.

Bônus

Faça com que ao passar o mouse sobre um botão ele mude sua cor para um tom levemente mais claro, como forma de destacá-lo em relação aos demais.

Adicione um botão que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava. Dica: Leia sobre Local Storage na seção de recursos adicionais

Como sua lista é ordenada, o que acontece se você esquecer de um item? Você teria que apagar a lista e começar tudo de novo, pois só é possível inserir um item no final, certo? Adicione dois botões que permitam mover o item selecionado para cima ou para baixo.

Pontos importantes:

Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no DOM? Você já possui todas as habilidades necessárias para fazer isso.

Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

Se você inserir um item errado na lista não é possível removê-lo. Você precisa apagar a lista e começar de novo! 😱 Adicione um botão que, quando clicado, remove o item selecionado.