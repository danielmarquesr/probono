import httpClient from '@/api/httpClient';

const indexLawsuitOfClient = async (body) => {
  const endpoint = '/lawsuits/client';
  return httpClient.post(endpoint, body);
};

const indexLawsuit = async (body) => {
  const endpoint = '/lawsuits/lawyer';
  return httpClient.post(endpoint, body);
};

export default {
  indexLawsuitOfClient,
  indexLawsuit
};
