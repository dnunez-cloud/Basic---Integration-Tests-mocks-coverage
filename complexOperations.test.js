import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Tests', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('checkEmail tests', () => {
    it('should be: The email is valid when input is valid like dario@hotmail.com', ()=> {
	    expect(complexOperations.checkEmail('dario@hotmail.com')).toBe('The email is valid');
    });

    it('should be: The email is valid when inputs are mocked to true', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
	    expect(complexOperations.checkEmail(1)).toBe('The email is valid');
    });

    it('should be: The email should be an string when the input is a number like 4', ()=> {
	    expect(complexOperations.checkEmail(4)).toBe('The email should be an string');
	  });

    it('should be: The email should be an string when input mocked isString to false', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
	    expect(complexOperations.checkEmail(1)).toBe('The email should be an string');
    });

    it('should be: The email is invalid when has non character @ in the input', ()=> {
	    expect(complexOperations.checkEmail('dario')).toBe('The email is invalid');
	  });

    it('should be: The email is invalid when the input mocked for validateEmail is false', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
	    expect(complexOperations.checkEmail(1)).toBe('The email is invalid');
    });

    it('should be: The email is invalid when input has not .com like dario@123123', ()=> {
	    expect(complexOperations.checkEmail('dario@123123')).toBe('The email is invalid');
	  });

    it('should be: The email is invalid when input has mocked to false validateEmail', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
	    expect(complexOperations.checkEmail('dario@hotmail.com')).toBe('The email is invalid');
    });

    it('should be: The email should be an string when incorrect input type like boolean true', ()=> {
	    expect(complexOperations.checkEmail(true)).toBe('The email should be an string');
    });

    it('should be: The email should be an string when isString is mocked and return false', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
	    expect(complexOperations.checkEmail('dario@hotmail.com')).toBe('The email should be an string');
	  });
  });

  describe('calculateArea tests', () => {
    it('should be: 12 when the figure is rectangle and the number1 is 3 and number2 is 4', ()=> {
	    expect(complexOperations.calculateArea('rectangle',3,4)).toBe(12);
    });

    it('should be: 12 when the multop is mocked to 12 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'multip').mockReturnValue(12);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.calculateArea('rectangle')).toBe(12);
    });

    it('should be: 16 when the figure is square and number1 = 4 & number2 = 4', ()=> {
	    expect(complexOperations.calculateArea('square',4,4)).toBe(16);
    });

    it('should be: 16 when the multip is mocked to 16 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'multip').mockReturnValue(16);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.calculateArea('square')).toBe(16);
    });

    it('should be: squares is not supported when isSupportedFigure is mocked to squares ', () => {
      jest.spyOn(basicOperations, 'multip').mockReturnValue(16);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue('squares');
	    expect(complexOperations.calculateArea('squares')).toBe('squares is not supported');
    });

    it('should be: 4 when the figure is triangle & number1 = 2 & number2 = 4', ()=> {
	    expect(complexOperations.calculateArea('triangle',2,4)).toBe(4);
    });

    it('should be: 4 when the division is mocked to 4 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'division').mockReturnValue(4);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.calculateArea('triangle')).toBe(4);
    });

    it('should be: 28.274333882308138 when the figure is circle & number1 = 3 & number2 = 3', ()=> {
	    expect(complexOperations.calculateArea('circle',3,3)).toBe(28.274333882308138);
    });

    it('should be: 28.274333882308138 when the exponent is mocked to 3 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(9);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.calculateArea('circle')).toBe(28.274333882308138);
    });

    it('should be: rectanglesss is not supported when figure is rectanglesss', ()=> {
	    expect(complexOperations.calculateArea('rectanglesss',3,4)).toBe('rectanglesss is not supported');
    });

    it('should be: rectanglesss is not supported when the input is rectanglesss is mocked and isNumber is true', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.calculateArea('rectanglesss')).toBe('rectanglesss is not supported');
    });

    it('should be: number1 and number2 should be numbers, when figure is square and number1 & number2 are empty', ()=> {
	    expect(complexOperations.calculateArea('square')).toBe('number1 and number2 should be numbers');
    });

    it('should be: number1 and number2 should be numbers when the input correct & isNumber is mocked to false', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
	    expect(complexOperations.calculateArea('rectangle',2,3)).toBe('number1 and number2 should be numbers');
    });

    it('should be: number1 and number2 should be numbers, when figure is square and number1 is rectangle', ()=> {
	    expect(complexOperations.calculateArea('circle','rectangle',7)).toBe('number1 and number2 should be numbers');
    });

    it('should be: -17.5 when the figure is triangle and number1 is -5 & number2 is 7', ()=> {
	    expect(complexOperations.calculateArea('triangle',-5,7)).toBe(-17.5);
    });

    it('should be: -17.5 when the division is mocked to -17.5 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'division').mockReturnValue(-17.5);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.calculateArea('triangle')).toBe(-17.5);
    });
  });

  describe('sumGratherThan tests', () => {
    it('should be: 8 is grather than 4, when number1 = 5 & number2 = 3 & number3 = 4', ()=> {
	    expect(complexOperations.sumGratherThan(5,3,4)).toBe('8 is grather than 4');
    });

    it('should be: 8 is grather than 4, when sum of number1 & 2 is mocked to 8 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'sum').mockReturnValue(8);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.sumGratherThan('a','b',4)).toBe('8 is grather than 4');
    });

    it('should be: 3 is less than 4, when number1 = 1 & number2 = 2 & number3 = 4', ()=> {
	    expect(complexOperations.sumGratherThan(1,2,4)).toBe('3 is less than 4');
    });

    it('should be: 3 is less than 4,  when sum of number1 & 2 is mocked to 3 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'sum').mockReturnValue(3);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.sumGratherThan('x','y',4)).toBe('3 is less than 4');
    });

    it('should be: The params should be numbers when number1 = b & number2 = 2 & number3 = empty', ()=> {
	    expect(complexOperations.sumGratherThan('b', 2)).toBe('The params should be numbers');
    });

    it('should be: The params should be numbers,  when isNumber is mocked to false', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
	    expect(complexOperations.sumGratherThan()).toBe('The params should be numbers');
    });

    it('should be: -3 is less than -1, when number1 = -5 & number2 = 2 & number3 = -1', ()=> {
	    expect(complexOperations.sumGratherThan(-5,2,-1)).toBe('-3 is less than -1');
    });

    it('should be: -3 is less than -1,  when sum of number1 & 2 is mocked to -3 and isNumber is true', () => {
      jest.spyOn(basicOperations, 'sum').mockReturnValue(-3);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
	    expect(complexOperations.sumGratherThan('x','y',-1)).toBe('-3 is less than -1');
    });

    it('should be: The params should be numbers, when number1 = undefined & number2 = []', ()=> {
	    expect(complexOperations.sumGratherThan(undefined, [])).toBe('The params should be numbers');
    });

    it('should be: The params should be numbers,  when isNumber is mocked to false', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
	    expect(complexOperations.sumGratherThan(5,2,3)).toBe('The params should be numbers');
    });
  });

  describe('intersectionBetweenArrays tests', () => {
    it('should be: [b], when array1 = [a,b,c] & array2 = [b,z,5]', () => {
	    expect(complexOperations.intersectionBetweenArrays(['a','b','c'], ['b','z','5'])).toEqual(['b']);
    });
    
    it('should be: [b], when isArray is mocked to true & arrayIntersection to [b]', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['b']);
	    expect(complexOperations.intersectionBetweenArrays()).toEqual(['b']);
    });

    it('should be: The params should be arrays, when array1 = [a,b,c] & array2 = a', () => {
	    expect(complexOperations.intersectionBetweenArrays(['a','b','c'], 'a')).toBe('The params should be arrays');
    });

    it('should be: The params should be arrays, when isArray is mocked to to false', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
	    expect(complexOperations.intersectionBetweenArrays(['a','b','c'], ['b','z','5'])).toEqual(
      'The params should be arrays');
    });

    it('should be: There are not matching elements, when array1 = [a,b,c] & array2 = [1,2,3]', () => {
	    expect(complexOperations.intersectionBetweenArrays(['a','b','c'], ['1','2','3'])).toBe(
      'There are not matching elements');
    });

    it('should be: There are not matching elements, when isArray is mocked to true & arrayIntersection to []', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
	    expect(complexOperations.intersectionBetweenArrays(['a','c'], ['a'])).toEqual('There are not matching elements');
    });

    it('should be: The params should be arrays, when array1 & array2 are empty', () => {
	    expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });

    it('should be: The params should be arrays, when isArray is mocked to to false', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
	    expect(complexOperations.intersectionBetweenArrays(['a','b'], ['b','z'])).toEqual('The params should be arrays');
    });

    it('should be: [a,b,c], when array1 = [a,b,c] & array2 = [a,b,c] ', () => {
	    expect(complexOperations.intersectionBetweenArrays(['a','b','c'], ['a','b','c'])).toEqual(['a','b','c']);
    });

    it('should be: [a,b,c], when isArray is mocked to true & arrayIntersection to [a,b,c]', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['a','b','c']);
	    expect(complexOperations.intersectionBetweenArrays()).toEqual(['a','b','c']);
    });
  });

  describe('sortArrayOfObjectsByKey tests', () => {
    it('valid result for sortArrayOfObjectsByKey by key age showing 24, 30 & 31 after sorting', () => {
	    expect(complexOperations.sortArrayOfObjectsByKey([{name:'dario', age:'31'}, {name:'hernan', age:'24'},
      {name:'carlos', age:'30'}],'age')).toEqual([{name:'hernan', age:'24'}, {name:'carlos', age:'30'},{name:'dario',
      age:'31'}]);
    });

    it('valid result for sortArrayOfObjectsByKey by key age showing 24, 30 & 31 after sorting Mocked ', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue([{name:'hernan', age:'24'}, {name:'carlos',
      age:'30'},{name:'dario', age:'31'}]);
	    expect(complexOperations.sortArrayOfObjectsByKey(1,1)).toEqual([{name:'hernan', age:'24'}, {name:'carlos',
      age:'30'},{name:'dario', age:'31'}]);
    });

    it('should be: Some elements in the array does not have the age property, when array = [string] & key= age', () => {
	    expect(complexOperations.sortArrayOfObjectsByKey(['string'],'age')).toEqual(
      'Some elements in the array does not have the age property');
    });

    it('should be: Some elements in the array does not have the key property, when mocked params ', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
	    expect(complexOperations.sortArrayOfObjectsByKey(1,1)).toEqual(
      'Some elements in the array does not have the 1 property');
    });

    it('should be: The first param should be an array, when array = empty & key = age', () => {
	    expect(complexOperations.sortArrayOfObjectsByKey('','age')).toEqual('The first param should be an array');
    });

    it('should be: The first param should be an array, when mocked isArray to false ', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
	    expect(complexOperations.sortArrayOfObjectsByKey(['a'],1)).toEqual('The first param should be an array');
    });

    it('should be: The second param should be a string, when array = [{name:dario},{name:fabricio}] & key = 0', () => {
	    expect(complexOperations.sortArrayOfObjectsByKey([{name:'dario'},{name:'fabricio'}],0)).toEqual(
      'The second param should be an string');
    });

    it('should be: The second param should be an string, when mocked isArray to true & isString to false', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
	    expect(complexOperations.sortArrayOfObjectsByKey(['a'],'a')).toEqual('The second param should be an string');
    });

    it('should be: The first param should be an array, when array & key are empty', () => {
	    expect(complexOperations.sortArrayOfObjectsByKey()).toEqual('The first param should be an array');
    });

    it('should be: The first param should be an array, when mocked isArray to false', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
	    expect(complexOperations.sortArrayOfObjectsByKey(['a'],'a')).toEqual('The first param should be an array');
    });


    it('should be: [{name:dario},{name:dario}], when array = [{name:dario},{name:dario}] and key = name', () => {
	    expect(complexOperations.sortArrayOfObjectsByKey([{name:'dario'},{name:'dario'}], 'name')).toEqual(
      [{"name": "dario"},{"name": "dario"}]);
    });

    it('should be: [{name:dario},{name:dario}], when mocked isArray, isString & arrayElementsAreObjectWith', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue([{name:'dario'}, {name:'dario'}]);
	    expect(complexOperations.sortArrayOfObjectsByKey(1,1)).toEqual([{name:'dario'}, {name:'dario'}]);
    });
  });

  describe('numberOfOddAndEvenNumbers tests', () => {
    it('should be: {even:4, odd:3}, when array = [1,22,4,6,5,15,16]', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,22,4,6,5,15,16])).toEqual({"even": 4, "odd": 3});
    });

    it('should be: {even:4, odd:3}, when mocked isArray, isNumber to true', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,5,15]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([22,4,6,16]);
	    expect(complexOperations.numberOfOddAndEvenNumbers([1])).toEqual({"even": 4, "odd": 3});
    });

    it('should be: The param should be an array, when array = 5', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(5)).toEqual('The param should be an array');
    });

    it('should be: The param should be an array, when isArray is mocked to false', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
	    expect(complexOperations.numberOfOddAndEvenNumbers([1,2])).toEqual('The param should be an array');
    });

    it('should be: The param should be an array, when array = empty', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
    });

    it('should be: The param should be an array, when isArray is mocked', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
	    expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4])).toEqual('The param should be an array');
    });

    it('should be; The array should have only numbers, when array = [1,undefined,4,6,dog,15,16]', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,undefined,4,6,'dog',15,16])).toEqual(
      'The array should have only numbers');
    });

    it('should be; The array should have only numbers, when isNumber is mocked to false', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
	    expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4])).toEqual('The array should have only numbers');
    });
  });
});