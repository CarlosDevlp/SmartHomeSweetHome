import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CameraDocument = Camera & Document;

@Schema()
export class Camera {
  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  protocol: string;
  
  @Prop()
  url: string;

  @Prop()
  ws_port: string;

  @Prop()
  image_url: string;
}

export const CameraSchema = SchemaFactory.createForClass(Camera);