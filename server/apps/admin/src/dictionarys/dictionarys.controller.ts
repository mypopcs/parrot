import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Controller, Get } from '@nestjs/common';
import { Dictionary } from '@libs/db/Models/dictionary.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
const adminOption = require('../adminOption.json')
const tableOption = adminOption.option

//增删改查
@Crud({
    model: Dictionary
})

@ApiTags('词典')
@Controller('dictionarys')
export class DictionarysController {
    constructor(
        @InjectModel(Dictionary) private readonly model: ReturnModelType<typeof Dictionary>
    ){}

    @Get('option')
    option(){
        return {
            column: adminOption.dictionarys.column,
            tableOption
        }
    }
}
