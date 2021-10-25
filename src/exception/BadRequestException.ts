import {HttpException} from "@nestjs/common";

const STATUS = 400;
const RESPONSE = 'You can not rent cars in this days.';

export class BadRequestException extends HttpException {
    constructor() {
        super(RESPONSE, STATUS);
    }
}