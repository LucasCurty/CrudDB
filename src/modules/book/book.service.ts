import { Injectable } from '@nestjs/common';
import { BookTDO } from './book.dto';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) {}

    async create(data: BookTDO) {

        const bookExists = await this.prisma.book.findFirst({
            where:{
                bar_code: data.bar_code
            }
        })

        if(bookExists){
            throw new Error("Book ja exist");
        }
        const book = await this.prisma.book.create({
            data,
        })

        return book;
    }

    async findAll(){
        return await this.prisma.book.findMany();
    }

    async update(id: string, data: BookTDO){
       const bookExists = await this.prisma.book.findUnique({
            where:{
                id,
            }
       }) 

       if(!bookExists){
            throw new Error("Book não existe");
       }

        return await this.prisma.book.update({
            data,
            where:{
                id,
            }
        })
    }

    async delete(id: string){
        const bookExists = await this.prisma.book.findUnique({
            where:{
                id,
            }
       }) 

       if(!bookExists){
            throw new Error("Book não existe");
       }

       return await this.prisma.book.delete({
        where:{
            id
        }
       })
    }
}
