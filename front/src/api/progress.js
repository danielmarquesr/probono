import httpClient from '@/api/httpClient';

const indexProgressOfLawsuit = (lawsuitId) => {
  const endpoint = `/progresses/lawsuit/${lawsuitId}`;
  return httpClient.get(endpoint);
};

const showProgress = (progressId) => {
  const endpoint = `/progresses/${progressId}/translation`;
  return httpClient.get(endpoint);
};

export default { indexProgressOfLawsuit, showProgress };
