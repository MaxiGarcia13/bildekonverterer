export const SET_IMAGE_URL = 'SET_IMAGE_URL';

export const SUBMIT_IMAGE_PROCESSING_REQUEST = 'SUBMIT_IMAGE_PROCESSING_REQUEST';
export const SUBMIT_IMAGE_PROCESSING_SUCCESS = 'SUBMIT_IMAGE_PROCESSING_SUCCESS';
export const SUBMIT_IMAGE_PROCESSING_FAILURE = 'SUBMIT_IMAGE_PROCESSING_FAILURE';

interface requestInterface {
    height: number;
    width: number;
    files: FormData;
    imageFormat: string;
}

export const setImageUrl = (url: string | null) => {
    return {
        type: SET_IMAGE_URL,
        payload: {
            url,
        },
    };
};

export const submitImageProcessingRequest = ({ height, width, files, imageFormat }: requestInterface) => {
    return {
        type: SUBMIT_IMAGE_PROCESSING_REQUEST,
        payload: {
            height,
            width,
            files,
            imageFormat,
        },
    };
};

export const submitImageProcessingSuccess = (images: any) => {
    return {
        type: SUBMIT_IMAGE_PROCESSING_SUCCESS,
        payload: {
            images,
        },
    };
};

export const submitImageProcessingFailure = (status: any) => {
    return {
        type: SUBMIT_IMAGE_PROCESSING_FAILURE,
        payload: {
            status,
        },
    };
};
