// 定义对象的验证规则
// const schema = {
//	  username: Joi.string().min(2).max(5).required().error(new Error('username属性没有通过验证')),
//	  birth: Joi.number().min(1900).max(2020).error(new Error('birth没有通过验证'))
// };
const Joi = require('joi')
const schema = Joi.object({
    username: Joi.string().min(2).max(5).required().error(new Error('username属性没有通过验证')),
	birth: Joi.number().min(1900).max(2020).error(new Error('birth没有通过验证')) 
	});


async function run() {
    try {
        // 实施验证
        // await Joi.validate({ username: 'ab', birth: 1800 }, schema);
        await schema.validateAsync({username: 'ab', birth: 1910 });
    } catch (ex) {
        console.log(ex.message);
        return;
    }
    console.log('验证通过');
}
run();
