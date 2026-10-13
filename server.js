const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Banco de Dados em Memória (Estrutura Simples para o MVP)
let tasks = [
  { id: 1, title: 'Revisar relatório de Arquitetura', status: 'Concluído' },
  { id: 2, title: 'Subir código para o GitHub', status: 'Pendente' }
];

// --- ROTAS DA API ---

// Listar todas as tarefas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Criar nova tarefa
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'O título da tarefa é obrigatório.' });
  }

  const newTask = {
    id: Date.now(),
    title,
    status: 'Pendente'
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Atualizar status da tarefa
app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  task.status = task.status === 'Pendente' ? 'Concluído' : 'Pendente';
  res.json(task);
});

// Deletar tarefa
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id !== parseInt(id));
  res.status(204).send();
});

// Iniciar Servidor
app.listen(PORT, () => {
  console.log(`Servidor EcoTask rodando em http://localhost:${PORT}`);
});
