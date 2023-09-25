import { ApplicationError } from '@/protocols';

export function ticketTypeIdNotFoundError(): ApplicationError {
  return {
    name: 'TicketTypeIdNotFoundError',
    message: 'This user does not have any tickets!',
  };
}
