PROJETO TO-DO LIST
-por Mateus Talles
Link na GitHub Pages: mateustalles.github.io/projetos/todo-list/

Olá, eis aqui o último projeto de Javascript, que envolve
criar uma lista de tarefas, ou "To-Do" List com algumas
interações em Javascript.

Na nova versão, todo o código está refatorado, sem declarações
de variável em loops, usando funções locais e com idioma e es-
paçamento uniformizado, além de ter substituido a estrutura da
função responsável pelos padrões de clique e seleção em switch
conforme sugerido pelo Alberto! E o cursor se transforma em
mãozinha sobre os botões! :+1:

Também é possível agora selecionar as atividades completas, bas-
tando clicar 2x no item para selecionar, e depois clicar apenas
1x e esperar 1 segundo para o item se tornar selecionado.

Neste projeto também fiz todos os bônus, tentando sempre 
colocar features adicionais, por exemplo:

- O armazenamento local também armazena as classes dos items
da lista, isto é, se estão selecionados ou se estão marcados
como completos.

-Botão que remove todo o armazenamento local.

-Os items podem ser movidos até o limite da lista que são
automaticamente transferidos para o topo ou para base, a
depender do caso.

-Para desmarcar um item dado como completado, o usuário pre-
cisa realmente dar um duplo-clique dentro de 1 segundo, pois
usei o recurso timeout para dar mais realismo à atividade.

-Dois botões de remover a tarefa selecionada, um que remove
apenas na lista, outro que também remove no LocalStorage man-
tendo a ordem correta.

IMPORTANTE: Sempre que alterar a lista sem usar o botão supra-
citado, lembre-se de salvá-la, ou a ordem ficará errada quando
você atualizar.

Enfim, por enquanto é isto que deu para fazer! Espero que 
curtam!!!
