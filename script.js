let btn=document.getElementById('btn');
btn.addEventListener("click",getdata);
function getdata()
{
    //let username=document.getElementById('uname');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{return response.json();})
    .then((data)=>{handle(data);})
    .catch((err)=>console.log("request failed",err));

}
function handle(data)
{
    for(let i in data)
    {
        let row=
        `
        <tr>
        <td>${data[i].phone}</td>
        <td>${data[i].email}</td>
        </tr>
        `
        let tab=document.getElementById('tablebody');
        tab.innerHTML+=row;
    }
}