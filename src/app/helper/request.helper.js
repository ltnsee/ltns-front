import axios from 'axios';
// import * as Cookies from 'js-cookie';
import { eventHelper } from 'app/helper/event.helper';
import { messageHelper } from './message.helper';

let host = 'https://ltnsee.com/api';
export const requestHelper = axios.create({
    baseURL: host,
    headers: {
        // 'x-hys-session': sessionId,
        // 'x-hys-platform': platform,
        // 'x-lang': loginUser && loginUser.lang,
        // 'x-authenticity-token': Cookies.get('authenticityToken')
    }
});
// 添加一个请求拦截器
const interceptorRequest = requestHelper.interceptors.request.use(
    config => config,
    err => Promise.reject(err)
);
console.log('interceptorRequest', interceptorRequest); 
// 添加一个响应拦截器
const interceptorResponse = requestHelper.interceptors.response.use(
    res => {
        switch (res.data.code) {
            case 401:
                eventHelper.dispatch(eventHelper.event.Login); break;
            default:
                return res;
        }
        if (res.data.noticeMessage) {
            messageHelper.noticeMessage(res.data.noticeMessage);
        } else if (res.data.warnMessage) {
            messageHelper.warnMessage(res.data.warnMessage);
        }
        return res;
    },
    err => {
        messageHelper.errorMessage(err.data.errorMessage);
        Promise.reject(err);
    }
);
console.log('interceptorResponse', interceptorResponse); 
// 移除拦截器
// requestHelper.interceptors.request.eject(interceptorRequest);
// requestHelper.interceptors.request.eject(interceptorResponse);
