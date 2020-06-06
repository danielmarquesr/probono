import httpClient from '@/api/httpClient';

const loginClient = async (body) => {
  const endpoint = '/auth/login/client';
  return httpClient.post(endpoint, body);
};

const loginLawyer = async (body) => {
  const endpoint = '/auth/login/lawyer';
  return httpClient.post(endpoint, body);
};

const registerClient = async (body) => {
  const endpoint = '/clients';
  return httpClient.post(endpoint, body);
};

const registerLawyer = async (body) => {
  const endpoint = '/lawyers';
  return httpClient.post(endpoint, body);
};

export default {
  loginClient,
  loginLawyer,
  registerClient,
  registerLawyer
};
