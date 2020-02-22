import produce from 'immer';

const INITIAL_STATE = {
    delivery: [],
    loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@delivery/LOAD_DELIVERY_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@delivery/LOAD_DELIVERY_SUCESS': {
                draft.delivery = action.payload.delivery;
                draft.loading = false;
                break;
            }
            case '@delivery/DELIVERY_FAILURED': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}
