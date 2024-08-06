import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { listingsAndReviewsSchema } from './entities/airbnb.schema';
import { AirBnbService } from './airbnb.service';
import { AirBnbController } from './airbnb.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'listingsAndReviews', schema: listingsAndReviewsSchema }]),
    ],
    controllers: [AirBnbController],
    providers: [AirBnbService],
})
export class AirBnbModule {}
