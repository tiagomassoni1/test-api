

function requestHtml(){
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/api/v1/customer-wallets");
    request.send();
    request.onload = () => {
        console.log(request);
        if(request.status === 200){
            showDataInTable(JSON.parse(request.response).customerWallets.data);
        } else {
            console.log(`error ${request.status} ${request.statusText}`);
        }
    }
}
  

function showDataInTable(data){
    var $table = $('#table');

    $table.bootstrapTable('append', [...data]);
};