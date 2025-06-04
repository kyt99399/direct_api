const express = require('express')
const net = require('net');
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

/* ******************************************************
// HTTP 예제 프로그램
// 웹서버를 돌리지 않고 사용할 수 도 있음
*********************************************************/
const HTTP_PORT = 8001;
app.get('/', (req, res) => {
   res.send('Hello Worldsss!');
})

// 데이타 다운로드 받는 url
app.post('/cpsensor/post/data', (req, res) => {  
  try{
    console.log(`/cpsensor/post/data`);
    let dataJSON = req.body;
    console.log('HTTP jsonString:', JSON.stringify(dataJSON));  
    console.log('HTTP type:', dataJSON.type);  //항상 'u'가 들어옴
    console.log('HTTP yyyymmddhhmm:', dataJSON.yyyymmddhhmm); //데이타의 저장시간, directAPI를 사용할때 의미있는 값이온다.
    console.log('HTTP number:', dataJSON.number); //온도계 시리얼번호
    console.log('HTTP pw:', dataJSON.pw); //앱에서 입력한 식별번호, directAPI를 사용할때 의미있는 값이온다.
    console.log('HTTP social_type:', dataJSON.social_type);//로그인에서 사용한 소셜종류[google(안드로이드사용자일때),member(아이폰사용자일때)]2종류가 있다. , directAPI를 사용할때 의미있는 값이온다. 
    console.log('HTTP social_id:', dataJSON.social_id); //, directAPI를 사용할때 의미있는 값이온다.
    console.log('HTTP T1:', dataJSON.sensor.t1); //1채널 온도
    console.log('HTTP T2:', dataJSON.sensor.t2); //2채널 온도
    console.log('HTTP T3:', dataJSON.sensor.t3); //3채널 온도
    console.log('HTTP T4:', dataJSON.sensor.t4); //4채널 온도
    console.log('HTTP T5:', dataJSON.sensor.t5); //5채널 온도
    console.log('HTTP H1:', dataJSON.sensor.h1); //1채널 습도
    console.log('HTTP H2:', dataJSON.sensor.h2); //2채널 습도
    console.log('HTTP H3:', dataJSON.sensor.h3); //3채널 습도
    console.log('HTTP H4:', dataJSON.sensor.h4); //4채널 습도
    console.log('HTTP H5:', dataJSON.sensor.h5); //5채널 습도

    console.log('HTTP W1:', dataJSON.sensor.w1); //1채널 이슬점
    console.log('HTTP W2:', dataJSON.sensor.w2); //2채널 이슬점
    console.log('HTTP W3:', dataJSON.sensor.w3); //3채널 이슬점
    console.log('HTTP W4:', dataJSON.sensor.w4); //4채널 이슬점
    console.log('HTTP W5:', dataJSON.sensor.w5); //5채널 이슬점
    console.log('HTTP S1:', dataJSON.sensor.s1); //1채널 체감온도
    console.log('HTTP S2:', dataJSON.sensor.s2); //2채널 체감온도
    console.log('HTTP S3:', dataJSON.sensor.s3); //3채널 체감온도
    console.log('HTTP S4:', dataJSON.sensor.s4); //4채널 체감온도
    console.log('HTTP S5:', dataJSON.sensor.s5); //5채널 체감온도

  }catch(e)
  {
    console.log( "error:" + e.toString() );
  }
  res.send('OK')
  res.end();
})

// 데이타 다운로드 받는 url
app.post('/cpsensor/post/data/', (req, res) => {  
  try{
    console.log(`/cpsensor/post/data/`);
    let dataJSON = req.body;
    console.log('HTTP jsonString:', JSON.stringify(dataJSON));  
    console.log('HTTP type:', dataJSON.type);  //항상 'u'가 들어옴
    console.log('HTTP yyyymmddhhmm:', dataJSON.yyyymmddhhmm); //데이타의 저장시간, directAPI를 사용할때 의미있는 값이온다.
    console.log('HTTP number:', dataJSON.number); //온도계 시리얼번호
    console.log('HTTP pw:', dataJSON.pw); //앱에서 입력한 식별번호, directAPI를 사용할때 의미있는 값이온다.
    console.log('HTTP social_type:', dataJSON.social_type);//로그인에서 사용한 소셜종류[google(안드로이드사용자일때),member(아이폰사용자일때)]2종류가 있다. , directAPI를 사용할때 의미있는 값이온다. 
    console.log('HTTP social_id:', dataJSON.social_id); //, directAPI를 사용할때 의미있는 값이온다.
    console.log('HTTP T1:', dataJSON.sensor.t1); //1채널 온도
    console.log('HTTP T2:', dataJSON.sensor.t2); //2채널 온도
    console.log('HTTP T3:', dataJSON.sensor.t3); //3채널 온도
    console.log('HTTP T4:', dataJSON.sensor.t4); //4채널 온도
    console.log('HTTP T5:', dataJSON.sensor.t5); //5채널 온도
    console.log('HTTP H1:', dataJSON.sensor.h1); //1채널 습도
    console.log('HTTP H2:', dataJSON.sensor.h2); //2채널 습도
    console.log('HTTP H3:', dataJSON.sensor.h3); //3채널 습도
    console.log('HTTP H4:', dataJSON.sensor.h4); //4채널 습도
    console.log('HTTP H5:', dataJSON.sensor.h5); //5채널 습도

    console.log('HTTP W1:', dataJSON.sensor.w1); //1채널 이슬점
    console.log('HTTP W2:', dataJSON.sensor.w2); //2채널 이슬점
    console.log('HTTP W3:', dataJSON.sensor.w3); //3채널 이슬점
    console.log('HTTP W4:', dataJSON.sensor.w4); //4채널 이슬점
    console.log('HTTP W5:', dataJSON.sensor.w5); //5채널 이슬점
    console.log('HTTP S1:', dataJSON.sensor.s1); //1채널 체감온도
    console.log('HTTP S2:', dataJSON.sensor.s2); //2채널 체감온도
    console.log('HTTP S3:', dataJSON.sensor.s3); //3채널 체감온도
    console.log('HTTP S4:', dataJSON.sensor.s4); //4채널 체감온도
    console.log('HTTP S5:', dataJSON.sensor.s5); //5채널 체감온도

  }catch(e)
  {
    console.log("error:" +  e.toString() );
  }

  
  res.send('OK')
  res.end();

  /*****************************************************
    *  남겨진 로그 예시입니다.   
    * 기기는 온도 센서를 사용했고,
    * 앱에서 DirectAPI를 사용해서 URL을 test-api.camviewer24.com:8002/cpsensor/post/data
  *****************************************************/
  // /cpsensor/post/data
  // HTTP jsonString: {"type":"u","yyyymmddhhmm":202308161153,"number":"5844-4329","pw":"","social_type":"google","social_id":"kyt99399@gmail.com","sensor":{"t1":33.9,"t2":-273,"t3":-273,"t4":-273,"t5":-273,"h1":-273,"h2":-273}}
  // HTTP type: u
  // HTTP yyyymmddhhmm: 202308161153
  // HTTP number: 5844-4329
  // HTTP pw:
  // HTTP social_type: google
  // HTTP social_id: kyt99399@gmail.com
  // HTTP T1: 33.9
  // HTTP T2: -273
  // HTTP T3: -273
  // HTTP T4: -273
  // HTTP T5: -273
  // HTTP H1:- 273
  // HTTP H2: -273



  /*****************************************************
    *  남겨진 로그 예시입니다.   
    * 기기는 온습도 2채널센서를 사용했고,
    * 기기에서 기업고객에서 IP&port를  54.180.142.148:8001
  *****************************************************/
  // /cpsensor/post/data
  // HTTP jsonString: {"type":"u","yyyymmddhhmm":111111111111,"number":"6523-3208","pw":"1234","social_type":"device","social_id":"cpsensor","sensor":{"t1":25.8,"t2":0,"t3":0,"t4":0,"t5":0,"h1":0,"h2":0,"h3":0,"h4":0}}
  // HTTP type: u
  // HTTP yyyymmddhhmm: 111111111111
  // HTTP number: 6523-3208
  // HTTP pw: 1234
  // HTTP social_type: device
  // HTTP social_id: cpsensor
  // HTTP T1: 25.8
  // HTTP T2: 0
  // HTTP T3: 0
  // HTTP T4: 0
  // HTTP T5: 0
  // HTTP H1: 0
  // HTTP H2: 0






  



})

app.listen(HTTP_PORT, () => {
  console.log(`HTTP app listening on port ${HTTP_PORT}`)
})
console.log(`HTTP app running ${HTTP_PORT}`)


/* *******************************************************************
// TCP 예제 프로그램
// 웹서버를 돌리지 않고 사용할 수 도 있음
****************************/
// Class: net.Server 이벤트

// 'listening': server.listen()를 호출 후 서버가 바인드 되었을 때 발생.
// 'connection': 새로운 연결이 만들어지면 발생.
// 'close': 서버가 끊어지면 발생.
// 'error': 에러 발생. 이 이벤트 이후 'close' 이벤트가 직접 생성되는 경우도 있다.
// Class: net.Socket 이벤트

// 'connect': 소켓 커넥션 확립이 성공했을 때 발생.
// 'data': 데이터를 받으면 발생.
// 'end': 상대방이 FIN 패킷을 보냈을 때 발생.
// 'timeout': 소켓이 타임아웃 하여 비활성화된 경우에 발생.
// 'drain': 쓰기 버퍼가 빈 경우에 발생.
// 'error': 에러가 발생했을 때. 'close' 이벤트는 이 이벤트 후에 직접 호출된다.
// 'close': 소켓이 완전하게 끊어진 경우에 생성된다. 인수 had_error는 boolean으로 소켓이 전송 에러로 끊어졌는지 나타낸다.
// 접속한 클라이언트에 지정된 메시지를 보낸다.

const TCP_PORT = 8002;
// Start a TCP Server
var tcp = net.createServer(function (socket) {
  socket.setTimeout(20 * 1000);//연결후 20초 후에 호출 된다. 

  socket.on('connect', function () {
    console.log('Socket connect: ', '');    
  });
 
  // Handle incoming messages from clients.
  socket.on('data', function (data) {
    try{
      //데이타가 HTTP형식으로 온다.
      //밑에서 데이타 로그를 확인 할 수 있음.
      console.log('TCP Received ascii:', data.toString("ascii")); //일반문자열로 변환해서 로그를 찍는다. 
      console.log('TCP Received ascii:', data.toString("hex"));  //16진수로 Raw데이타를 로그를 찍는다.
      let strData = data.toString("ascii");
      //\r문자를 제거한다. http형식에서 \r이 올수도 있고, 안 올수도 있기에, 제거하는 것이 후처리하기 편함
      let strDataNoCar = ''; //\r문자를 제거한 문자열. 
      for( let i = 0; i < strData.length; ++i )
      {
        if( strData.charAt(i) == '\r' )
        {
          continue;
        }
        strDataNoCar = strDataNoCar + strData.charAt(i);
      }

      // HTTP형식을 간단히 파싱하면 json데이타를 얻을 수 있음  
      let arrHTTP = strDataNoCar.split('\n\n');
      let strJSON = arrHTTP[1]; //JSON문자열
      let dataJSON = JSON.parse(strJSON);//json을 사용할수 있게 파싱함
      console.log('HTTP jsonString:', strJSON);  
      console.log('HTTP type:', dataJSON.type);  //항상 'u'가 들어옴
      console.log('HTTP yyyymmddhhmm:', dataJSON.yyyymmddhhmm); //데이타의 저장시간, directAPI를 사용할때 의미있는 값이온다.
      console.log('HTTP number:', dataJSON.number); //온도계 시리얼번호
      console.log('HTTP pw:', dataJSON.pw); //앱에서 입력한 식별번호, directAPI를 사용할때 의미있는 값이온다.
      console.log('HTTP social_type:', dataJSON.social_type);//로그인에서 사용한 소셜종류[google(안드로이드사용자일때),member(아이폰사용자일때)]2종류가 있다. , directAPI를 사용할때 의미있는 값이온다. 
      console.log('HTTP social_id:', dataJSON.social_id); //, directAPI를 사용할때 의미있는 값이온다.
      console.log('HTTP T1:', dataJSON.sensor.t1); //1채널 온도
      console.log('HTTP T2:', dataJSON.sensor.t2); //2채널 온도
      console.log('HTTP T3:', dataJSON.sensor.t3); //3채널 온도
      console.log('HTTP T4:', dataJSON.sensor.t4); //4채널 온도
      console.log('HTTP T5:', dataJSON.sensor.t5); //5채널 온도
      console.log('HTTP H1:', dataJSON.sensor.h1); //1채널 습도
      console.log('HTTP H2:', dataJSON.sensor.h2); //2채널 습도
      console.log('HTTP H3:', dataJSON.sensor.h3); //3채널 습도
      console.log('HTTP H4:', dataJSON.sensor.h4); //4채널 습도
      console.log('HTTP H5:', dataJSON.sensor.h5); //5채널 습도
  
      console.log('HTTP W1:', dataJSON.sensor.w1); //1채널 이슬점
      console.log('HTTP W2:', dataJSON.sensor.w2); //2채널 이슬점
      console.log('HTTP W3:', dataJSON.sensor.w3); //3채널 이슬점
      console.log('HTTP W4:', dataJSON.sensor.w4); //4채널 이슬점
      console.log('HTTP W5:', dataJSON.sensor.w5); //5채널 이슬점
      console.log('HTTP S1:', dataJSON.sensor.s1); //1채널 체감온도
      console.log('HTTP S2:', dataJSON.sensor.s2); //2채널 체감온도
      console.log('HTTP S3:', dataJSON.sensor.s3); //3채널 체감온도
      console.log('HTTP S4:', dataJSON.sensor.s4); //4채널 체감온도
      console.log('HTTP S5:', dataJSON.sensor.s5); //5채널 체감온도

    }catch(e)
    {
      console.log( 'error:' + e.toString());         
    }

    socket.write("HTTP/1.1 200 OK\r\n");
    socket.write("Server: Apache\r\n");
    socket.write("Connection: keep-alive\r\n");
    socket.write("Keep-Alivve: timeout=5\r\n");
    socket.write("Content-Type: text/html; charset=utf-8\r\n");
    socket.write("Content-Length: 2\r\n\r\n");
    socket.write("OK");


    

    /*****************************************************
     *  남겨진 로그 예시입니다.   
     * 기기는 온도 센서를 사용했고,
     * 앱에서 DirectAPI를 사용해서 URL을 test-api.camviewer24.com:8002/cpsensor/post/data
    *****************************************************/
    // TCP Received ascii: POST /cpsensor/post/data HTTP/1.1
    // Accept: application/json, text/plain, */*
    // Content-Type: application/json
    // User-Agent: axios/1.1.3
    // Content-Length: 206
    // Accept-Encoding: gzip, deflate, br
    // Host: test-api.camviewer24.com:8002
    // Connection: close

    // {"type":"u","yyyymmddhhmm":202308161144,"number":"5844-4329","pw":"","social_type":"google","social_id":"kyt99399@gmail.com","sensor":{"t1":33.5,"t2":-273,"t3":-273,"t4":-273,"t5":-273,"h1":-273,"h2":-273}}
    // TCP Received ascii: 504f5354202f637073656e736f722f706f73742f6461746120485454502f312e310d0a4163636570743a206170706c69636174696f6e2f6a736f6e2c20746578742f706c61696e2c202a2f2a0d0a436f6e74656e742d547970653a206170706c69636174696f6e2f6a736f6e0d0a557365722d4167656e743a206178696f732f312e312e330d0a436f6e74656e742d4c656e6774683a203230360d0a4163636570742d456e636f64696e673a20677a69702c206465666c6174652c2062720d0a486f73743a20746573742d6170692e63616d76696577657232342e636f6d3a383030320d0a436f6e6e656374696f6e3a20636c6f73650d0a0d0a7b2274797065223a2275222c22797979796d6d646468686d6d223a3230323330383136313134342c226e756d626572223a22353834342d34333239222c227077223a22222c22736f6369616c5f74797065223a22676f6f676c65222c22736f6369616c5f6964223a226b7974393933393940676d61696c2e636f6d222c2273656e736f72223a7b227431223a33332e352c227432223a2d3237332c227433223a2d3237332c227434223a2d3237332c227435223a2d3237332c226831223a2d3237332c226832223a2d3237337d7d
    // HTTP jsonString: {"type":"u","yyyymmddhhmm":202308161144,"number":"5844-4329","pw":"","social_type":"google","social_id":"kyt99399@gmail.com","sensor":{"t1":33.5,"t2":-273,"t3":-273,"t4":-273,"t5":-273,"h1":-273,"h2":-273}}
    // HTTP type: u
    // HTTP yyyymmddhhmm: 202308161144
    // HTTP number: 5844-4329
    // HTTP pw:
    // HTTP social_type: google
    // HTTP social_id: kyt99399@gmail.com
    // HTTP T1: 33.5
    // HTTP T2: -273
    // HTTP T3: -273
    // HTTP T4: -273
    // HTTP T5: -273
    // HTTP H1: -273
    // HTTP H2: -273
  
    
    /*****************************************************
    *  남겨진 로그 예시입니다.   
    * 기기는 온습도 2채널센서를 사용했고,
    * 기기에서 기업고객에서 IP&port를  54.180.142.148:8002
    *****************************************************/
  // TCP Received ascii: POST /cpsensor/post/data HTTP/1.1
  // Host: 54.180.142.148
  // Content-Type: application/json
  // Content-Length: 212
  // {"type":"u","yyyymmddhhmm":111111111111,"number":"6523-3208","pw":"1234","social_type":"device","social_id":"cpsensor","sensor":{"t1":25.7,"t2":0.0,"t3":0.0,"t4":0.0,"t5":0.0,"h1":0.0,"h2":0.0,"h3":0.0,"h4":0.0}}
  // TCP Received ascii: 504f5354202f637073656e736f722f706f73742f6461746120485454502f312e310d0a486f73743a2035342e3138302e3134322e3134380d0a436f6e74656e742d547970653a206170706c69636174696f6e2f6a736f6e0d0a436f6e74656e742d4c656e6774683a203231320d0a0d0a7b2274797065223a2275222c22797979796d6d646468686d6d223a3131313131313131313131312c226e756d626572223a22363532332d33323038222c227077223a2231323334222c22736f6369616c5f74797065223a22646576696365222c22736f6369616c5f6964223a22637073656e736f72222c2273656e736f72223a7b227431223a32352e372c227432223a302e302c227433223a302e302c227434223a302e302c227435223a302e302c226831223a302e302c226832223a302e302c226833223a302e302c226834223a302e307d7d
  // HTTP jsonString: {"type":"u","yyyymmddhhmm":111111111111,"number":"6523-3208","pw":"1234","social_type":"device","social_id":"cpsensor","sensor":{"t1":25.7,"t2":0.0,"t3":0.0,"t4":0.0,"t5":0.0,"h1":0.0,"h2":0.0,"h3":0.0,"h4":0.0}}
  // HTTP type: u
  // HTTP yyyymmddhhmm: 111111111111
  // HTTP number: 6523-3208
  // HTTP pw: 1234
  // HTTP social_type: device
  // HTTP social_id: cpsensor
  // HTTP T1: 25.7
  // HTTP T2: 0
  // HTTP T3: 0
  // HTTP T4: 0
  // HTTP T5: 0
  // HTTP H1: 0
  // HTTP H2: 0

  });

  // Remove the client from the list when it leaves
socket.on('end', function () {
  console.log('tcp end: ','');
});


socket.on('error', function(err) {
    console.log('Socket Error: ', JSON.stringify(err));
  });

  socket.on('timeout', function() {
    console.log('Socket Timed Out');
    // 연결후 20초 후에 호출 된다. 
    // 20초 이후에는 강제 연결 종료한다.
    console.log('socket.destroy()');
    socket.destroy();
  });
  socket.on('close', function() {
    console.log('Socket Closed'); 
  });
});

 
tcp.on('error', function (error) { 
    console.log('tcp Error: ', JSON.stringify(error));
});

tcp.listen( TCP_PORT
, function () {
 
    var serverInfo = tcp.address();
    var serverInfoJson = JSON.stringify(serverInfo);
    console.log('listen TCP : ' + serverInfoJson);
    tcp.on('close', function () {
        console.log('server closed.');
    });
    tcp.on('connection', function () {
        console.log(`New Connection`);
    });

});

