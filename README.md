# lovering

青春文案生成与处理工具库

## 特点
- 支持青春、忧郁等风格文案的批量生成与替换
- 支持自定义标签、关键词批量替换、随机抽取等功能
- 支持本地 JSON 数据存储与读取
- TypeScript 编写，类型安全

## 安装

```bash
npm install lovering
```

## 使用示例

```js
const lovering = require('./dist');
const { __datapath } = require('./dist');

// 生成文案对象
const first = lovering.Lovering('青春如雨');
console.log(first);

// 添加标签
console.log(lovering.addTag(first.text, 'tag'));

// 读取本地文案
const articles = lovering.readText(__datapath, 'rainy');
console.log(articles);

// 关键词批量替换
const text = ['Hello, {name}! Welcome to {place}.', 'Enjoy your stay at {place}, {name}.'];
const replaced = lovering.reKeywords(text, { target: ['{name}', '{place}'], replace: ['jslover', 'zyzx'] });
console.log(replaced);

// 随机抽取一句
console.log(lovering.random(articles));
```

## API 说明

- `Lovering(text: string | string[])`：生成文案对象或对象数组
- `addTag(text: string | {text: string} | string[], tag: string)`：为文本或对象添加标签
- `readText(path: string, name: string)`：读取指定 JSON 文案
- `reKeywords(text: string | string[], config: {target: string[], replace: string[]})`：批量关键词替换
- `random(arr: string[])`：随机返回数组中的一项
- `lovestar(path: string, name: string, description: object)`：向指定文案库追加内容

## 数据格式示例

`rainy.json`：
```json
{
  "articles": [
    "雨后的操场，只有我一个人还在等你。",
    "教室的灯光亮到深夜，却照不亮我的心事。"
  ]
}
```

## 错误处理

所有 API 抛出的错误均为自定义错误类，包含错误码和详细信息。

## License

MIT

## 特别鸣谢
- [mxy](https://yuque.com/sunleo1230/kmno4)
- [719](http://sunleo1230.top:8000/html/dynamic-viewing.html?city=%E5%AD%9F&lang=gb)
- [love](https://www.玩原神玩的.com)