import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createPlaceDto: any, @Req() req) {
    console.log(req.user);
    return await this.placeService.create(createPlaceDto, req.user.userId);
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
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updatePlaceDto: any) {
    return await this.placeService.update(id, updatePlaceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.placeService.remove(id);
  }
}
