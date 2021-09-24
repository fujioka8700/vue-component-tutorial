const MODE = "development"
const enabledSourceMap = MODE === "development"
const {
    VueLoaderPlugin
} = require('vue-loader')

module.exports = {
    mode: MODE,

    entry: './src/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },

    // ローダーの設定
    module: {
        rules: [{
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    {
                        loader: "css-loader",
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            url: false,
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap,

                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [{
                    // Babel を利用する
                    loader: 'babel-loader',
                    // Babel のオプションを設定する
                    options: {
                        presets: [
                            // プリセットを指定。ES2020 を ES5 に変換
                            '@babel/preset-env',
                        ],
                    },
                }, ],
            },
        ],
    },

    // import文で .ts ファイルを解決するため
    resolve: {
        // Webpackで利用する時の設定
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
        // 拡張子の省略
        extensions: ['*', '.js', '.vue', '.json'],
    },

    plugins: [
        // Vueを読み込めるようにするため
        new VueLoaderPlugin()
    ],

    // ES5(IE11等)向けの設定
    target: ['web', 'es5'],

    devServer: {
        static: "dist",
        open: true
    }
}