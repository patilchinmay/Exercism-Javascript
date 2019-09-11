export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(complexNumber) {
    let sumReal = this._real + complexNumber.real;
    let sumImag = this._imag + complexNumber.imag;
    return new ComplexNumber(sumReal, sumImag);
  }

  sub(complexNumber) {
    let subReal = this._real - complexNumber.real;
    let subImag = this._imag - complexNumber.imag;
    return new ComplexNumber(subReal, subImag);
  }

  div(complexNumber) {
    let divReal = (this._real * complexNumber.real + this._imag * complexNumber.imag)/(complexNumber.real**2 + complexNumber.imag**2);
    let divImag = (this._imag * complexNumber.real - this._real * complexNumber.imag)/(complexNumber.real**2 + complexNumber.imag**2);
    return new ComplexNumber(divReal, divImag);
  }

  mul(complexNumber) {
    let mulReal = this._real * complexNumber.real - this._imag * complexNumber.imag;
    let mulImag = this._imag * complexNumber.real + this._real * complexNumber.imag;
    return new ComplexNumber(mulReal, mulImag);
  }

  get abs() {
    this._abs = Math.sqrt(this._real**2 + this._imag**2);
    return this._abs;
  }

  get conj() {
    let conjImag = -1*this._imag || 0;
    return new ComplexNumber(this._real, conjImag);
  }

  get exp() {
    let expReal = Math.E**this._real * Math.cos(this._imag);
    let expImag = Math.E**this._real * Math.sin(this._imag);
    return new ComplexNumber(expReal, expImag);
  }
}
