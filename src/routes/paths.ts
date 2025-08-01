const ROUTE_PATHS = {
  TASK_LIST: '/',
  TASK_DETAIL: (taskId: string) => `/todo/${taskId}`,
  NOT_FOUND: '*',
};

export default ROUTE_PATHS;
