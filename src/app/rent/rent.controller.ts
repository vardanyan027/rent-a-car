import {Body, Controller, Get, Post} from '@nestjs/common';
import {RentService} from './rent.service';
import {CreateRentDto} from './dto/createRent.dto';

@Controller('rents')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  @Post()
  store(@Body() createRentDto: CreateRentDto) {
    return this.rentService.create(createRentDto);
  }

}
