lex(flex)は字句解析をするソース・コードを出力するシステムです。

ソース・コード は C言語になります。

名前の由来は字句解析系(lexical analyzer)の頭文字から来ています。

lexが出力したファイルはデフォルトでは標準入力からの入力を受け取ります。

受け取るのは字句解析したいソースコードになります。

ソースコードの中から、与えられた正規表現にマッチする文字列を見つけだし、その時に必要となる処理をします。

もちろん正規表現や必要となる処理は、lexのプログラミングの際に指定します。

lex のプログラムは、以下の３部構成になっています。

- 定義部
- ルール部
- サブルーチン部

各部の区切り記号は、%%です。%%だけが書かれた行が区切りになります。

cl-lex is a set of Common Lisp macros for generating lexical analyzers automatically.

Registers (including named registers) can be accessed by number or name in token generation code.

The cl-ppcre library is used for implementing regular expressions.

Lexers generated using cl-lex can be used with cl-yacc.
