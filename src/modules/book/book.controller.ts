import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookTDO } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookTDO){
    return this.bookService.create(data)
  }

  @Get()
  async findAll(){
    return this.bookService.findAll()
  }

  @Put(":id")
  async update(@Param("id") id:string, @Body() data: BookTDO){
    return this.bookService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id:string){
    return this.bookService.delete(id);
  }
}
