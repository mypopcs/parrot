import { Controller, Get} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { VipUser } from '@libs/db/models/vipuser.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags} from '@nestjs/swagger'
const adminOption = require('../adminOption.json')
const tableOption = adminOption.option

@Crud({
    model: VipUser
})

@ApiTags('VIP会员')
@Controller('vipusers')
export class VipUsersController {

    constructor(@InjectModel(VipUser) private readonly model){}

    @Get('option')
    option(){
        return {
            column: adminOption.vipusers.column,
            tableOption
        }
    }
}