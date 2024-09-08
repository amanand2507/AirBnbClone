import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Place extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: Types.ObjectId;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  photos: string[];
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
