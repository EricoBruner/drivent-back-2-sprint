import { ApplicationError } from '@/protocols';

export function userEnrollmentNotFoundError(): ApplicationError {
  return {
    name: 'UserEnrollmentNotFoundError',
    message: 'User is not enrolled in the event.',
  };
}
