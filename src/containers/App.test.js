import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  describe('when there is an active search', () => {
    it('selects the searched gifs for display', () => {
      const searchGifs = jest.fn();
      const trendingGifs = jest.fn();
      const state = {
        searchGifs: {
          active: true,
          gifs: searchGifs,
        },
        trendingGifs: {
          gifs: trendingGifs,
        },
      };
      const props = mapStateToProps(state);

      expect(props.gifs).toBe(searchGifs);
    });
  });

  describe('when there is no active search', () => {
    it('selects the trending gifs for display', () => {
      const searchGifs = jest.fn();
      const trendingGifs = jest.fn();
      const state = {
        searchGifs: {
          active: false,
          gifs: searchGifs,
        },
        trendingGifs: {
          gifs: trendingGifs,
        },
      };
      const props = mapStateToProps(state);

      expect(props.gifs).toBe(trendingGifs);
    });
  });

  describe('if there is an active search request', () => {
    it('marks that there is an active request', () => {
      const state = {
        searchGifs: {
          isFetching: true,
        },
        trendingGifs: {
          isFetching: false,
        },
      };
      const props = mapStateToProps(state);

      expect(props.isFetching).toBe(true);
    });
  });

  describe('if there is an active trending request', () => {
    it('marks that there is an active request', () => {
      const state = {
        searchGifs: {
          isFetching: false,
        },
        trendingGifs: {
          isFetching: true,
        },
      };
      const props = mapStateToProps(state);

      expect(props.isFetching).toBe(true);
    });
  });

  describe('if there is no active request', () => {
    it('marks that there is no active request', () => {
      const state = {
        searchGifs: {
          isFetching: false,
        },
        trendingGifs: {
          isFetching: false,
        },
      };
      const props = mapStateToProps(state);

      expect(props.isFetching).toBe(false);
    });
  });

  describe('if a request resulted in an error', () => {
    it('passes the error along, giving priority to search errors', () => {
      const state = {
        searchGifs: {
          error: 'error searching gifs'
        },
        trendingGifs: {
          error: 'error fetching trending gifs',
        },
      };
      const props = mapStateToProps(state);

      expect(props.error).toEqual('error searching gifs');
    });
  });

  describe('if there is no error', () => {
    it('passes null along', () => {
      const state = {
        searchGifs: {
          error: null,
        },
        trendingGifs: {
          error: null,
        },
      };
      const props = mapStateToProps(state);

      expect(props.error).toBeNull();
    });
  });
});