import httpClient from '@/api/httpClient';

const getUserInfo = () => {
  const endpoint = '/users/user-info';
  return httpClient.get(endpoint);
};

export default { getUserInfo };
