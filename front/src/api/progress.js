import httpClient from '@/api/httpClient';

const createProgress = (body) => {
  const endpoint = '/progresses';
  return httpClient.post(endpoint, body)
};

const indexProgressOfLawsuit = (lawsuitId) => {
  const endpoint = `/progresses/lawsuit/${lawsuitId}`;
  return httpClient.get(endpoint);
};

const showProgress = (progressId) => {
  const endpoint = `/progresses/${progressId}/translation`;
  return httpClient.get(endpoint);
};

export default { createProgress, indexProgressOfLawsuit, showProgress };
