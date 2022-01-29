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
