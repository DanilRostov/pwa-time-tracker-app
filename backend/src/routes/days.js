import express from 'express';

import days from '../../mocks/days';
import Days from '../utils/days';

const router = express.Router();

router.get('/api/days', (req, res) => {
  const dateFrom = new Date(req.query.dateFrom);
  const dateTo = new Date(req.query.dateTo);
  const daysClass = new Days(dateFrom, dateTo, days);
  const daysList = daysClass.getDaysListByDate();
  res.status(200).send(daysList);
});

router.put('/api/days', (req, res) => {
  const day = req.body;
  res.status(200).send(day);
});

export default router;