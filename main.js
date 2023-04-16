class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    get carColor() {
      return this.carname;
    }
    set carColor(name) {
      this.carname = name;
    }
  }
  const myCar = new Car("Valvo","2023");
  
  myCar.carColor="Red";
  console.log('Car Name '+ myCar.name); 
  console.log('Car Model ' +myCar.year); 
  console.log('Car Color '+ myCar.carColor); 