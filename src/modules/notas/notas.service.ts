import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { NotasDTO } from './notas.dto';


@Injectable()
export class NotasService {
    constructor(private prisma: PrismaService){}

    async createNota(data: NotasDTO){
        const notasExist = await this.prisma.nota.findUnique({
            where:{
                numero_nota: data.numero_nota
            }
        })

        if(notasExist){
            throw new Error("Esta nota ja esta cadastrada!")
        }

        const nota = await this.prisma.nota.create({
           data           
        })

        return nota;
    }
    async findAllNotas(){
        return await this.prisma.nota.findMany();
    }

    async updateNota(numero_nota:string, data:NotasDTO){
        const notaExist = await this.prisma.nota.findUnique({
            where:{
                numero_nota
            }
        })

        if(!notaExist){
            throw new Error("Nota não encontrada")
        }

        return await this.prisma.nota.update({
            data,
            where:{
                numero_nota
            }
        })
    }

    async deleteNota(numero_nota: string){
        const userExist = await this.prisma.nota.findUnique({
            where:{
                numero_nota,
            }
        })

        if(!userExist){
            throw new Error("Usuário não encontrado")
        }

        return await this.prisma.nota.delete({
            where:{
                numero_nota
            }
        })
    }
}
