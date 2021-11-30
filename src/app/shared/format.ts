import * as moment from "moment";

export class Format {

 

  static toDate(date) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  }

  static toDateWithFormat(date, format) {
    moment.locale('id');
    return moment(date).format(format);
  }

  static coutDate(FirstHour, LastHour) {
    if (FirstHour == undefined || FirstHour == "") {
      FirstHour = new Date();
    }
    if (LastHour == undefined || LastHour == "") {
      LastHour = new Date();
    }

    let HourNow: any = new Date(FirstHour);
    let HourLast: any = new Date(LastHour);
    let diffMs = HourLast - HourNow;
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); //Jam
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); //Menit
    let TotalJamMenit = diffHrs + " Jam, " + diffMins + " Menit ";

    return TotalJamMenit;
  }

  static countAge(dateDay, target) {
    target = moment(target);
    let months = target.diff(moment(dateDay), "months", true);
    let birthSpan = {
      year: Math.floor(months / 12),
      month: Math.floor(months) % 12,
      day: Math.round((months % 1) * target.daysInMonth()),
    };
    // you can adjust below logic as your requirements by yourself
    return `${birthSpan.year} tahun ${birthSpan.month} bulan ${birthSpan.day} hari`;
  }

  static currency(data, currency) {
    return (
      currency +
      " " +
      parseFloat(data)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    );
  }

  static toCurrency(money: number) {
    return money.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  static getMonthName(month: number) {
    let arrMonth = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    return arrMonth[month];
  }

  static dateToTimeStamp(date) {
    return moment(date).format("X");
  }
}
