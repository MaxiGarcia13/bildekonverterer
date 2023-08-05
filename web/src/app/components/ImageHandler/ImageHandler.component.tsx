import React, { memo, forwardRef, useState, useMemo } from 'react';
import { Wrapper, Img, Icon, H2, ImageInformationForUpload, HoverWrapper, P } from './ImageHandler.styles';
import { setImageUrl } from '../../actions/imageProcessing';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { processingSelector, imageurlSelector } from '../../selectors/imageProcessing';
import { imageUploadBackground } from '../../../shared/icons';

type touchState = [boolean, any];

interface propsInterface {
    heightRef: any;
    widthRef: any;
    handleDisabledButton: any;
}

const imageType = ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg'];

const ImageHandlerComponent = ({ heightRef, widthRef, handleDisabledButton }: propsInterface, ref: any) => {
    const { t } = useTranslation('app');
    const dispatch = useDispatch();

    const imageProcessingSelector = useSelector(processingSelector);
    const imageUrlSelector = useSelector(imageurlSelector);

    const [wasTouched, setWasTouched]: touchState = useState(false);

    const BodyText = useMemo(
        () => (
            <>
                <H2>{t('app:click_me_or_drag')}</H2>
                <P>{t('app:only_available_image')}</P>
            </>
        ),
        [t]
    );

    const ShowCase = useMemo(() => {
        if (imageUrlSelector) {
            return (
                <>
                    <Img src={imageUrlSelector} alt='Image that you choose to change the format' />
                    {!wasTouched && !imageProcessingSelector && (
                        <HoverWrapper className='hoverWrapper'>{BodyText}</HoverWrapper>
                    )}
                </>
            );
        } else {
            return (
                <ImageInformationForUpload>
                    <Icon src={imageUploadBackground} />
                    {BodyText}
                </ImageInformationForUpload>
            );
        }
    }, [imageUrlSelector, BodyText, wasTouched, imageProcessingSelector]);

    const handleSetImage = (file: object) => {
        const url = URL.createObjectURL(file);
        calculateHeightAndWidthImage(url);
        handleDisabledButton(false);
        dispatch(setImageUrl(url));
    };

    const resetImage = () => {
        dispatch(setImageUrl(null));
        handleDisabledButton(true);
        if (heightRef && typeof heightRef === 'object') {
            heightRef.current.value = 0;
        }
        if (widthRef && typeof widthRef === 'object') {
            widthRef.current.value = 0;
        }
    };

    const openSystemDirectory = () => {
        if (!imageProcessingSelector && ref.current && typeof ref.current.click === 'function') {
            ref.current.click();
        }
    };

    const handleOnChangeImage = (ev: any) => {
        const file = ev.target.files[0];

        if (typeof file === 'object') {
            handleSetImage(file);

            if (heightRef && typeof heightRef === 'object') {
                heightRef.current.focus();
            }
        } else {
            resetImage();
        }
    };

    const handleOndrop = (ev: any) => {
        ev.preventDefault();

        if (!imageProcessingSelector) {
            const file = ev.dataTransfer.files[0];

            handleSetImage(file);

            ref.current.files = ev.dataTransfer.files;
        }

        ev.stopPropagation();
    };

    const handledragStop = (ev: any) => {
        ev.preventDefault();
        ev.stopPropagation();
    };

    const calculateHeightAndWidthImage = (file: string) => {
        const img = document.createElement('img');

        img.src = file;

        img.onload = () => {
            if (heightRef && typeof heightRef === 'object') {
                heightRef.current.value = img.naturalHeight;
            }
            if (widthRef && typeof widthRef === 'object') {
                widthRef.current.value = img.naturalWidth;
            }
        };
        img.onerror = () => {
            resetImage();
        };
    };

    return (
        <Wrapper
            onClick={openSystemDirectory}
            className={imageUrlSelector && 'selected'}
            onTouchEnd={() => setWasTouched(true)}
            onDrop={handleOndrop}
            onDragOver={handledragStop}
            draggable
        >
            {ShowCase}
            <input ref={ref} type='file' onChange={handleOnChangeImage} accept={imageType.join(',')} />
        </Wrapper>
    );
};

export default memo(forwardRef(ImageHandlerComponent));
