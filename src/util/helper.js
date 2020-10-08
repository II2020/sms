import history from './History';

const getCurrentPath = () => {
    let currentPath = history.location.pathname;
    return currentPath;
};

export { getCurrentPath };
