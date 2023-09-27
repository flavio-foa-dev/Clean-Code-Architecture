import axios from "axios";
import { calculate } from "../src/RideCalculator";

describe('Testa Api Ride', () => {
  test('should Fazer o calculo de uma corrida durante o dia ', async () => {
    const input = {
      segments: [
        { dist:10, ds: '2021-03-11T10:00:00'}
      ]
   };

    const response = await axios.post("http//localhost:3000/calc", input)
    const output = await response.data

    expect(output.result).toBe(21)

  });
});


describe('Testa Api Ride', () => {
  test('should Fazer o calculo de uma corrida durante o dia ', async () => {
    const segments  = [
        { dist:10, ds: new Date('2021-03-11T10:00:00')}
      ]


    const price = calculate(segments)
    expect(price).toBe(21)

  });
});