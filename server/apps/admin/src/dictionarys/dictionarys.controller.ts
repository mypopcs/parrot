import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Controller } from '@nestjs/common';
import { Dictionary } from '@libs/db/Models/dictionary.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

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
}
