class Days {
  constructor(dateFrom, dateTo, daysData) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.daysData = daysData;
  }

  getDaysListByDate() {
    const daysWithData = this.daysData.filter((day) => this.isDayInDateRange(day));
    const generatedDates = this.generateDates();
    return this.generateDaysList(daysWithData, generatedDates);
  }

  generateDaysList(daysWithData, generatedDates) {
    return generatedDates.map((generatedDate) => {
      const existedDay = daysWithData.find((day) => this.isDateExist(day, generatedDate));
      return existedDay || generatedDate;
    });
  }

  isDateExist(day, date) {
    return day.date.slice(0,-14) === date.date.slice(0,-14);
  }

  isDayInDateRange(day) {
    return new Date(day.date) > new Date(this.dateFrom) && new Date(day.date) < new Date(this.dateTo);
  }

  generateDates() {
    const dates = [
      ...this.generatePreviousDates(),
      ...this.generateNextDates(),
    ];
    return dates.map((date) => ({
      id: date.toISOString().slice(0,-14),
      date: date.toISOString(),
      tasks: [],
    }));
  }

  generatePreviousDates() {
    const previousDates = [];
    for (let i = 15; i > 0; i -= 1) {
      const today = new Date();
      const prevDate = new Date(today.setDate(today.getDate() - i));
      previousDates.push(prevDate);
    }
    return previousDates;
  }
  
  generateNextDates() {
    const nextDates = [];
    for (let i = 0; i < 15; i += 1) {
      const today = new Date();
      const nextDate = new Date(today.setDate(today.getDate() + i));
      nextDates.push(nextDate);
    }
    return nextDates;
  }
}

export default Days;
  