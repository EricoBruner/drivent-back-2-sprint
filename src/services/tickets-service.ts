import { TicketType } from '@prisma/client';
import { userEnrollmentNotFoundError } from '@/errors';
import { ticketTypeIdNotFoundError } from '@/errors/ticket-type-id-not-found-error';
import { TicketFormatCreate } from '@/protocols';
import { enrollmentRepository, ticketsRepository } from '@/repositories';

export async function createTicket(ticketTypeId: number, userId: number): Promise<TicketFormatCreate> {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw userEnrollmentNotFoundError();

  if (!ticketTypeId) throw ticketTypeIdNotFoundError();

  const ticket = await ticketsRepository.createTicket(ticketTypeId, enrollment.id);

  return ticket;
}

async function getTicketTypes(): Promise<TicketType[]> {
  const ticketTypes = await ticketsRepository.getTicketTypes();

  return ticketTypes;
}

async function getUserTickets(userId: number): Promise<TicketFormatCreate> {
  const ticket = await ticketsRepository.getUserTickets(userId);

  return ticket;
}

export const ticketsService = {
  getTicketTypes,
  createTicket,
  getUserTickets,
};
