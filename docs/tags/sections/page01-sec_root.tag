<page01-sec_root>
    <section-header title="Home"></section-header>

    <section-container title="概要">
        <sections-contents>
            <p>Lisp のコンパイラを作成しようと考えて始まったプロジェクトです。</p>
            <p>このプロジェクトでは Pure Lisp のコンパイラを実装します。</p>
            <p>その上に Tiwster というプロジェクトで Common Lisp のコンパイラを実装したいと妄想しています。</p>
            <p>今は量子コンピューター(ゲート型)を学んでいるのでそこも生かせればと妄想しています。</p>

            <sections-contents>
                <p>妄想構成図</p>
                <P>
                    <pre>
+------------------------------------------+
| Twister                                  |
+------------------------------------------+
+-------------+ +-----+ +----------+ +-----+
| Spinor      | |     | | Math lib | |     |
+-------------+ |     | +----------+ |     |
+-----+ +-------+     +------+ +-----+     |
| cpu | |         qpu        | |       gpu |
+-----+ +--------------------+ +-----------+
                    </pre>
                </P>
            </sections-contents>
        </sections-contents>
    </section-container>
</page01-sec_root>
