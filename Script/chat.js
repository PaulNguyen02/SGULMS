function getDateTime(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return year+"-"+month+"-"+day+" "+hours+":"+month+":"+minutes;
}
function showQuestion(data){
    document.getElementById('question').value = "";
    var img = document.createElement('img');
    var time = document.createElement('span');
    var question = document.createElement('div');
    var div = document.createElement('div');
    var li = document.createElement('li');
    var ul = document.getElementById("block"); 
    img.setAttribute('src', 'https://bootdey.com/img/Content/avatar/avatar7.png');
    time.innerText = getDateTime();
    time.setAttribute('class',"message-data-time");
    question.innerText = data;
    question.setAttribute('class',"message other-message float-right");
    div.setAttribute('class',"message-data text-right");
    li.setAttribute('class',"clearfix");
    div.appendChild(img);
    div.appendChild(time);
    div.append(question);
    li.appendChild(div);
    ul.append(li);
}
function showAnswer(data){
    document.getElementById('question').value = "";
    var img = document.createElement('img');
    var time = document.createElement('span');
    var question = document.createElement('div');
    var div = document.createElement('div');
    var li = document.createElement('li');
    var ul = document.getElementById("block"); 
    img.setAttribute('src', data.result["img"]);
    time.innerText = data.result["datetime"];
    time.setAttribute('class',"message-data-time");
    question.innerText = data.result["answer"];
    question.setAttribute('class',"message my-message");
    div.setAttribute('class',"message-data");
    li.setAttribute('class',"clearfix");
    div.appendChild(img);
    div.appendChild(time);
    div.append(question);
    li.appendChild(div);
    ul.append(li);
}