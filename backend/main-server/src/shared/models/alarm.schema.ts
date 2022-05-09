import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlarmDocument = Alarm & Document;

@Schema()
export class Alarm {
  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  type: string;
  
  @Prop()
  action: string;

  @Prop()
  applied_to: string;

  @Prop()
  duration: number;

  @Prop()
  image_url: string;
}

export const AlarmSchema = SchemaFactory.createForClass(Alarm);