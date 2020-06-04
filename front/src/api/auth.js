import httpClient from '@/api/httpClient';

const login = async (body) => {
  const endpoint = '/login';
  httpClient.post(endpoint, body)
    .then(res => {
      localStorage.token = res.data.token;
    });
};

const registerClient = async (body) => {
  const endpoint = '/clients';
  httpClient.post(endpoint, body)
    .then(res => {

    });
};

const registerLawyer = async (body) => {
  const endpoint = '/lawyers';
  httpClient.post(endpoint, body)
    .then(res => {

    });
};

export default {
  login,
  registerClient,
  registerLawyer
};
