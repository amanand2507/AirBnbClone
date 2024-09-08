import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceModule } from './place/place.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PlaceModule,
    MongooseModule.forRoot('mongodb://localhost:27017/airbnb'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
