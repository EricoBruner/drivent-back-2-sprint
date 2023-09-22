import { prisma } from '@/config';
import { TicketType } from '@prisma/client';

async function getTicketTypes(): Promise<TicketType[]> {
  const ticketTypes = await prisma.ticketType.findMany();

  return ticketTypes;
}

export const ticketsRepository = {
  getTicketTypes,
};
