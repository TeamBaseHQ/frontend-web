export default class Utils {
  static loadMedia(media, size) {
    if (media && media.url && media.url.original) {
      return media.getUrl(size);
    }
    return 'https://placehold.it/100x100';
  }
}
