import { JobstatusPipe } from './jobstatus.pipe';

describe('JobstatusPipe', () => {
  it('create an instance', () => {
    const pipe = new JobstatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('job status for status code 1 to equal to "Active"', () =>{
    const pipe = new JobstatusPipe();
    expect(pipe.transform(1)).toEqual("Active");
  });

  it('job status for status code 2 to equal to "Closing Soon"', () =>{
    const pipe = new JobstatusPipe();
    expect(pipe.transform(2)).toEqual("Closing Soon");
  });

  it('job status for status code 3 to equal to "Closed"', () =>{
    const pipe = new JobstatusPipe();
    expect(pipe.transform(3)).toEqual("Closed")
  });
  
  it('job status for status code 4 to equal to "NA"', () =>{
    const pipe = new JobstatusPipe();
    expect(pipe.transform(4)).toEqual("NA")
  });

});
