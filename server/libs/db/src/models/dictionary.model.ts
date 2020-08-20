import { ModelOptions, Prop, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Vocabulary } from './vocabulary.model'

@ModelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Dictionary {
    @ApiProperty({description: '词典名', example: '英语四级大词典'}) 
    @Prop()
    name: string

    @ApiProperty({description: '词汇列表', example: 'hello'}) 
    //itemsRef,每个元素参考，数据库存储的
    @arrayProp({itemsRef: 'Vocabulary'})
    //Ref（参考）指向vocabulary,是数组所以需要加一个[],swagger显示用
    vocabularys: Ref<Vocabulary>[]


}