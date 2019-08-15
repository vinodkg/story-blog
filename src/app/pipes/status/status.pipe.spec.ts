import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('status for status code 1 to equal to "Applied"', () =>{
    const pipe = new StatusPipe();
    expect(pipe.transform(1)).toEqual("Applied");
  });

  it('status for status code 2 to equal to "In Process"', () =>{
    const pipe = new StatusPipe();
    expect(pipe.transform(2)).toEqual("In Process");
  });

  it('status for status code 3 to equal to "Hired"', () =>{
    const pipe = new StatusPipe();
    expect(pipe.transform(3)).toEqual("Hired");
  });

  it('status for status code 4 to equal to "Not Hired"', () =>{
    const pipe = new StatusPipe();
    expect(pipe.transform(4)).toEqual("Not Hired");
  });

  it('status for status code 5 to equal to "NA"', () =>{
    const pipe = new StatusPipe();
    expect(pipe.transform(5)).toEqual("NA");
  });


});
