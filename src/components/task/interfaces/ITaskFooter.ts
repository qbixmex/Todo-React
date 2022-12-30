import React from 'react';

export interface ITaskFooter {
  id: string;
  status?: string;
  onStatusChange?: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    id: string,
    event: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement>,
  ) => void;
};
