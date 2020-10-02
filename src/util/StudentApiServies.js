import api from './AxiosService';

const studentPostRequest = async (data) => {
    try {
        const resp = await api('POST', 'sms', '/student', 'token', data, '');
        return resp.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const studentGetAllRequest = async () => {
    try {
        const resp = await api('GET', 'sms', '/students', 'token', '', '');
        return resp.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};
export { studentGetAllRequest, studentPostRequest };
