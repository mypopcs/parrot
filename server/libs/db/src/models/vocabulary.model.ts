import { Prop, ModelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Dictionary } from './dictionary.model'

@ModelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Vocabulary {

    @ApiProperty({description: '英语单词', example: 'hello'})
    @Prop()    
    enWord: string

    @ApiProperty({description: '中文解释', example: '你好'})
    @Prop()
    zhWord: string

    @ApiProperty({description: '词典名', example: '司机英汉大词典'})
    @Prop({ ref: 'Dictionary'})
    dictionary: Ref<Dictionary>
}