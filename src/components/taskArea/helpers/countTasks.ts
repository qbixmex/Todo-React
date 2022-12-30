import { ITaskApi } from '../interfaces/ITaskApi';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';

export const countTask = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) return 0;

  const totalTasks = tasks.filter(
    (task) => task.status === status
  );

  return totalTasks.length;
};
