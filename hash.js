// 导入bcrypt
const bcrypt = require('bcrypt');

async function run(){
// 生成随机字符串
// genSalt方法接收一个数值作为参数
// 参数越大生成的随机字符串复杂度越高
// 参数越小生成的随机字符串复杂度越低
// 默认值是 10
// 返回生成的随机字符串
    const salt = await bcrypt.genSalt(10);
    const result = await bcrypt.hash('123456',salt);
    console.log(result);
    console.log(salt);
    let isValue = await bcrypt.compare('123456',result);
    console.log(isValue)
}
run();