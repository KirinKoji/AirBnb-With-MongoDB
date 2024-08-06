import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AirBnbService } from './airbnb.service';
import { CreateAirBnbDto } from './dto/create-airbnb.dto';
import { ListQueryAirBnb } from './dto/listing-airbnb.dto';

@Controller('listingsAndReviews')
export class AirBnbController {

    constructor(private readonly airBnbService: AirBnbService) {}

    @Post()
    create(@Body() createAirBnbDto: CreateAirBnbDto) {
        return this.airBnbService.create(createAirBnbDto);
    }

    @Get()
    findAll(@Query() listAirBnbQuery: ListQueryAirBnb) {
        return this.airBnbService.getListAirBnb(listAirBnbQuery);
    }
}
