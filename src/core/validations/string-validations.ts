import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

export function IsNotWhitespace(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
        name: 'isNotWhitespace',
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: validationOptions,
        validator: {
            validate(value: any, args: ValidationArguments) {
                return !/^\s*$/.test(value);
            },
        },
        });
    };
}

export function IsValidUuid(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
        name: 'isValidUuid',
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: validationOptions,
        validator: {
            validate(value: any, args: ValidationArguments) {
                return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
            },
        },
        });
    };
}
