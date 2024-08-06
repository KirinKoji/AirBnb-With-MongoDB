import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AirBnbController } from './movies/airbnb.controller'; 
import { listingsAndReviewsSchema } from './movies/entities/airbnb.schema';
import { AirBnbService } from './movies/airbnb.service';
import { AirBnbModule } from './movies/airbnb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the config module globally available -,--->
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // your MongoDB connection string from the .env file :)
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'listingsAndReviews', schema: listingsAndReviewsSchema }]), 
    AirBnbModule,
  ],
  controllers: [AirBnbController],
  providers: [AirBnbService],
})
export class AppModule {}