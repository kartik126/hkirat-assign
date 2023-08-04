import express, { Request, Response } from 'express';
import { authenticateJwt, SECRET } from '../middleware/index';
import { Todo } from '../db';
const router = express.Router();

router.post('/todos', authenticateJwt, async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const done = false;
  const userId = req.userId;

  const newTodo = new Todo({ title, description, done, userId });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new todo' });
  }
});

router.get('/todos', authenticateJwt, async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const todos = await Todo.find({ userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve todos' });
  }
});

router.patch('/todos/:todoId/done', authenticateJwt, async (req: Request, res: Response) => {
  const { todoId } = req.params;
  const userId = req.userId;

  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: todoId, userId },
      { done: true },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

export default router;
