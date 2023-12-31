class PlanModel{
    constructor(id,name,day_dinner_price,day_lunch_price,month_day_dinner_cancel_price,month_day_lunch_cancel_price,month_dinner_price,month_full_price,month_lunch_price){
        this.pid =id,
        this.name = name,
        this.day_dinner_price = day_dinner_price,
        this.day_lunch_price =day_lunch_price ,
        this.month_day_dinner_cancel_price = month_day_dinner_cancel_price,
        this.month_day_lunch_cancel_price = month_day_lunch_cancel_price,
        this.month_dinner_price = month_dinner_price,
        this.month_full_price = month_full_price,
        this.month_lunch_price = month_lunch_price
    } 
}
export default PlanModel