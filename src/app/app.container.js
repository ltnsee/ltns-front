import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

export const appContainer = new Container({autoBindInjectable: true, defaultScope: 'Singleton'});
export const appInject = getDecorators(appContainer);
// let bookingState = appContainer.get(BookingState); 函数中使用
// @injectable() 可注入标识
// class FilterState {
//     @appInject.lazyInject(BookingState) bookingState: BookingState; 懒注入
//     @inject(BookingsState) bookingsState: BookingState; 注入
// }