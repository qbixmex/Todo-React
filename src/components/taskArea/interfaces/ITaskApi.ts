import { Priority } from './../../createTaskForm/enums/Priority';
import { Status } from '../../createTaskForm/enums/Status';

export interface ITaskApi {
  id: string;
  title: string;
  description: string;
  data: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
