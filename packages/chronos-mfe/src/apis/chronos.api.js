import { server, storageServer, storageServerX } from '../server/api';
import { formServer } from '../server/formApi';

const getAllForecastProjects = () => {
  return server.get('/forecasts?limit=0&offset=0', {
    data: {},
  });
};

const getForecastProjectById = (id) => {
  return server.get(`/forecasts/${id}`, {
    data: {},
  });
};

const createForecastProject = (data) => {
  return server.post('/forecasts', {
    data,
  });
};

const deleteForecastProject = (id) => {
  return server.delete(`/forecasts/${id}`, {
    data: {},
  });
};

const getAllInputFiles = (id) => {
  return server.get(`/forecasts/${id}/inputs`, {
    data: {},
  });
};

const updateForecastProjectCollaborators = (data, id) => {
  return server.put(`/forecasts/${id}`, data);
};

const createForecastRun = (data, id) => {
  return formServer.post(`/forecasts/${id}/runs`, data);
};

const getForecastRuns = (id, offset, limit, sortBy, sortOrder) => {
  return server.get(`/forecasts/${id}/runs?offset=${offset}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`, {
    data: {},
  });
};

const getForecastRun = (id, rid) => {
  return server.get(`/forecasts/${id}/runs/${rid}`, {
    data: {},
  });
};

const cancelForecastRun = (id, rid) => {
  return server.put(`/forecasts/${id}/runs/${rid}`, {
    data: {},
  });
};

const deleteForecastRun = (id, rid) => {
  return server.delete(`/forecasts/${id}/runs/${rid}`, {
    data: {},
  });
};

const deleteSavedInputFile = (id, rid) => {
  return server.delete(`/forecasts/${id}/inputs/${rid}`, {
    data: {},
  });
};

const deleteForecastRuns = (rids, id) => {
  return server.delete(`/forecasts/${id}/runs`, { ids: rids });
};

const getConfigurationFiles = (id) => {
  return server.get(`/forecasts/default-config/files?id=${id}`, {
    data: {},
  });
};

const generateApiKeyById = (id) => {
  return server.post(`/forecasts/${id}/apikey`, {
    data: {},
  });
};

const getApiKeyById = (id) => {
  return server.get(`/forecasts/${id}/apikey`, {
    data: {},
  });
};

const getHTML = (projectName, resultFolderName, fileName) => {
  return storageServer.get(`/buckets/${projectName}/objects/metadata?prefix=results%2F${resultFolderName}%2Fvisuals%2F${fileName}`, {
    data: {},
  });
};

const getFile = (projectName, resultFolderName, fileName) => {
  return storageServer.get(`/buckets/${projectName}/objects/metadata?prefix=results%2F${resultFolderName}%2F${fileName}`, {
    data: {},
  });
};

const getExcelFile = (projectName, resultFolderName, fileName) => {
  return storageServerX.get(`/buckets/${projectName}/objects/metadata?prefix=results%2F${resultFolderName}%2F${fileName}`, {
    data: {},
  });
};

const createForecastComparison = (data, id) => {
  return formServer.post(`/forecasts/${id}/comparisons`, data);
};

const getForecastComparisons = (id, offset, limit, sortBy, sortOrder) => {
  return server.get(`/forecasts/${id}/comparisons?offset=${offset}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`, {
    data: {},
  });
};

const deleteForecastComparisons = (cids, id) => {
  return server.delete(`/forecasts/${id}/comparisons?comparisonIds=${cids}`, {
    data: {},
  });
};

const getComparisonHtml = (id, cid) => {
  return server.get(`/forecasts/${id}/comparisons/${cid}/comparisonData`, {
    data: {},
  });
};

const getProjectConfigFiles = (id) => {
  return server.get(`/forecasts/${id}/config-files`, {
    data: {},
  });
};

const getProjectConfigFileById = (id, configFileId) => {
  return server.get(`/forecasts/${id}/config-files/${configFileId}/configFileData`, {
    data: {},
  });
};

const uploadProjectConfigFile = (id, data) => {
  return formServer.post(`/forecasts/${id}/config-files`, data);
};

const deleteProjectConfigFile = (id, configFileId) => {
  return server.delete(`/forecasts/${id}/config-files/${configFileId}`, {
    data: {},
  });
};



export const chronosApi = {
    getAllForecastProjects,
    getForecastProjectById,
    createForecastProject,
    deleteForecastProject,
    updateForecastProjectCollaborators,
    getAllInputFiles,
    createForecastRun,
    getForecastRun,
    deleteForecastRun,
    getForecastRuns,
    deleteForecastRuns,
    deleteSavedInputFile,
    getConfigurationFiles,
    generateApiKeyById,
    getApiKeyById,
    getHTML,
    getFile,
    getExcelFile,
    createForecastComparison,
    getForecastComparisons,
    deleteForecastComparisons,
    getComparisonHtml,
    getProjectConfigFiles,
    getProjectConfigFileById,
    uploadProjectConfigFile,
    deleteProjectConfigFile,
    cancelForecastRun,
};
