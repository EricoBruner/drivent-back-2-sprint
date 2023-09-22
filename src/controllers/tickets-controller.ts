import { AuthenticatedRequest } from '@/middlewares';
import { ticketsService } from '@/services';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getTicketTypes(_req: AuthenticatedRequest, res: Response) {
  const ticketTypes = await ticketsService.getTicketTypes();

  res.status(httpStatus.OK).send(ticketTypes);
}
