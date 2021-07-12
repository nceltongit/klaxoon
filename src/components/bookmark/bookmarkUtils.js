import { LINK_TYPE } from '../../utils/constants';

export const fromNoEmbedToBookmark = (data, id) => {
  let bookmark = {
    id,
    url: data.url,
    title: data.title,
    author: data.author_name,
    date: new Date(),
    width: data.width,
    height: data.height,
    keyWords: []
  };

  if (data.type === LINK_TYPE.VIDEO) {
    bookmark = { ...bookmark, duration: data.duration };
  }

  return bookmark;
};
