import { Prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class VipUser {
    @ApiProperty({description: '用户名', example: 'user1'}) 
    @Prop()
    username: string

    @ApiProperty({description: '昵称', example: '欧阳锋'})
    @Prop()
    nicename: string

    @ApiProperty({description: 'VIP开始时间', example: '2012/03/17'})
    @Prop()
    vipstartdate: string
    
    @ApiProperty({description: 'VIP结束时间', example: '2014/03/17'})
    @Prop()
    vipenddate: string
}