class Store extends Vanilla_Redux_Store {
    constructor(reducer) {
        super(reducer, Immutable.Map({}));
    }
    init () {
        let data = {
            site: {
                active_page: 'page01',
                home_page: 'page01',
                pages: [
                    {
                        code: "page01",
                        title: "Home",
                        menu_label: '家',
                        active_section: 'root',
                        home_section: 'root',
                        sections: [
                            { code: 'root', tag: 'page01-sec_root', title: 'Section: root', description: '' },
                        ],
                        stye: {
                            color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                        }
                    },
                    {
                        code: "page02",
                        title: "量子コンユーター(ゲート型) シュミレーター",
                        menu_label: '量シ',
                        active_section: 'root',
                        home_section: 'root',
                        sections: [{ code: 'root', tag: 'page02-sec_root', title: 'Home', description: '' }],
                        stye: {
                            color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                        }
                    },
                    {
                        code: "page03",
                        title: "開発ブログ",
                        menu_label: '開ブ',
                        active_section: 'root',
                        home_section: 'root',
                        sections: [{ code: 'root', tag: 'page03-sec_root', title: 'Home', description: '' }],
                        stye: {
                            color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                        }
                    },
                    {
                        code: "page04",
                        title: "Pure Lisp",
                        menu_label: 'L',
                        active_section: 'root',
                        home_section: 'root',
                        sections: [{ code: 'root', tag: 'page04-sec_root', title: 'Home', description: '' }],
                        stye: {
                            color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                        }
                    },
                    {
                        code: "page05",
                        title: "コンパイラ",
                        menu_label: 'C',
                        active_section: 'root',
                        home_section: 'root',
                        sections: [{ code: 'root', tag: 'page05-sec_root', title: 'Home', description: '' }],
                        stye: {
                            color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                        }
                    }
                ]
            }
        };

        for (var i in data.site.pages) {
            let page = data.site.pages[i];
            for (var k in page.sections) {
                let section = page.sections[k];
                let hash = '#' + page.code;

                if (section.code!='root')
                    hash += '/' + section.code;

                section.hash = hash;
            }
        }


        this._contents = Immutable.Map(data);
        return this;
    }
}
