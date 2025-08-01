const ROUTE_PATHS = {
    TASK_LIST: '/',
    TASK_DETAIL: (taskId: number) => `/todo/${taskId}`,
}

export default ROUTE_PATHS;
