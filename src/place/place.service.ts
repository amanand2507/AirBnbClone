import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place } from './place.schema';
import { Model } from 'mongoose';
import { strict } from 'assert';

@Injectable()
export class PlaceService {
  constructor(@InjectModel(Place.name) private placeModel: Model<Place>) {}
  async create(Place: any, user: string) {
    const newPlace = new this.placeModel({
      ...Place,
      owner: user,
    });
    return newPlace.save();
  }

  async findAll() {
    return this.placeModel.find().populate('owner', 'username').exec();
  }

  async findOne(id: string) {
    return this.placeModel.findById(id).populate('owner', 'username').exec();
  }

  async update(id: string, Place: any) {
    return this.placeModel
      .findByIdAndUpdate(id, {
        title: Place.title,
        description: Place.description,
      })
      .exec();
  }

  async remove(id: string) {
    return this.placeModel.findByIdAndDelete(id);
  }
}
