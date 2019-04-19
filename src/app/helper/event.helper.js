/**
 * 事件列表
 */
export const GlobalEvents = {
    EventName: 'EventName',
}
/**
 * key: string
 * value: [Functing] 方法的数组
 */
var eventList = {};


export class Dispatcher {
    events = GlobalEvents;
    /**
     * 
     * @param {string} eventName 
     * @param {Functing} eventHandler 
     * @param {boolean} only 
     */
    subscribe(eventName, eventHandler, only) {
        if (eventList[eventName] === undefined) {
            eventList[eventName] = [];
        }
        if (only === true) {
            eventList[eventName] = [eventHandler];
        } else {
            eventList[eventName].push(eventHandler);
        }
        const result = {
            name: eventName,
            index: eventList[eventName].length - 1
        };
        return result;
    }
    /**
     * 
     * @param {{index: number, name: string}} event 
     */
    unSubscribe(event) {
        if (event && eventList[event.name]) {
            eventList[event.name].splice(event.index, 1);
        }
    }
    /**
     * 
     * @param {string} eventName 
     * @param  {Array} args 
     */
    dispatch(eventName, ...args) {
        var myEventList = eventList[eventName];
        if (myEventList !== undefined) {
            for (let i of myEventList) {
                i.apply(this, args);
            }
        }
    }
    reset() {
        for (let k in eventList) {
            if (k) {
                eventList[k] = [];
            }
        }
    }
    get eventList() {
        return eventList;
    }
}

class EventHelper {
    event = GlobalEvents;
    dispatcher = new Dispatcher();
    /**
     * 
     * @param {string} eventName 
     * @param {Functing} eventHandler 
     * @param {boolean} only 
     */
    subscribe(eventName, eventHandler, only) {
        return this.dispatcher.subscribe(eventName, eventHandler, only);
    }
    /**
     * 
     * @param {{index: number, name: string}} event 
     */
    unSubscribe(event) {
        this.dispatcher.unSubscribe(event);
    }
    /**
     * 
     * @param {string} eventName 
     * @param  {Array} args 
     */
    dispatch(eventName, ...args) {
        this.dispatcher.dispatch(eventName, ...args);
    }

}

export const eventHelper = new EventHelper(); 