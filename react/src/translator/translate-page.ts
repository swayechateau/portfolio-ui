import Translate from './translate';

export interface IPage {
  [key: string]: {
    published: boolean | number,
    name: string,
    hero: string,
    slug: string,
    posted_at: string | null,
    translations: IPageTranslations[]
  }
}

export interface IPageTranslations {
  [key: string]: {
      page_id: number,
      name: string,
      title: string,
      sub_title: string,
      description: string | null,
      content: any,
      aside: boolean | number,
      meta: object | null,
      updated_at: string
  }
}

export class TranslatePage extends Translate {
  transform(data: any): object {
    let translated =
      data.translations[this.defaultLanguage] != null
        ? data.translations[this.defaultLanguage]
        : data.translations[this.fallbackLanguage];
    delete translated.key_id;
    translated['published'] = data['published'];
    translated['hero'] = data['hero'];
    translated['slug'] = data['slug'];
    translated['index'] = data['index'];
    return translated;
  }

  names() : string[] {
    let translatedPageNames: any = [];
    this.get_keys().forEach(key => {
      const page = this.one(key);
      page ? translatedPageNames[page['name']] : null;
    });
    return translatedPageNames;
  }
}

export default TranslatePage;
