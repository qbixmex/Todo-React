import React from 'react';

export interface ITaskFooter {
  id: string;
  status?: string;
  onStatusChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => void;
};
