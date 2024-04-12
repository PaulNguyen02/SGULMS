const gpt = require('../Model/GPTModel');
class VirtualTutor{
    async result(req, res){
        const question = req.body["content"];
        const answer = await gpt.ConnectToGPT(question);
        const result = {answer};
        res.json({result});
    }

}
module.exports = new VirtualTutor; 