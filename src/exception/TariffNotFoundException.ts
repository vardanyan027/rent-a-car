import {HttpException, HttpStatus} from "@nestjs/common";

const STATUS = 602;
const RESPONSE = 'Tariff Not Found';

export class TariffNotFoundException extends HttpException {
    constructor() {
        super(RESPONSE, STATUS);
    }
}