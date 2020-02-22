export function loadDeliveryRequest(delivery, page) {
    return {
        type: '@delivery/LOAD_DELIVERY_REQUEST',
        payload: { delivery, page },
    };
}

export function loadDeliverySucess(delivery) {
    return {
        type: '@delivery/LOAD_DELIVERY_SUCESS',
        payload: { delivery },
    };
}

export function deliveryFailured() {
    return {
        type: '@delivery/DELIVERY_FAILURED',
    };
}
