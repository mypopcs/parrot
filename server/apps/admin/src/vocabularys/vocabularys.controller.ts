import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Vocabulary } from '@libs/db/Models/vocabulary.model';
import { Dictionary } from '@libs/db/Models/dictionary.model';
const adminOption = require('../adminOption.json')
const tableOption = adminOption.option

@Crud({
    model: Vocabulary
})

@Controller('vocabularys')
@ApiTags('单词词汇')
export class VocabularysController {
    constructor(
        @InjectModel(Vocabulary) private readonly model: ReturnModelType<typeof Vocabulary>,
        @InjectModel(Dictionary) private readonly DictionaryModel: ReturnModelType<typeof Dictionary>
    ){}

    @Get('option')
    async option(){
        const dictionarys = (await this.DictionaryModel.find()).map(v => ({
            label: v.name,
            value: v._id
        }))
        //想数组中插入内容
        const vocabularysColumn = adminOption.vocabularys.column[0]
        // console.log(`${JSON.stringify(vocabularysColumn)}`)
        vocabularysColumn.dicData = dictionarys
        return {
            column: adminOption.vocabularys.column,
            tableOption
        }
    }
}
