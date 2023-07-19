import { AppError } from './app-error';
export class NotFoundError extends AppError {
  // I want this class to derive from the AppError bc this is the kind of application error that is more specific so we add the 'extends AppError' part
}
