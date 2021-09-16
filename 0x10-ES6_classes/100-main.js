import EVCar from './100-evcar';
import Car from './10-car';

const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
console.log(ec1);
console.log(ec1 instanceof Car);

const ec2 = ec1.cloneCar();
console.log(ec2);
console.log(ec2 instanceof Car);
