import { prisma } from '@/config';
import { TicketFormatCreate } from '@/protocols';
import { TicketStatus, TicketType } from '@prisma/client';

async function createTicket(ticketTypeId: number, enrollmentId: number): Promise<TicketFormatCreate> {
  return await prisma.ticket.create({
    data: {
      enrollmentId: enrollmentId,
      ticketTypeId: ticketTypeId,
      status: TicketStatus.RESERVED,
    },
    include: { TicketType: true },
  });
}

//async function getTicketTypeById(id: number): Promise<TicketType> {
//  return await prisma.ticketType.findUnique({ where: { id } });
//}

async function getTicketTypes(): Promise<TicketType[]> {
  const ticketTypes = await prisma.ticketType.findMany();

  return ticketTypes;
}

async function getUserTickets(userId: number): Promise<TicketFormatCreate> {
  const ticket = await prisma.ticket.findFirst({
    where: { AND: { Enrollment: { userId } } },
    include: { TicketType: true },
  });

  return ticket;
}

export const ticketsRepository = {
  getTicketTypes,
  // getTicketTypeById,
  createTicket,
  getUserTickets,
};
