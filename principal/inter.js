
function adicionarTarefa() {
    let input = document.getElementById('tarefas')
    if(!input.value)
    {
         alert('Digite alguma tarefa para inserir na lista')
    }
    else{
    var inputTarefa = document.getElementById("tarefas");
    var tarefa = inputTarefa.value;
    inputTarefa.value = "";

    var listaTarefas = document.getElementById("lista-tarefas");
    var novoItemLista = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Este codigo estava apagando as tarefas quando o checkbox for pressionado.
    //checkbox.onclick = function() {
    //    listaTarefas.removeChild(novoItemLista);
    //}
    }
    novoItemLista.appendChild(checkbox);
    novoItemLista.appendChild(document.createTextNode(tarefa));
    listaTarefas.appendChild(novoItemLista);
}

