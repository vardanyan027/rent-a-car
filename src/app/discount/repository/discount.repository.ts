import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';

@Injectable()
export class DiscountRepository {
    constructor(private readonly databaseService: DatabaseService) {}
    async findDiscountForRent(rentDays: number, type: string) {
        return await this.databaseService.executeQuery(
            `SELECT * from "Discounts"
                        WHERE (type = '${type}'
                        AND (CAST(data->>'days_from' as int) <= ${rentDays}
                        AND CAST(data->>'days_to' as int) >= ${rentDays}));`
        );
    }

}
