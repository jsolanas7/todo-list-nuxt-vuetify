export class DateHelper{
    getDateWithFormat(date: string): any{
        var d = new Date(date);
        return d.getFullYear() + "/"
                    + ((d.getMonth()+1).toString().length === 1 ? ('0' + (d.getMonth()+1)) : (d.getMonth()+1))  + "/" 
                    + (d.getDate().toString().length === 1 ? ('0' + d.getDate()) : d.getDate()) + "   "  
                    + (d.getHours().toString().length === 1 ? ('0' + d.getHours()) : d.getHours())  + ":"  
                    + (d.getMinutes().toString().length === 1 ? ('0' + d.getMinutes()) : d.getMinutes()); 
    }
}