import { createTicket, getTicketTypes, getUserTickets } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/', getUserTickets)
  .get('/types', getTicketTypes)
  .post('/', createTicket);

export { ticketsRouter };
