class Task {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = false;
    }
}

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskNome = taskInput.value;
    if (taskNome) {
        const novaTask = new Task(taskNome, '');
        tasks.push(novaTask);
        AtualizarTaskLista();
        taskInput.value = '';
    }
}

function AlterarStatusTask(index) {
    tasks[index].status = !tasks[index].status;
    AtualizarTaskLista();
}

function removerTask(index) {
    tasks.splice(index, 1);
    AtualizarTaskLista();
}

function AtualizarTaskLista() {
    const taskLista = document.getElementById('taskLista');
    taskLista.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.status ? 'complemento' : '';
        taskItem.innerHTML = `
            ${task.nome}
            <div>
                <button onclick="AlterarStatusTask(${index})">${task.status ? 'Desmarcar' : 'Concluir'}</button>
                <button onclick="removerTask(${index})">Remover</button>
            </div>
        `;
        taskLista.appendChild(taskItem);
    });
}
