import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AirBnbService } from './airbnb.service';
import { CreateAirBnbDto } from './dto/create-airbnb.dto';
import { ListQueryAirBnb } from './dto/listing-airbnb.dto';
import { listingsAndReviews } from './entities/airbnb.schema';
import { UpdateAirBnbDto } from './dto/update-airbnb.dto';

@Controller('listingsAndReviews')
export class AirBnbController {

    constructor(private readonly airBnbService: AirBnbService) {}

    @Post()
    create(@Body() createAirBnbDto: CreateAirBnbDto) {
        return this.airBnbService.create(createAirBnbDto);
    }

    @Get()
    async findAll(@Query() listAirBnbQuery: ListQueryAirBnb) {
        return await this.airBnbService.getListAirBnb(listAirBnbQuery);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<listingsAndReviews> {
        return await this.airBnbService.getDetailAirBnb(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateAirBnbDto: UpdateAirBnbDto): Promise<listingsAndReviews> {
        const updateAirBnb = await this.airBnbService.updateAirBnb(id, updateAirBnbDto);
        
        if (!updateAirBnb) {
            throw new Error('AirBnb not found');
        }
        return updateAirBnb;
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<listingsAndReviews>{
        return await this.airBnbService.deleteAirBnb(id);
    }
}
