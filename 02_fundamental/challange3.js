const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "john Smith",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calBMI();
console.log(mark.bmi);
john.calBMI();
console.log(john.bmi);
