import React, { memo, useMemo, forwardRef } from 'react';
import { Select } from './Select.styles';

type option = {
    value: string | number;
    label: string | number;
};

interface propsInterfaces {
    id?: string;
    placeholder?: string;
    options: Array<option>;
    value?: string | number;
    onChange?: (ev: any) => void;
    disabled?: boolean;
}

const SelectComponent = ({ options, ...props }: propsInterfaces, ref: any) => {
    const OptionsComponent = useMemo(() => {
        return options.map((opt: option) => (
            <option key={opt.value} value={opt.value}>
                {opt.label}
            </option>
        ));
    }, [options]);

    return (
        <Select ref={ref} {...props}>
            {OptionsComponent}
        </Select>
    );
};

export default memo(forwardRef(SelectComponent));
