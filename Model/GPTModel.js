const OpenAI = require("openai");
const client = new OpenAI({
  apiKey: "",
});
class GPTModel{
    async ConnectToGPT(question){
        const completion = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'user', content: question }
            ],
            temperature: 0,
        });
        return completion.choices[0].message.content;
    }
}
module.exports = new GPTModel;