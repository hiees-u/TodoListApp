const ROUTE_PATHS = {
  TASK_LIST: '/',
  TASK_DETAIL: (taskId: string) => `/todo/${taskId}`,
};

export default ROUTE_PATHS;
