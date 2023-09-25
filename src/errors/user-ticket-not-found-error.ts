import { ApplicationError } from '@/protocols';

export function userTicketNotFoundError(): ApplicationError {
  return {
    name: 'UserTicketNotFoundError',
    message: 'User is not enrolled in the event.',
  };
}
