export class CreateStatisticAndRentDto {
    public car_id: number;
    public tariff_id: number;
    public date_from: Date;
    public date_to: Date;
    public amount: number;
    public discounted_amount: number;
    public count: number;
}