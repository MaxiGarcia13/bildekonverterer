import React, { memo, forwardRef } from 'react';
import Button from '../../../shared/components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { submitImageProcessingRequest } from '../../actions/imageProcessing';
import { processingSelector } from '../../selectors/imageProcessing';

interface propsInterface {
    children: any;
    disabled?: boolean;
    getData: Function;
}

const ImageProcessingButtonComponent = ({ children, getData, disabled }: any, ref: any) => {
    const dispatch = useDispatch();
    const loading = useSelector(processingSelector);

    const handleOnSubmit = () => {
        const data = getData();

        dispatch(submitImageProcessingRequest({ ...data }));
    };

    return (
        <Button ref={ref} onClick={handleOnSubmit} disabled={disabled} loading={loading}>
            {children}
        </Button>
    );
};

export default memo(forwardRef(ImageProcessingButtonComponent));
