$(function() {
    //データ
    var data = [
        {
            "id": "1",
            "name": "青木優位",
            "email": "sthompson0@spotify.com",
            "gender": "男性"
        },
        {
            "id": "2",
            "name": "霧島隆",
            "email": "kirisima@usgs.gov",
            "gender": "男性"
        },
        {
            "id": "3",
            "name": "中島智子",
            "email": "nakajima@usgs.gov",
            "gender": "女性"
        },
        {
            "id": "4",
            "name": "鈴木洋子",
            "email": "suzuki@usgs.gov",
            "gender": "女性"
        },
        {
            "id": "5",
            "name": "佐藤隆",
            "email": "satou@usgs.gov",
            "gender": "男性"
        }
    ];
 
    //出力する処理
    for(var i in data){
        $("#contents_list").append("<tr><td>" + data[i].id + "</td>" + "<td>" + data[i].name + "</td>" + "<td>" + data[i].email + "</td>" + "<td>" + data[i].gender + "</td></tr>");
    }
});