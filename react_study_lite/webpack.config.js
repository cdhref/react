const path = require('path');

module.exports = {
    name: "word-play-setting",
    mode: "development",
    devtool: "eval",
    // 해당 확장자에 해당하는 entry 파일을 스캔 함
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // 묶을 파일
    entry: {
        app: ['./client'],
    },
    module: {
        rules: [{
            //js나 jsx파일에 babel을 load
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-env', {
                            targets:{
                                browsers: ['last 2 chrome versions'],
                            },
                        },
                    ],
                    '@babel/preset-react'
                ],
            }
        }],
    },
    output: {
        // webpack으로 생성 된 파일이 저장 될 경로 / 파일명
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};