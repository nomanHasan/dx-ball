export const windowToCanvas = (event, crect) => {
    return {
        x: event.clientX - crect.left, // * (canvas.width  / crect.width),
        y: event.clientY - crect.top //  * (canvas.height / crect.height)
    };
}

export const EventRegister = {
    events : ['onmousemove', 'onmouseenter', 'onmousedown', 'onmouseleave', 'onmouseup', 'onclick', 'ondblclick'],
    register: (element, component, events = EventRegister.events) => {
        let crect;
        setTimeout(() => {
            crect = element.getBoundingClientRect()
        })
        
        events.forEach(eventName => {

            element[eventName] = event => {
                if (component[eventName]) {
                    component[eventName](windowToCanvas(event, crect))
                }
            }

        })
    },
    registerLazily: (event) => {

    },
    registerAll: (events, source, target) => {

    }
}