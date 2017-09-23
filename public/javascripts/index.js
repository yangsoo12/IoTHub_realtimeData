<html>

<head>

    <title>Temperature &amp; Humidity live data</title>
    <script src="javascripts/jquery-2.1.4.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="javascripts/Chart.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="javascripts/index.js" type="text/javascript" charset="utf-8"></script>
    <link href="stylesheets/style.css" rel="stylesheet" />

<!-- ajax script reference -->
<meta name="viewport" content="width=device-width">
	<script src="https://cdn.jsdelivr.net/raphael/2.1.4/raphael-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/justgage/1.2.2/justgage.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.js">
    </script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.1.29/c3.js">
    </script>
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.1.29/c3.css" rel="stylesheet" type="text/css">
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
	 <script src="http://maps.google.com/maps/api/js?key=AIzaSyA226KY9zLFQdnzX0Ku_oKRZLqAQLhpijg"></script>
    <script src="http://chm318.dothome.co.kr/Google.js"></script>
    <script src="http://chm318.dothome.co.kr/xml2json.js"></script>
    <script src="http://chm318.dothome.co.kr/jquery.xdomainajax.js"></script>   
<!-- ajax script reference -->
<style type="text/css">
 #top{
        margin-top: 0px;
        width:1692px;
        height:50px;
        color: white;
        background-color: #353535;
        /*text-align: center;*/
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: -68px;
    }
    #toptext {
        margin-left: 140px;
        font-size: 23px;
        /*font-family: 'HY울릉도B';*/
        margin-top: 10px;
    }
    .container2 {
        width: 150px;
        margin: 0 auto;
        text-align: center;
    }

    .gauge2 {
        width: 150px;
        height: 150px;
    }

    a:link.button,
    a:active.button,
    a:visited.button,
    a:hover.button {
        margin: 30px 5px 0 2px;
        padding: 7px 13px;
    }
    
   
    .container {
        width: 180px;
        margin: 0 auto;
	background-color:#F2F2F2;
    }
    .nam{
      /*  border-radius: 40px;
        background-color:#0054FF;
        color: white;
        font-size: 13px;
        width:150px;*/
        text-align:center;
        line-height: 25px;       
    }
	.nam2{
      /*  border-radius: 40px;
        background-color:#0054FF;
        color: white;
        font-size: 13px;
        width:150px;*/
        text-align:center;
        line-height: 10px;       
    }
    #gauges{
	margin-top:2px;
        float:left;
    }
   
    table sub{
        padding-left: 117px;
    }
	#named {
		text-align:center;
		font-size: 20px;
        font-family: 'HY울릉도B';
        margin-top: 19px;
	}
    #imglogo {
        margin-top: 10px;
    }
    </style>
<!-- ajax style -->
</head>

<body>
<!-- local donut -->

    <script src="../raphael-2.1.4.min.js"></script>
    <script src="../justgage.js"></script>
   <!-- <img src="dit5.png" id="ditimg">-->
  
 
<div id="top">
 
    <!-- <img src="dit1.png" alt="우리학교 " style="width:10%;height:10%;"> --> <div id="toptext">
<img src ="http://soso525.dothome.co.kr/ditwhite.png" class="imglogo" style="width: 50px; height:35px; margin-top: 3px; margin-left: -120px;" />
    <b style="margin-top: -5px;">Air-Talk Talk 미세먼지 모니터링 시스템</b></div>
    </div>
	<script>
    var g1;
    document.addEventListener("DOMContentLoaded", function(event) {
        g1 = new JustGage({
            id: "g1",
            value: 72,
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.3,
            counter: true,
            hideInnerShadow: true
        });

   //     document.getElementById('g1_refresh').addEventListener('click', function() {
   //         g1.refresh(getRandomInt(0, 100));
   //     });
   setInterval(myMethod, 1000);
   function myMethod()
	{
		var aa = document.getElementById("pm2").innerHTML;
		g1.refresh(parseInt(aa));
	
	}
    });
    </script>
<!---------------------------------------------------------------------------------------->
	
    <script>
    var g2;
    document.addEventListener("DOMContentLoaded", function(event) {
        g2 = new JustGage({
            id: "g2",
            value: 72,
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.3,
            counter: true,
            hideInnerShadow: true
        });

   //     document.getElementById('g1_refresh').addEventListener('click', function() {
   //         g1.refresh(getRandomInt(0, 100));
   //     });
   setInterval(myMethod2, 1000);
   function myMethod2( )
	{
		var aaa = document.getElementById("pm10").innerHTML;
		g2.refresh(parseInt(aaa));
	}
    });
    </script>
<!---------------------------------------------------------------------------------------->
	
    <script>
    var g3;
    document.addEventListener("DOMContentLoaded", function(event) {
        g3 = new JustGage({
            id: "g3",
            value: 72,
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.3,
            counter: true,
            hideInnerShadow: true
        });

   //     document.getElementById('g1_refresh').addEventListener('click', function() {
   //         g1.refresh(getRandomInt(0, 100));
   //     });
   setInterval(myMethod3, 1000);
   function myMethod3( )
	{
		var aaa = document.getElementById("temp").innerHTML;
		g3.refresh(parseInt(aaa));
	}
    });
    </script>
<!---------------------------------------------------------------------------------------->

    <script>
    var g4;
    document.addEventListener("DOMContentLoaded", function(event) {
        g4 = new JustGage({
            id: "g4",
            value: 72,
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.3,
            counter: true,
            hideInnerShadow: true
        });

   //     document.getElementById('g1_refresh').addEventListener('click', function() {
   //         g1.refresh(getRandomInt(0, 100));
   //     });
   setInterval(myMethod4, 1000);
   function myMethod4( )
	{
		var aaa = document.getElementById("humi").innerHTML;
		g4.refresh(parseInt(aaa));
	}
    });
    </script>
<!---------------------------------------------------------------------------------------->
	<script>
    var g5;
    document.addEventListener("DOMContentLoaded", function(event) {
        g5 = new JustGage({
            id: "g5",
            value: 72,
            min: 0,
            max: 1700,
            donut: true,
            gaugeWidthScale: 0.3,
            counter: true,
            hideInnerShadow: true
        });

   //     document.getElementById('g1_refresh').addEventListener('click', function() {
   //         g1.refresh(getRandomInt(0, 100));
   //     });
   setInterval(myMethod5, 1000);
   function myMethod5( )
	{
		var aaa = document.getElementById("rpm").innerHTML;
		g5.refresh(parseInt(aaa));
	}
    });
    </script>
<!---------------------------------------------------------------------------------------->

<script>
    var g6;
    document.addEventListener("DOMContentLoaded", function(event) {
        g6 = new JustGage({
            id: "g6",
            value: 72,
            min: 0,
            max: 1700,
            donut: true,
            gaugeWidthScale: 0.3,
            counter: true,
            hideInnerShadow: true
        });

   //     document.getElementById('g1_refresh').addEventListener('click', function() {
   //         g1.refresh(getRandomInt(0, 100));
   //     });
   setInterval(myMethod6, 1000);
   function myMethod6( )
	{
		var aaa = document.getElementById("rpm2").innerHTML;
		g6.refresh(parseInt(aaa));
	}
    });
    </script>///////
<!---------------------------------------------------------------------------------------->
<!-- local donut -->

<!--게이지 차트 테이블--> 
	   
   <table id="gauges" width=1692 height=0 >
	 <tr>
              <td colspan="4">
			   <p id="named">AIR-TalkTalk(실내대기환경)</p>
		   </td>
		   <td colspan ="4">
			   <p id ="named">Motor rpm(가동성능)</p>
		   </td>
		   <td colspan = "3" >
			   <p id = "named" style="margin-left: -40px;">Data parsing(실외대기환경)</p>
		   </td>
	   </tr>
           <tr> 
	   <td>
		   <div class="nam">실내 PM2.5(㎍/㎥)</div>  
	   <div class="container2">
        <div id="g1" class="gauge2"></div>
		   <p id="pm25dis">fsfdf</p>
		  
    </div>
    </td>      
	<td>
		<div class="nam">실내 PM10(㎍/㎥)</div>
       <div class="container2">
        <div id="g2" class="gauge2"></div>
	       <p id="pm10dis">fsfdf</p>
    </div>
        </td>      
		<td>
			<div class="nam">실내 온도(C)</div>
        <div class="container2">
        <div id="g3" class="gauge2"></div>
		<p id="tempdis">fsfdf</p>
    </div>
        </td>      
		<td>
			<div class="nam">실내 습도(%)</div>
        <div class="container2">
        <div id="g4" class="gauge2"></div>
		<p id="humidis">fsfdf</p>
    </div>

           <td width="70"></td> 
	<td>
		<div class="nam">Mortor1(r/mm)</div>
        <div class="container2">
        <div id="g5" class="gauge2"></div>
		<p id="rpm1dis">fsfdf</p>
    </div>
        </td>
		<td>
			<div class="nam">Mortor2(r/mm)</div>
        <div class="container2">
        <div id="g6" class="gauge2"></div>
		<p id="rpm2dis">fsfdf</p>
    </div>
        </td>
		   <td width="50"></td>	   
  <!--gauge1-->           
        <td>
        <div class="nam" >실외 PM10(㎍/㎥)</div>   
        <div class="container" style="margin-left: : -40px;"">
          <div id="gauge2" class="gauge"></div>   
             <sub id="cai2"></sub>
    </div>     
        </td>      
   <!--gauge2-->             
        <td> 
        <div class="nam" style="margin-right: 40px;">실외 PM2.5(㎍/㎥)</div>
        <div class="container" style="margin-left: : -40px;">
          <div id="gauge4" class="gauge"></div>
          <sub id="cai4"></sub>
        </div>     
        </td>
        <td width="40"></td>
       </tr>
      
        
    </table>
	
    <table width="1700px" height="500px"><tr><td height="250px">
	    <canvas id="myChart" width="400" height="150">
	</canvas></td>
	<td rowspan="2">
        <table style=" width:700px; height: 700px;margin-left: 15px; background-color:#F7F7F7;" >
            <tr> 
                <td rowspan="2" style="width: 400px;">
                    <iframe width="400px" height="350px" src="https://app.powerbi.com/view?r=eyJrIjoiYjVkYzhmOTEtYzY3MS00Y2IxLThmMWUtNDlhMzMxZDI1YmQzIiwidCI6IjIyYmZmZDRiLTVlY2YtNDE5MC04YTVkLWVmN2I2NWJmMDM1ZSIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                </td>
                <td rowspan="4" style="width: 400px;">
                    <div class="nam" style="background-color: #F7F7F7;" >DIT 실시간 미세먼지 지도</div>
                    <div id = "map" style="width:500px; height: 700px; "></div>
                </td>
            </tr> <tr> </tr>
            <tr> 
                <td rowspan="2" style="width: 400px;">
                    <iframe width="400" height="350" src="https://app.powerbi.com/view?r=eyJrIjoiNzdlNGNjNjgtYmNmZi00ZWFhLWIwMDAtOTNmNzUxODc2NzNmIiwidCI6IjIyYmZmZDRiLTVlY2YtNDE5MC04YTVkLWVmN2I2NWJmMDM1ZSIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                </td>
            </tr>
            <tr> 
             <!--   <td style="width: 400px;">
                   <img src ="http://soso525.dothome.co.kr/dit.png" style="width:400px; height:100px;" />
                </td>-->
            </tr>
        </table>
    
    </td></tr>
	    <tr><td height="250px"><canvas id="myChart2" width="400" height="150"></canvas></td></tr></table>
<!--gauge1-->

<script>
    function xmlLoader2(){
            var g2_pm10 = 30;  

            var result1 = Math.floor(Math.random() * 1000);
            $.ajax({
                url: 'http://opendata.busan.go.kr/openapi/service/AirQualityInfoService/getAirQualityInfoClassifiedByStation?ServiceKey=XvbbhgxojihU59b%2BzI27UNzRTxEsexjg3suPdRbu%2F5rSpomO7FP7SOjZVpkM7E9JwzLeXf4GY49rLLHE8kgzgQ%3D%3D&numOfRows=1&pageSize=1&pageNo=1&idx=221152&Date_hour=201410' + result1,
                dataType: "xml",
                type: 'GET',
                cache: false,
                success: function(res) {
                    var myXML = res.responseText;
                    // This is the part xml2Json comes in.
                    var JSONConvertedXML = $.xml2json(myXML);
                    g2_pm10 = JSONConvertedXML.body.items.item.pm10;
                    //alert(g2_pm10);

                    if (g2_pm10 > 80) {
                        $('#cai2').append("나쁨");
                    } else if (g2_pm10 > 30) {
                        $('#cai2').append("보통");
                    } else {
                        $('#cai2').append("좋음");
                    }

                    var gauge2;
                    gauge2 = new JustGage({
                    bindto: '#gauge2',
                    id: "gauge2",
                    value: g2_pm10,
                    min: 0,
                    max: 100,
                    donut: true,
                    gaugeWidthScale: 0.6,
                    counter: true,
                    hideInnerShadow: true,
                    customSectors: [{"lo":0,"hi":30,"color":"#5AAEFF"},
                                {"lo":31,"hi":80,"color":"#9BFF94"},
                                {"lo":81,"hi":100,"color":"#FF5A5A"}],
               	    levelColorsGradient: false                 
                    });
                }
            });
    }
    xmlLoader2();
    </script>

	

    

	<!--gauge-->    
    <script>
    function xmlLoader(){
            var g4_pm25 = 60;
            var result2 = Math.floor(Math.random() * 1000);
			
			
            $.ajax({
                url: 'http://opendata.busan.go.kr/openapi/service/AirQualityInfoService/getAirQualityInfoClassifiedByStation?ServiceKey=XvbbhgxojihU59b%2BzI27UNzRTxEsexjg3suPdRbu%2F5rSpomO7FP7SOjZVpkM7E9JwzLeXf4GY49rLLHE8kgzgQ%3D%3D&numOfRows=1&pageSize=1&pageNo=1&idx=221152&Date_hour=201410' + result2,
                dataType: "xml",
                type: 'GET',
                cache: false,
                success: function(res) {
                    var myXML = res.responseText;
                    // This is the part xml2Json comes in.
                    var JSONConvertedXML = $.xml2json(myXML);
					
                    g4_pm25 = JSONConvertedXML.body.items.item.pm25;
                    if (g4_pm25 > 50) {
                        $('#cai4').append("나쁨");
                    } else if (g4_pm25 > 15) {
                        $('#cai4').append("보통");
                    } else {
                        $('#cai4').append("좋음");
                    }                   

                    var gauge4;
                    gauge4 = new JustGage({
                    bindto: '#gauge4',
                    id: "gauge4",
                    value: g4_pm25,
                    min: 0,
                    max: 100,
                    donut: true,
                    gaugeWidthScale: 0.6,
                    counter: true,
                    hideInnerShadow: true,
                    customSectors: [{"lo":0,"hi":15,"color":"#5AAEFF"},
                                    {"lo":16,"hi":50,"color":"#9BFF94"},
                                    {"lo":51,"hi":100,"color":"#FF5A5A"}],
                    levelColorsGradient: false
                    });
                }
            });
    }
    xmlLoader();
    </script>
    <!-- map script start--------------------------------------------------------------------------->
 <script type="text/javascript">
    //var map = new L.map('map', {center: new L.LatLng(37.488374, 127.033168), zoom: 17});
    var map = new L.map('map', {center: new L.LatLng(35.165694, 129.072770), zoom: 17});
    var googleLayer = new L.Google('ROADMAP');
    map.addLayer(googleLayer);

    
    
          
            var map_J_PM10;
            var map_J_PM25;
            var result5 = Math.floor(Math.random() * 1000);
            $.ajax({
                url: 'http://opendata.busan.go.kr/openapi/service/AirQualityInfoService/getAirQualityInfoClassifiedByStation?ServiceKey=XvbbhgxojihU59b%2BzI27UNzRTxEsexjg3suPdRbu%2F5rSpomO7FP7SOjZVpkM7E9JwzLeXf4GY49rLLHE8kgzgQ%3D%3D&numOfRows=1&pageSize=1&pageNo=1&idx=221221&Date_hour=201410' + result5,
                dataType: "xml",
                type: 'GET',
                cache: false,
                success: function(res) {
                    var myXML = res.responseText;
                    // This is the part xml2Json comes in.
                    var JSONConvertedXML = $.xml2json(myXML);
                    //map_J_PM10 = JSONConvertedXML.body.items.item.pm10;
                    //map_J_PM25 = JSONConvertedXML.body.items.item.pm25; 
					map_J_PM10 = 20;
					map_J_PM25 = 20; 

      var J_cl = '#FF5A5A';
      var J_fcl = '#FF5A5A';
      var J_mcia = '#FF5A5A';
      if (map_J_PM10 > 80) {
        J_cl = '#FF5A5A';
        J_fcl = '#FF0000';
        J_mcia = '나쁨';
      } else if (map_J_PM10 > 30) {
        J_cl = '#9BFF94';
        J_fcl = '#41FF3A';   
        J_mcia = '보통';     
      } else {
        J_cl = '#5AAEFF';
        J_fcl = '#0054FF';  
        J_mcia = '좋음';      
      }

       var circle6 = L.circle([35.164934, 129.071339], 12, {
        color: J_cl,
        Opacity: 0.1,
        fillColor: J_fcl,
        fillOpacity: 0.4
      }).addTo(map);     
      circle6.bindPopup('<b>'+'TALKTALK(실내환경)'+'</b>'+'<br>'+'현재 pm10 : ' + map_J_PM10+'<br>'+'현재 pm25 : ' + map_J_PM25+'<br>'+J_mcia);

            var map_Y_PM10;
            var map_Y_PM25;
            var result6 = Math.floor(Math.random() * 1000);
            $.ajax({
                url: 'http://opendata.busan.go.kr/openapi/service/AirQualityInfoService/getAirQualityInfoClassifiedByStation?ServiceKey=XvbbhgxojihU59b%2BzI27UNzRTxEsexjg3suPdRbu%2F5rSpomO7FP7SOjZVpkM7E9JwzLeXf4GY49rLLHE8kgzgQ%3D%3D&numOfRows=1&pageSize=1&pageNo=1&idx=221221&Date_hour=201410' + result6,
                dataType: "xml",
                type: 'GET',
                cache: false,
                success: function(res) {
                    var myXML = res.responseText;
                    // This is the part xml2Json comes in.
                    var JSONConvertedXML = $.xml2json(myXML); 
                    //map_Y_PM10 = JSONConvertedXML.body.items.item.pm10;
                    //map_Y_PM25 = JSONConvertedXML.body.items.item.pm25;
					map_Y_PM10 = 90;
					map_Y_PM25 = 90;
              var Y_cl = '#FF5A5A';
              var Y_fcl = '#FF5A5A';
              var Y_mcia = '#FF5A5A';
              if (map_Y_PM10 > 80) {
              Y_cl = '#FF5A5A';
              Y_fcl = '#FF0000';
              Y_mcia = '나쁨'; 
              } else if (map_Y_PM10 > 30) {
              Y_cl = '#9BFF94';
              Y_fcl = '#41FF3A';  
              Y_mcia = '보통';      
              }else {
              Y_cl = '#5AAEFF';
              Y_fcl = '#0054FF'; 
              Y_mcia = '좋음';       
             }

      var circle7 = L.circle([35.165223, 129.070819], 12, {
        color: Y_cl,
        Opacity: 0.1,
        fillColor: Y_fcl,
        fillOpacity: 0.4
      }).addTo(map);
      circle7.bindPopup('<b>'+'실외환경'+'</b>'+'<br>'+'현재 pm10 : ' + map_Y_PM10+'<br>'+'현재 pm25 : ' + map_Y_PM25+'<br>'+Y_mcia);

          }
      });

          }
      });
  </script>        
<!-- map script end ---------------------------------------------------------------------------->
	<div>
    <p id="pm2"></p>
    <p id="pm10"></p>
	<p id="temp"></p>
	<p id="humi"></p>
	<p id="rpm"></p>
	<p id="rpm2"></p>
	</div>
</body>



</html>
