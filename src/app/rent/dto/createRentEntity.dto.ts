export class CreateRentEntityDto {
    car_id: number;
    tariff_id: number;
    date_from: string;
    date_to: string;
    amount: number;
    discounted_amount: number;
}