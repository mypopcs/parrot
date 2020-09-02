import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Vocabulary } from '@libs/db/Models/vocabulary.model';
const adminOption = require('../adminOption.json')
const tableOption = adminOption.option

@Crud({
    model: Vocabulary
})

@Controller('vocabularys')
@ApiTags('单词词汇')
export class VocabularysController {
    constructor(
        @InjectModel(Vocabulary) private readonly model: ReturnModelType<typeof Vocabulary>
    ){}

    @Get('option')
    option(){
        return {
            column: adminOption.vocabularys.column,
            tableOption
        }
    }
}
