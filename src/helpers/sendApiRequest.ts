type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const returnCorrectRequest = (
  method: Method,
  data: unknown
): RequestInit => {
  if (method === 'GET') {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const sendApiRequest = async <T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> => {
  const response = await fetch(
    url,
    returnCorrectRequest(method, data),
  );

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return (await response.json()) as Promise<T>;
};
