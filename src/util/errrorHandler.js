import { toast } from 'sonner';

export const errorToastHandler = (error, functionName) => {
  const { status, data } = error;
  const { message } = data.error;
  switch (functionName) {
    case 'signup':
      switch (status) {
        case 400:
          toast.error('Error signing up', {
            description: message,
          });
          break;
        case 404:
          toast.error('Error signing up', {
            description: message,
          });
          break;
        case 401:
          toast.error('Error signing up', {
            description: message,
          });
          break;
        case 403:
          toast.error('Error signing up', {
            description: message,
          });
          break;
        case 409:
          toast.error('Error signing up', {
            description: message,
          });
          break;
        case 500:
          toast.error('Error signing up', {
            description: message,
          });
          break;
        default:
          toast.error('Oopps... Something went wrong');
          break;
      }
      break;
    case 'login':
      switch (status) {
        case 400:
          toast.error('Error while login', {
            description: message,
          });
          break;
        case 404:
          toast.error('Error while login', {
            description: message,
          });
          break;
        case 401:
          toast.error('Error while login', {
            description: message,
          });
          break;
        case 403:
          toast.error('Error while login', {
            description: message,
          });
          break;
        case 409:
          toast.error('Error while login', {
            description: message,
          });
          break;
        case 500:
          toast.error('Error while login', {
            description: message,
          });
          break;
        default:
          toast.error('Oopps... Something went wrong');
          break;
      }
      break;
    case 'verifyuser':
      switch (status) {
        case 400:
          toast.error('Error verifying user', {
            description: message,
          });
          break;
        case 404:
          toast.error('Error verifying user', {
            description: message,
          });
          break;
        case 401:
          toast.error('Error verifying user', {
            description: message,
          });
          break;
        case 403:
          toast.error('Error verifying user', {
            description: message,
          });
          break;
        case 409:
          toast.error('Error verifying user', {
            description: message,
          });
          break;
        case 500:
          toast.error('Error verifying user', {
            description: message,
          });
          break;
        default:
          toast.error('Oopps... Something went wrong');
          break;
      }
      break;
    case 'createEvent':
      switch (status) {
        case 400:
          toast.error('Error creating event', {
            description: message,
          });
          break;
        case 404:
          toast.error('Error creating event', {
            description: message,
          });
          break;
        case 401:
          toast.error('Error creating event', {
            description: message,
          });
          break;
        case 403:
          toast.error('Error creating event', {
            description: message,
          });
          break;
        case 409:
          toast.error('Error creating event', {
            description: message,
          });
          break;
        case 500:
          toast.error('Error creating event', {
            description: message,
          });
          break;
        default:
          toast.error('Oopps... Something went wrong');
          break;
      }
      break;
    case 'getAllEvents':
      switch (status) {
        case 400:
          toast.error('Error fetching all events', {
            description: message,
          });
          break;
        case 404:
          toast.error('Error fetching all events', {
            description: message,
          });
          break;
        case 401:
          toast.error('Error fetching all events', {
            description: message,
          });
          break;
        case 403:
          toast.error('Error fetching all events', {
            description: message,
          });
          break;
        case 409:
          toast.error('Error fetching all events', {
            description: message,
          });
          break;
        case 500:
          toast.error('Error fetching all events', {
            description: message,
          });
          break;
        default:
          toast.error('Oopps... Something went wrong');
          break;
      }
      break;
    case 'getEvent':
      switch (status) {
        case 400:
          toast.error('Error fetching event', {
            description: message,
          });
          break;
        case 404:
          toast.error('Error fetching event', {
            description: message,
          });
          break;
        case 401:
          toast.error('Error fetching event', {
            description: message,
          });
          break;
        case 403:
          toast.error('Error fetching event', {
            description: message,
          });
          break;
        case 409:
          toast.error('Error fetching event', {
            description: message,
          });
          break;
        case 500:
          toast.error('Error fetching event', {
            description: message,
          });
          break;
        default:
          toast.error('Oopps... Something went wrong');
          break;
      }
      break;
    default:
      toast.error('Oopps... Something went wrong');
      break;
  }
};
