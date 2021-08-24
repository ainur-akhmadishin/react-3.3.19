export default class Utilits {
  travelTime = (min) => {
    const minuts = min % 60;
    const hour = (min - minuts) / 60;
    return `${this.setZero(hour)}ч ${this.setZero(minuts)}м`;
  };

  departureTime = (val) => {
    const datings = new Date(val);

    return `${this.setZero(datings.getHours())}:${this.setZero(datings.getMinutes())}`;
  };

  arrivalTime = (datings1, datings2) => {
    const datings = new Date(datings1);
    const minuts = datings2 % 60;
    const hour = (datings2 - minuts) / 60;
    datings.setHours(datings.getHours() + hour);
    datings.setMinutes(datings.getMinutes() + +minuts);
    return this.departureTime(datings);
  };

  setZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };

  insertSpace = (str) => {
    const strBegin = str.toString().substring(0, 2);
    const strEnd = str.toString().substring(2);

    return `${strBegin}  ${strEnd}`;
  };

  deleteComma = (arr) => (arr.length ? arr.toString().split(',').join(' ') : null);

  countTransfer = (count) => {
    switch (count.length) {
      case 0:
        return 'без пересадок';
      case 1:
        return '1 пересадка';
      default:
        return `${count.length} пересадки`;
    }
  };
}
