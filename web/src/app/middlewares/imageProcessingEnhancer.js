import axios from 'axios';
import config from '../config';
import {
    SUBMIT_IMAGE_PROCESSING_REQUEST,
    SUBMIT_IMAGE_PROCESSING_SUCCESS,
    submitImageProcessingSuccess,
    submitImageProcessingFailure,
} from '../actions/imageProcessing';

const imageProcessingReducerEnhancer = (store) => (next) => (action) => {
    switch (action.type) {
        case SUBMIT_IMAGE_PROCESSING_REQUEST:
            _submitImageProcessingRequest(action, store.dispatch);
            break;
        case SUBMIT_IMAGE_PROCESSING_SUCCESS:
            _submitImageProcessingSuccess(action, store.dispatch);
            break;
        default:
            break;
    }

    return next(action);
};

const _submitImageProcessingRequest = async (action, dispatch) => {
    const { height, width, files, imageFormat } = action.payload;

    const form = new FormData();

    form.append('height', height);
    form.append('width', width);
    form.append('imageFormat', imageFormat);

    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        form.append(`files`, file);
    }

    try {
        const {
            data: { images },
        } = await axios({
            method: 'post',
            url: `${config.apiUrl}/v1/changeImageFormat`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: form,
        });

        dispatch(submitImageProcessingSuccess(images));
    } catch (error) {
        dispatch(submitImageProcessingFailure(error.status));
    }
};

const _submitImageProcessingSuccess = async (action, dispatch) => {
    const { images } = action.payload;

    if (Array.isArray(images)) {
        for (let index = 0; index < images.length; index++) {
            const image = images[index];
            await fetch(`${config.apiUrl}/v1/changeImageFormat/${image}`)
                .then((response) => response.blob())
                .then((blob) => {
                    var url = window.URL.createObjectURL(blob);
                    var a = document.createElement('a');
                    a.href = url;
                    a.download = image;
                    a.click();
                    a.remove();
                });
        }
    }
};

export default imageProcessingReducerEnhancer;
