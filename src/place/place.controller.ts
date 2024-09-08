import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  async create(@Body() createPlaceDto: any) {
    return await this.placeService.create(createPlaceDto);
  }

  @Get()
  async findAll() {
    return await this.placeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.placeService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlaceDto: any) {
    return await this.placeService.update(id, updatePlaceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.placeService.remove(id);
  }
}
