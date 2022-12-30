import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.low:
      return 'grey.700';
    case Priority.normal:
      return 'info.light';
    case Priority.high:
      return 'warning.light';
      default:
        return 'grey.900';
  }
};
