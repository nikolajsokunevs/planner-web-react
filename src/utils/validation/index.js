export const validation = {
    TIME: 'time',
    PHONE: 'phone',
    NOT_EMPTY: 'not_empty'
}

export function validateFields(fields) {
    const values = Object.values(fields);
    for (let i = 0; i < values.length; i++) {
        validateField(values[i])
    }
    return fields;
}

export function validateField(field) {
        if (field.mandatory) {
            switch (field.validationType) {
                case validation.TIME:
                    field.valid = field.value.length >= 5;
                    break;
                case validation.PHONE:
                    field.valid = field.value.length >= 8;
                    break;
                default:
                    field.valid = field.value.length >= 1;
                    break;
            }
        }
}