import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', () => {
  let pipe: SearchFilterPipe;

  beforeEach(() => {
    pipe = new SearchFilterPipe();
  });

  it('should return an empty array if items is null or undefined', () => {
    expect(pipe.transform(null, 'test')).toEqual([]);
    expect(pipe.transform(undefined, 'test')).toEqual([]);
  });

  it('should return an empty array if items is not an array', () => {
    expect(pipe.transform('not an array' as any, 'test')).toEqual([]);
  });

  it('should return the original items if searchText is null or empty', () => {
    const items = [{ name: 'Product 1' }, { name: 'Product 2' }];
    expect(pipe.transform(items, null)).toEqual(items);
    expect(pipe.transform(items, '')).toEqual(items);
  });

  it('should filter items based on searchText and searchFields', () => {
    const items = [
      { name: 'Product 1' },
      { name: 'Product 2' },
      { name: 'Item 3' }
    ];

    expect(pipe.transform(items, 'pro', ['name'])).toEqual([
      { name: 'Product 1' },
      { name: 'Product 2' }
    ]);
  });
});
