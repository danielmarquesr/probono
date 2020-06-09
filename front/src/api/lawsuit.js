import httpClient from '@/api/httpClient';

const createLawsuit = (body) => {
  const endpoint = '/lawsuits';
  return httpClient.post(endpoint, body);
};

const indexLawsuitOfClient = async (body) => {
  const endpoint = '/lawsuits/client';
  return httpClient.post(endpoint, body);
};

const indexLawsuitOfLawyer = async (body) => {
  const endpoint = '/lawsuits/lawyer';
  return httpClient.post(endpoint, body);
};

export default {
  createLawsuit,
  indexLawsuitOfClient,
  indexLawsuitOfLawyer
};
