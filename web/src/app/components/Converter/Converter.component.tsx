import React, { memo, FC, useRef, useState, useEffect } from 'react';
import Input from '../../../shared/components/Input';
import Label from '../../../shared/components/Label';
import Select from '../../../shared/components/Select';
import ImageHandler from '../ImageHandler';
import ImageProcessingButton from '../ImageProcessingButton';
import MadeByMe from '../MadeByMe';
import { useSelector } from 'react-redux';
import { getformSelector } from '../../selectors/imageProcessing';
import { useTranslation } from 'react-i18next';
import { MainWrapper, ToolBarWrapper, ImageWrapper, H2, Section, SectionCenter } from './Converter.styles';

const options = [
    { value: 'png', label: 'PNG' },
    { value: 'jpeg', label: 'JPEG' },
    { value: 'webp', label: 'WEBP' },
    { value: 'tiff', label: 'TIFF' },
];

const ConverterComponent: FC = () => {
    const { t } = useTranslation('app');

    const formSelector = useSelector(getformSelector);

    const image = useRef<HTMLInputElement>(null);
    const height = useRef<HTMLInputElement>(null);
    const width = useRef<HTMLInputElement>(null);
    const imageFormat = useRef<HTMLSelectElement>(null);
    const SubmitButton = useRef<HTMLButtonElement>(null);

    const [disabledButton, setDisabledButton] = useState(true);

    const handleZeroStop = (ev: any) => {
        if (+ev.target.value < 0) {
            ev.target.value = 0;
        }
    };

    const getFormData = () => {
        const files = image.current?.files;
        return {
            height: height.current?.value,
            width: width.current?.value,
            imageFormat: imageFormat.current?.value,
            files: files || formSelector.image,
        };
    };

    useEffect(() => {
        if (height.current) height.current.value = formSelector.height;
        if (width.current) width.current.value = formSelector.width;
        if (imageFormat.current) imageFormat.current.value = formSelector.imageFormat;
    }, [formSelector]);

    return (
        <MainWrapper>
            <ImageWrapper>
                <ImageHandler
                    ref={image}
                    heightRef={height}
                    widthRef={width}
                    handleDisabledButton={setDisabledButton}
                />
            </ImageWrapper>
            <ToolBarWrapper>
                <H2>{t('app:toolbar')}</H2>
                <Section>
                    <Label htmlFor='input_height'>{t('app:height')}</Label>
                    <Input
                        ref={height}
                        id='input_height'
                        type='number'
                        placeholder={t('app:enter_height')}
                        onChange={handleZeroStop}
                    />

                    <Label htmlFor='input_width'>{t('app:width')}</Label>
                    <Input
                        ref={width}
                        id='input_width'
                        type='number'
                        placeholder={t('app:enter_width')}
                        onChange={handleZeroStop}
                    />

                    <Label htmlFor='select_format'>{t('app:image_format_to_export')}</Label>
                    <Select ref={imageFormat} id='select_format' options={options} />
                </Section>
                <SectionCenter>
                    <ImageProcessingButton ref={SubmitButton} getData={getFormData} disabled={disabledButton}>
                        {t('app:convert')}
                    </ImageProcessingButton>
                </SectionCenter>

                <MadeByMe bottom='0px' absoulte />
            </ToolBarWrapper>
        </MainWrapper>
    );
};

export default memo(ConverterComponent);
