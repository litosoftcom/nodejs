var http = require('http');
var data = JSON.stringify({
    'id':'2'
});

// var options = {
//     host : 'localhost',
//     port : '8080',
//     path : '/ChartDataServer/getTimedDatapoints_byID/10/10/100',
//     method : 'GET',
//     headers: {
//         'Content-type':'application/json; charset=utf-8'
//     }
// };


// http://127.0.0.1:8001/TestWS/TestGetNumber
var options = {
    host : 'localhost',
    port : '8001',
    path : '/TestWS/TestGetNumber',
    method : 'GET',
    headers: {
        'Content-type':'application/json'
    }
};



var req = http.request(options,function(res){
    var msg = '';
    
    //res.setEncoding('utf8');
    res.on('data', function(chunk){
        msg += chunk;
    });
    res.on('end',function(){
        console.log(JSON.parse(msg));
        var datapoints = JSON.parse(msg);
        var arrDataPoints = datapoints.DataArray;
        console.log('Datapoint in array :',arrDataPoints[3]);
    
        var dpA = datapoints.Group.A;
        console.log('Datapoint in cluster :',dpA);

        arrDataPoints.forEach(function(element) {
            console.log('ArrayPoint :', element)
        }, this);
    });

});




req.write(data);
req.end();
