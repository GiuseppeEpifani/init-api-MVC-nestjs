import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ 
    type: String, 
    required: [true, 'The name is required']
  })
  name: string;

  @Prop({ 
    type: String, 
    required: [true, 'The username is required'],
    unique: true
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('toObject', {
  transform: (doc, ret, options) => {
    ret.uid = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

UserSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.uid = ret._id;
    delete ret.password;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});