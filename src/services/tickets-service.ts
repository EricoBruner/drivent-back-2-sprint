import { ticketsRepository } from '@/repositories';
import { TicketType } from '@prisma/client';

async function getTicketTypes(): Promise<TicketType[]> {
  const ticketTypes = await ticketsRepository.getTicketTypes();

  return ticketTypes;
}

export const ticketsService = {
  getTicketTypes,
};
