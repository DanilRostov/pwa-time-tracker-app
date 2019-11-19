import express from 'express';

const router = express.Router();

router.post('/api/tasks', (req, res) => {
  const task = req.body.task;
  const response = {
    ...task,
    dayId: new Date().toISOString().slice(0,-14),
    id: 'testTaskId',
    isPlanned: false,
    isDone: false,
  };
  res.status(200).send(response);
});

router.put('/api/tasks', (req, res) => {
  const task = req.body;
  const response = {
    ...task,
  };
  res.status(200).send(response);
});

router.delete('/api/tasks', (req, res) => {
  const id = req.query.id;
  const dayId = req.query.dayId;
  const response = { id, dayId };
  res.status(200).send(response);
});

export default router;