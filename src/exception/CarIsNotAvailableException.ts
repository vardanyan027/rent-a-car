import {HttpException} from "@nestjs/common";

const STATUS = 601;
const RESPONSE = 'Car is not available';

export class CarIsNotAvailableException extends HttpException {

    constructor() {
        super(RESPONSE, STATUS);
    }

}