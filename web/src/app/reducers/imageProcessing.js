import {
    SET_IMAGE_URL,
    SUBMIT_IMAGE_PROCESSING_REQUEST,
    SUBMIT_IMAGE_PROCESSING_SUCCESS,
    SUBMIT_IMAGE_PROCESSING_FAILURE,
} from '../actions/imageProcessing';

const initialState = {
    processing: false,
    images: null,
    error: null,
    url: null,
    form: {
        files: null,
        height: 0,
        width: 0,
        imageFormat: 'png',
    },
};

export default (store = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE_URL: {
            return {
                ...store,
                url: action.payload.url,
            };
        }

        case SUBMIT_IMAGE_PROCESSING_REQUEST: {
            return {
                ...store,
                processing: true,
                form: {
                    files: action.payload.files,
                    height: action.payload.height,
                    width: action.payload.width,
                    imageFormat: action.payload.imageFormat,
                },
            };
        }

        case SUBMIT_IMAGE_PROCESSING_SUCCESS: {
            return {
                ...store,
                processing: false,
                images: action.payload.images,
            };
        }

        case SUBMIT_IMAGE_PROCESSING_FAILURE: {
            return {
                ...store,
                theme: action.payload.theme,
                processing: false,
                error: action.payload.status,
            };
        }

        default:
            return store;
    }
};
