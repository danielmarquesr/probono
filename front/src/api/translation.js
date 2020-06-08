import httpClient from '@/api/httpClient';

const createTranslation = (body) => {
  const endpoint = `/translations`;
  return httpClient.post(endpoint, body);
};

const indexTranslation = () => {
  const endpoint = `/translations/lawyer`;
  return httpClient.get(endpoint);
};

const showTranslationProcess = (translationId) => {
  const endpoint = `/translations/${translationId}/progress`;
  return httpClient.get(endpoint);
};

export default { createTranslation, indexTranslation, showTranslationProcess };
