riot.tag2('app', '<menu-bar brand="{{label:\'S\'}}" site="{site()}" moves="{[]}"></menu-bar> <div ref="page-area"></div>', 'app > .page { width: 100vw; height: 100vh; display: block; } app .hide,[data-is="app"] .hide{ display: none; }', '', function(opts) {
     this.site = () => {
         return STORE.state().get('site');
     };

     STORE.subscribe((action)=>{
         if (action.type!='MOVE-PAGE')
             return;

         let tags= this.tags;

         tags['menu-bar'].update();
         ROUTER.switchPage(this, this.refs['page-area'], this.site());
     })

     window.addEventListener('resize', (event) => {
         this.update();
     });

     if (location.hash=='')
         location.hash='#page01'
});

riot.tag2('blog_2018-06-21', '<section-container title="2018-06-21 (木)"> <section-contents> <p><a>http://www.ryoushi-rikigaku.com/wavefunc.html</a></p> <p><a>http://www.geocities.jp/x_seek/wave.html</a></p> <p><a>http://dora.bk.tsukuba.ac.jp/~takeuchi/?%E9%87%8F%E5%AD%90%E5%8A%9B%E5%AD%A6%E2%85%A0%2F%E6%B3%A2%E5%8B%95%E9%96%A2%E6%95%B0%E3%81%AE%E8%A7%A3%E9%87%88</a></p> </section-contents> </section-container>', '', '', function(opts) {
});

riot.tag2('blog_2018-06-23', '<section-container title="2018-06-23 (土)" book="{book}"> <section-container title="観測するまでわからない。" book="{opts.book}"> <section-contents> <p>確率でしか ZERO なのか 1 なのかわからない。</p> <p>でも、アルゴリズムだとゲートで回転(?)させているからどのような状態にあるわかるんじゃない？</p> <p>とか悩んでいました。</p> </section-contents> <section-contents book="{opts.book}"> <p><a href="{opts.book.uri}">{opts.book.name}</a> にこんな記載がありました。</p> <p><pre>量子論によれば「1個の電子がどこで発見されやすいか」を計算によって知ることができます。</pre></p> <p>ここで(ある程度)腑に落ちたのは、「計算」によって解るのは「どこで発見されやすいか」だということでした。</p> <p>「される」ではなく「されやすい」というところが現状なのだと理解しました。</p> </section-contents> <section-contents> <p>シュミレーションを書いていると位置情報を保持しているので「されやすい」が飲み込みにくかったです。</p> <p>この本の一文で「そういう物」なんだと考えることが出来るようになりました。</p> </section-contents> </section-container> </section-container>', '', '', function(opts) {
     this.book = {
         name: 'Newtonライト『虚数のきほん』 (ニュートンムック)',
         uri: 'https://www.amazon.co.jp/Newton%E3%83%A9%E3%82%A4%E3%83%88%E3%80%8E%E8%99%9A%E6%95%B0%E3%81%AE%E3%81%8D%E3%81%BB%E3%82%93%E3%80%8F-%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%B3%E3%83%A0%E3%83%83%E3%82%AF/dp/4315520926/ref=sr_1_1?ie=UTF8&qid=1529757879&sr=8-1&keywords=%E8%99%9A%E6%95%B0%E3%81%AE%E3%81%8D%E3%81%BB%E3%82%93'
     }
});

riot.tag2('blog_2018-06-24', '<section-container title="2018-06-24 (日)"> <section-container title=""> <section-container> <section-contents> <p>「もし量子力学を本当に信じているなら、それをまじめに受けとれるはずはない。」(ボブ・ウォールド)</p> </section-contents> <section-container title="信じる"> </section-container> <section-container title="\\{プサイ\\}について、まじめである"> </section-container> </section-container> </section-container> </section-container>', '', '', function(opts) {
});

riot.tag2('menu-bar', '<aside class="menu"> <p ref="brand" class="menu-label" onclick="{clickBrand}"> {opts.brand.label} </p> <ul class="menu-list"> <li each="{opts.site.pages}"> <a class="{opts.site.active_page==code ? \'is-active\' : \'\'}" href="{\'#\' + code}"> {menu_label} </a> </li> </ul> </aside> <div class="move-page-menu hide" ref="move-panel"> <p each="{moves()}"> <a href="{href}">{label}</a> </p> </div>', 'menu-bar .move-page-menu { z-index: 666665; background: #dbd0e6; position: fixed; left: 55px; top: 0px; min-width: 111px; height: 100vh; box-shadow: 2px 0px 8px 0px #e0e0e0; padding: 22px 55px 22px 22px; } menu-bar .move-page-menu.hide { display: none; } menu-bar .move-page-menu > p { margin-bottom: 11px; } menu-bar > .menu { z-index: 666666; height: 100vh; width: 55px; padding: 11px 0px 11px 11px; position: fixed; left: 0px; top: 0px; background: #9d5b8b; } menu-bar .menu-label, menu-bar .menu-list a { padding: 0; width: 33px; height: 33px; text-align: center; margin-top: 8px; border-radius: 3px; background: none; color: #ffffff; font-weight: bold; padding-top: 7px; font-size: 14px; } menu-bar .menu-label,[data-is="menu-bar"] .menu-label{ background: #dbd0e6; color: #9d5b8b; } menu-bar .menu-label.open,[data-is="menu-bar"] .menu-label.open{ background: #dbd0e6; color: #9d5b8b; width: 44px; border-radius: 3px 0px 0px 3px; text-shadow: 0px 0px 1px #eee; padding-right: 11px; } menu-bar .menu-list a.is-active { width: 44px; padding-right: 11px; border-radius: 3px 0px 0px 3px; background: #ffffff; color: #333333; }', '', function(opts) {
     this.moves = () => {
         let moves = []
         return moves.filter((d)=>{
             return d.code != this.opts.current;
         });
     };

     this.brandStatus = (status) => {
         let brand = this.refs['brand'];
         let classes = brand.getAttribute('class').trim().split(' ');

         if (status=='open') {
             if (classes.find((d)=>{ return d!='open'; }))
                 classes.push('open')
         } else {
             if (classes.find((d)=>{ return d=='open'; }))
                 classes = classes.filter((d)=>{ return d!='open'; });
         }
         brand.setAttribute('class', classes.join(' '));
     }

     this.clickBrand = () => {
         let panel = this.refs['move-panel'];
         let classes = panel.getAttribute('class').trim().split(' ');

         if (classes.find((d)=>{ return d=='hide'; })) {
             classes = classes.filter((d)=>{ return d!='hide'; });
             this.brandStatus('open');
         } else {
             classes.push('hide');
             this.brandStatus('close');
         }
         panel.setAttribute('class', classes.join(' '));
     };
});

riot.tag2('section-breadcrumb', '<section-container data="{path()}"> <nav class="breadcrumb" aria-label="breadcrumbs"> <ul> <li each="{opts.data}"> <a class="{active ? \'is-active\' : \'\'}" href="{href}" aria-current="page">{label}</a> </li> </ul> </nav> </section-container>', 'section-breadcrumb section-container > .section,[data-is="section-breadcrumb"] section-container > .section{ padding-top: 3px; }', '', function(opts) {
     this.path = () => {
         let hash = location.hash;
         let path = hash.split('/');

         if (path[0] && path[0].substr(0,1)=='#')
             path[0] = path[0].substr(1);

         let out = [];
         let len = path.length;
         let href = null;
         for (var i in path) {
             href = href ? href + '/' + path[i] : '#' + path[i];

             if (i==len-1)
                 out.push({
                     label: path[i],
                     href: hash,
                     active: true
                 });

             else
                 out.push({
                     label: path[i],
                     href: href,
                     active: false
                 });
         }
         return out;
     }
});

riot.tag2('section-container', '<section class="section"> <div class="container"> <h1 class="title is-{opts.no ? opts.no : 3}"> {opts.title} </h1> <h2 class="subtitle">{opts.subtitle}</h2> <yield></yield> </div> </section>', '', '', function(opts) {
});

riot.tag2('section-contents', '<section class="section"> <div class="container"> <h1 class="title is-{opts.no ? opts.no : 3}"> {opts.title} </h1> <h2 class="subtitle">{opts.subtitle}</h2> <div class="contents"> <yield></yield> </div> </div> </section>', 'section-contents > section.section { padding: 0.0rem 1.5rem 2.0rem 1.5rem; }', '', function(opts) {
});

riot.tag2('section-footer', '<footer class="footer"> <div class="container"> <div class="content has-text-centered"> <p> </p> </div> </div> </footer>', 'section-footer > .footer { padding-top: 13px; padding-bottom: 13px; height: 66px; background: #fef4f4; opacity: 0.7; }', '', function(opts) {
});

riot.tag2('section-header-with-breadcrumb', '<section-header title="{opts.title}"></section-header> <section-breadcrumb></section-breadcrumb>', 'section-header-with-breadcrumb section-header > .section,[data-is="section-header-with-breadcrumb"] section-header > .section{ margin-bottom: 3px; }', '', function(opts) {
});

riot.tag2('section-header', '<section class="section"> <div class="container"> <h1 class="title is-{opts.no ? opts.no : 3}"> {opts.title} </h1> <h2 class="subtitle">{opts.subtitle}</h2> <yield></yield> </div> </section>', 'section-header > .section { padding-top: 13px; padding-bottom: 13px; height: 66px; background: #fef4f4; margin-bottom: 33px; }', '', function(opts) {
});

riot.tag2('section-list', '<table class="table is-bordered is-striped is-narrow is-hoverable"> <thead> <tr> <th>機能</th> <th>概要</th> </tr> </thead> <tbody> <tr each="{data()}"> <td><a href="{hash}">{title}</a></td> <td>{description}</td> </tr> </tbody> </table>', '', '', function(opts) {
     this.data = () => {
         return opts.data.filter((d) => {
             if (d.code=='root') return false;

             let len = d.code.length;
             let suffix = d.code.substr(len-5);
             if (suffix=='_root' || suffix=='-root')
                 return false;

             return true;
         });
     };
});

riot.tag2('sections-list', '<table class="table"> <tbody> <tr each="{opts.data}"> <td><a href="{hash}">{title}</a></td> </tr> </tbody> </table>', '', '', function(opts) {
});

riot.tag2('page01', '', '', '', function(opts) {
     this.mixin(MIXINS.page);

     this.on('mount', () => { this.draw(); });
     this.on('update', () => { this.draw(); });
});

riot.tag2('page02', '', '', '', function(opts) {
     this.mixin(MIXINS.page);

     this.on('mount', () => { this.draw(); });
     this.on('update', () => { this.draw(); });
});

riot.tag2('page03', '', '', '', function(opts) {
     this.mixin(MIXINS.page);

     this.on('mount', () => { this.draw(); });
     this.on('update', () => { this.draw(); });
});

riot.tag2('page04', '', '', '', function(opts) {
     this.mixin(MIXINS.page);

     this.on('mount', () => { this.draw(); });
     this.on('update', () => { this.draw(); });
});

riot.tag2('page05', '', '', '', function(opts) {
     this.mixin(MIXINS.page);

     this.on('mount', () => { this.draw(); });
     this.on('update', () => { this.draw(); });
});

riot.tag2('page01-sec_root', '<section-header title="Home"></section-header> <section-container title="概要"> <sections-contents> <p>Lisp のコンパイラを作成しようと考えて始まったプロジェクトです。</p> <p>このプロジェクトでは Pure Lisp のコンパイラを実装します。</p> <p>その上に Tiwster というプロジェクトで Common Lisp のコンパイラを実装したいと妄想しています。</p> <p>今は量子コンピューター(ゲート型)を学んでいるのでそこも生かせればと妄想しています。</p> <sections-contents> <p>妄想構成図</p> <p> <pre>\n+------------------------------------------+\n| Twister                                  |\n+------------------------------------------+\n+-------------+ +-----+ +----------+ +-----+\n| Spinor      | |     | | Math lib | |     |\n+-------------+ |     | +----------+ |     |\n+-----+ +-------+     +------+ +-----+     |\n| cpu | |         qpu        | |       gpu |\n+-----+ +--------------------+ +-----------+\n                    </pre> </P> </sections-contents> </sections-contents> </section-container>', '', '', function(opts) {
});

riot.tag2('page02-sec_root', '<section-header title="量子コンユーター(ゲート型)"></section-header>', '', '', function(opts) {
});

riot.tag2('page03-sec_root', '<section-header title="Blog"></section-header> <blog_2018-06-21></blog_2018-06-21> <blog_2018-06-23></blog_2018-06-23>', '', '', function(opts) {
});

riot.tag2('page04-sec_root', '<section-header title="Pure Lisp"></section-header> <section-container title="Operators"> <section-contents> <p> <pre>\n | Type     | Elements       |\n |----------|----------------|\n | 関数     | atom           |\n | 〃       | eq             |\n | 〃       | car            |\n | 〃       | cdr            |\n | 〃       | cons           |\n | 特殊形式 | cond           |\n | 〃       | quote          |\n | 関数定義 | lambda         |\n | 〃       | label (define) |\n                </pre> </p> </section-contents> </section-container>', '', '', function(opts) {
});

riot.tag2('page05-sec_root', '<section-header title="コンパイラ"></section-header> <section-container title="概要"> <section-contents> <p> </p> </section-contents> </section-container>', '', '', function(opts) {
});
