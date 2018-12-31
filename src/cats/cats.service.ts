import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<any>) {}

  async create(createCatDto: CreateCatDto): Promise<any> {
    const newCat = new this.catModel(createCatDto);
    console.log(newCat);
    
    return await newCat.save();
  }

  async findAll(): Promise<any[]> {
    return await this.catModel.find().exec();
  }
}