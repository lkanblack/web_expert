let income_inp = document.querySelector('#income');
let days = document.querySelector('#days');
let checkbox = document.querySelector('#tubercolosis');
let calculate_btn = document.querySelector('#calculate');
// EMPLOYER & HEALTH
let employer_compensation = document.querySelector('.employer-compensation');
let employer_days_compensation = document.querySelector('.employer-days-compensation');
let employer_daily = document.querySelector('.daily_employer');
let health_days_compensation = document.querySelector('.health-days-compensation');
let health_compensation = document.querySelector('.health-compensation');
let health_daily = document.querySelector('.daily_health');
// TOTAL
let total_days = document.querySelector('.total-days');
let final_price = document.querySelector('.final-price');


calculate_btn.addEventListener('click', function(e){
    let health_day_compensation = 0;
    let day_compensation = 0;

    if(income_inp.value == ''){
        e.preventDefault();
        income_inp.classList.add('alert-danger');
    } else if (days.value == '') {
        e.preventDefault();
        days.classList.add('alert-danger');
        income_inp.classList.remove('alert-danger');
    } else {
        income_inp.classList.remove('alert-danger');
        days.classList.remove('alert-danger');

        e.preventDefault();
        let income = income_inp.value;
        let day = days.value;
        total_days.innerHTML = day;
        if(checkbox.checked){
            let no_tubercolosis = Number(income * 6) / 240;
            let deduction30 =  no_tubercolosis - (no_tubercolosis * 0.3);
            let dayCompensation =  (deduction30 - (deduction30 * 0.2)).toFixed(2);
            health_day_compensation = dayCompensation;
            day_compensation = dayCompensation;
            if (Number(day) <= 7){
                employer_compensation.innerHTML = (day_compensation * Number(day - 3)).toFixed(2);
            } else {
                employer_compensation.innerHTML = (day_compensation * 4).toFixed(2);
            }
            employer_daily.innerHTML = dayCompensation;
            final_price.innerHTML = ((day_compensation * Number(day - 3)).toFixed(2));
            if(day > 240){
                health_daily.innerHTML = '0,00';
                employer_daily.innerHTML = '0,00';
                final_price.innerHTML = '0.00';
            }
            daysCalc(day);
        } else {
            let no_tubercolosis = Number(income * 6) / 182;
            let deduction30 =  no_tubercolosis - (no_tubercolosis * 0.3);
            let dayCompensation =  (deduction30 - (deduction30 * 0.2)).toFixed(2);
            health_day_compensation = dayCompensation;
            day_compensation = dayCompensation;
            if (Number(day) <= 7){
                employer_compensation.innerHTML = (day_compensation * Number(day - 3)).toFixed(2);
            } else {
                employer_compensation.innerHTML = (day_compensation * 4).toFixed(2);
            }
            employer_daily.innerHTML = dayCompensation;
            final_price.innerHTML = ((day_compensation * Number(day - 3)).toFixed(2));
            if(day > 182){
                health_daily.innerHTML = '0,00';
                employer_daily.innerHTML = '0,00';
                final_price.innerHTML = '0.00';
            }
            daysCalc(day);
        }
    
        function daysCalc(num){
            if(checkbox.checked){
                if(num <= 3){
                    health_daily.innerHTML = '0,00';
                    employer_daily.innerHTML = '0,00';
                    final_price.innerHTML = '0.00';
                }
                if(num >= 4 && num <= 240){
                    let days_count = num - 3;
                    if(days_count <= 4){
                        employer_days_compensation.innerHTML = days_count;
                        health_days_compensation.innerHTML = '0';
                        health_compensation.innerHTML = '0,00';
                        health_daily.innerHTML = '0,00';
        
                    } else if (days_count >= 5) {
                        employer_days_compensation.innerHTML = '4';
                        health_days_compensation.innerHTML = days_count - 4;
                            day_compensation = health_day_compensation;
                            if (Number(day) >= 8){
                                health_compensation.innerHTML = (day_compensation * Number(day - 7)).toFixed(2);
                            } 
                        
                        health_daily.innerHTML = health_day_compensation;
                    }
                } else {
                    employer_days_compensation.innerHTML = '0';
                    health_days_compensation.innerHTML = '0';
                    employer_compensation.innerHTML = '0,00';
                    health_compensation.innerHTML = '0,00';
                }
            } else {
                if(num <= 3){
                    health_daily.innerHTML = '0,00';
                    employer_daily.innerHTML = '0,00';
                    final_price.innerHTML = '0.00';
                }
                if(num >= 4 && num <= 182){
                    let days_count = num - 3;
                    if(days_count <= 4){
                        employer_days_compensation.innerHTML = days_count;
                        health_days_compensation.innerHTML = '0';
                        health_compensation.innerHTML = '0,00';
                        health_daily.innerHTML = '0,00';
        
                    } else if (days_count >= 5) {
                        employer_days_compensation.innerHTML = '4';
                        health_days_compensation.innerHTML = days_count - 4;
                            day_compensation = health_day_compensation;
                            if (Number(day) >= 8){
                                health_compensation.innerHTML = (day_compensation * Number(day - 7)).toFixed(2);
                            } 
                        
                        health_daily.innerHTML = health_day_compensation;
                    }
                } else {
                    employer_days_compensation.innerHTML = '0';
                    health_days_compensation.innerHTML = '0';
                    employer_compensation.innerHTML = '0,00';
                    health_compensation.innerHTML = '0,00';
                }
            }
            
        }
    
    }


});