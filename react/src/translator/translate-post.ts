import Translate from './translate';

export interface IPost {
  [key: string]: {
      index: string,
      published: boolean | number,
      featured: boolean | number,
      prominent: boolean | number,
      category: string,
      name: string | null,
      hero: string,
      slug: string,
      posted_at: string,
      translations: IPostTranslations[]
  }
}

export interface IPostTranslations {
  [key: string]: {
      short_name: string | null,
      title: string | null,
      sub_title: string | null,
      description: string | null,
      aside: boolean | number,
      meta: object | null,
      updated_at: string,
      readtime: boolean | number
      content: any
  } | null
}

class TranslatePost extends Translate {
  transform(data: any) {
    let translated = data.translations[this.defaultLanguage]
      ? data.translations[this.defaultLanguage]
      : data.translations[this.fallbackLanguage];

    translated['category'] = data['category'];
    translated['featured'] = data['featured'];
    translated['prominent'] = data['prominent'];
    translated['published'] = data['published'];
    translated['posted_at'] = data['posted_at'];
    translated['hero'] = data['hero'];
    translated['slug'] = data['slug'];
    translated['index'] = data['index'];
    return translated;
  }

  recent(amount: number = 3) {
    return this.all().slice(0, amount);
  }
}

export default TranslatePost;