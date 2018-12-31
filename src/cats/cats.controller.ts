import { Get, Controller, Req, Post, HttpCode, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(204)
  async add(@Body() data): Promise<any> {
    return this.catsService.create(data);
  }
  
  @Get()
  async findAll(@Req() req): Promise<any []> {
    return this.catsService.findAll();
  }
}
