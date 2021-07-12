import reducer, { initialState } from './bookmarkReducer';

describe('test the bookmark reducer and actions', () => {
  it('should return the initial state', () => {
    expect(initialState).toEqual({
      status: 'LOADING',
      bookmarks: []
    });
  });

  it('should return the state by default', () => {
    expect(reducer(initialState, { type: '' })).toEqual({
      status: 'LOADING',
      bookmarks: []
    });
  });

  it('should charge the datas', () => {
    const data = {
      data: {
        bookmarks: [
          {
            id: 1,
            url:
              'https://www.flickr.com/photos/normanwest4tography/51285283394/in/explore-2021-07-03/',
            title: 'Pintail - Anas acuta',
            author: 'normanwest4tography',
            date: '2021-07-04',
            width: 1024,
            height: 512,
            keyWords: ['Test', 'Test2']
          }
        ]
      }
    };
    expect(reducer(initialState, { type: 'FETCH_BOOKMARKS_SUCCESS', res: data })).toEqual({
      status: 'SUCCESS',
      bookmarks: [
        {
          id: 1,
          url:
            'https://www.flickr.com/photos/normanwest4tography/51285283394/in/explore-2021-07-03/',
          title: 'Pintail - Anas acuta',
          author: 'normanwest4tography',
          date: '2021-07-04',
          width: 1024,
          height: 512,
          keyWords: ['Test', 'Test2']
        }
      ]
    });
  });
  it('should save the keywords', () => {
    const bookmarks = [
      {
        id: 1,
        url:
          'https://www.flickr.com/photos/normanwest4tography/51285283394/in/explore-2021-07-03/',
        title: 'Pintail - Anas acuta',
        author: 'normanwest4tography',
        date: '2021-07-04',
        width: 1024,
        height: 512,
        keyWords: []
      }
    ];
    expect(
      reducer(
        { bookmarks },
        {
          type: 'SAVE_KEYWORDS',
          bookmarkId: 1,
          keyWords: ['Test1', 'Test2']
        }
      )
    ).toEqual({
      bookmarks: [
        {
          id: 1,
          url:
            'https://www.flickr.com/photos/normanwest4tography/51285283394/in/explore-2021-07-03/',
          title: 'Pintail - Anas acuta',
          author: 'normanwest4tography',
          date: '2021-07-04',
          width: 1024,
          height: 512,
          keyWords: ['Test1', 'Test2']
        }
      ]
    });
  });
  it('should delete bookmark', () => {
    const bookmarks = [
      {
        id: 1,
        url:
          'https://www.flickr.com/photos/normanwest4tography/51285283394/in/explore-2021-07-03/',
        title: 'Pintail - Anas acuta',
        author: 'normanwest4tography',
        date: '2021-07-04',
        width: 1024,
        height: 512,
        keyWords: []
      }
    ];
    expect(
      reducer(
        { bookmarks },
        {
          type: 'DELETE_BOOKMARK',
          bookmarkId: 1
        }
      )
    ).toEqual({
      bookmarks: []
    });
  });
});
