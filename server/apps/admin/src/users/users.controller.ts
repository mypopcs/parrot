import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags} from '@nestjs/swagger'
const adminOption = require('../adminOption.json')
const tableOption = adminOption.option

//指定模型
@Crud({
    model: User
})

@ApiTags('用户管理')
@Controller('users')
export class UsersController {
    //在constructor中引用模型，使用@InjectModel注入User模型到model属性
    constructor(@InjectModel(User) private readonly model){}

    @Get('option')
    option(){
        return {
            column: adminOption.users.column,
            tableOption
        }
    }
}
