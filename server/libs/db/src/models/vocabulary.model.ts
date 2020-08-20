import { Prop, ModelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

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
}