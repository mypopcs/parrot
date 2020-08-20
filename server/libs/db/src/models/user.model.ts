import { Prop, ModelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

//定义这个模型的其他属性
@ModelOptions({
    //等同于在mongoose需要定义的参数
    schemaOptions: {
        //自动加上创建和更新时间
        timestamps: true
    }
})

export class User {
    @ApiProperty({description: '用户名', example: 'user1'}) //告诉swagger，这是属性，需要展示在文档中
    @Prop()    //装饰属性，告诉nestjs这是数据库字段，需要保存到数据库
    username: string

    @ApiProperty({description: '密码', example: 'pwd1234567'})
    @Prop()
    password: string
}