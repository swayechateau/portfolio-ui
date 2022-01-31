import Translate from "../translate";

class MultiTranslate extends Translate {
    languages: string[];
    translated: any = [];
    constructor(lanuages:string[], fallback: string, model:any){
        super()
        this.languages = lanuages;
        this.fallbackLanguage = fallback;
        this.model = model;
    }

    everyLanguage() {
        this.languages.forEach(lang => {
            this.defaultLanguage = lang
            this.translated[lang] = this.all()
        })
    }
}

export default MultiTranslate