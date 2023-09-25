import { Response } from 'express';
import httpStatus from 'http-status';
import { userEnrollmentNotFoundError } from '@/errors';
import { userTicketNotFoundError } from '@/errors/user-ticket-not-found-error';
import { AuthenticatedRequest } from '@/middlewares';
import { enrollmentRepository } from '@/repositories';
import { ticketsService } from '@/services';

export async function createTicket(req: AuthenticatedRequest, res: Response) {
  const ticketTypeId = req.body.ticketTypeId as number;
  const userId = req.userId;

  const ticket = await ticketsService.createTicket(ticketTypeId, userId);

  res.status(httpStatus.CREATED).send(ticket);
}

export async function getTicketTypes(_req: AuthenticatedRequest, res: Response) {
  const ticketTypes = await ticketsService.getTicketTypes();

  res.status(httpStatus.OK).send(ticketTypes);
}

export async function getUserTickets(req: AuthenticatedRequest, res: Response) {
  const userId = req.userId;

  const enrollments = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollments) throw userEnrollmentNotFoundError();

  const ticket = await ticketsService.getUserTickets(userId);
  if (!ticket) throw userTicketNotFoundError();

  return res.status(httpStatus.OK).send(ticket);
}
