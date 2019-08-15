import { DefaultTextPipe } from './default-text.pipe';

describe('DefaultTextPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('Default text for "title" if value is empty', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe.transform("", "title")).toEqual("Your title here!");
  });

  it('Default text for "title" if value is not empty', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe.transform("Users title", "title")).toEqual("Users title");
  });

  it('Default img for "img" if value is empty', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe.transform("", "img")).toEqual("assets/images/story-image.jpg");
  });

  it('Default img for "img" if value is not empty', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe.transform("Users Image", "img")).toEqual("Users Image");
  });

  it('Default text for "content" if value is empty', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe.transform("", "content")).toEqual("Your content here!");
  });

  it('Default text for "content" if value is not empty', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe.transform("Users Content", "content")).toEqual("Users Content");
  });

  it('Default text for any key other than title, img, content if value is empty', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe.transform("Users title", "contentTest")).toEqual("Users title");
  });


});
