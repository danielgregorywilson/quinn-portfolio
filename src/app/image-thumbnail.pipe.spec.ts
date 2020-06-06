import { ImageThumbnailPipe } from './image-thumbnail.pipe';

describe('ImageThumbnailPipe', () => {
  it('create an instance', () => {
    const pipe = new ImageThumbnailPipe();
    expect(pipe).toBeTruthy();
  });
});
