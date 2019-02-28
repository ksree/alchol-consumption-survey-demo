////////////////////////////////////////////////////////////
// INIT
////////////////////////////////////////////////////////////
 /*!
 * 
 * DOCUMENT READY
 * 
 */
 
var wineData = {interval:null, level:0};
var vodkaData = {interval:null, level:0};
var beerData = {interval:null, level:0};

$(function() {
	//main wine animation
	 $('#wineHolder').wineAnimation({
		image:'assets/wine_bottle.png',
		wineColour:'#6F0000',
		wineColourTop:'#AB0000',
		wineStartY:480,
		wineHeight:372,
		wineLevel:0,
		maskPath:[{x:110, y:481}, {x:132, y:476}, {x:131, y:461}, {x:131, y:321}, {x:132, y:185}, {x:126, y:165}, {x:109, y:153}, {x:95, y:144}, {x:97, y:108}, {x:77, y:109}, {x:55, y:109}, {x:54, y:144}, {x:41, y:154}, {x:24, y:163}, {x:22, y:180}, {x:21, y:364}, {x:22, y:462}, {x:22, y:483}, {x:42, y:482}, ]
    });
	
	var handle = $( "#wine-handle" );
	$( "#wineSlider" ).slider({
		create: function() {
			handle.text( $( this ).slider( "value" ) + '%' );
		},
		slide: function( event, ui ) {
			handle.text( ui.value + '%' );
			wineData.level = ui.value;
			$('#wineResult').val(wineData.level * wineAlc);
			
			clearTimeout(wineData.interval);
			wineData.interval = setTimeout(wineComplete, 100);
		}
	});
	
	$('#vodkaHolder').wineAnimation({
		image:'assets/vodka_highlight.png',
		backgroundImage:'assets/vodka.png',
		wineColour:'#99E5FF',
		wineColourTop:'#74AEC3',
		wineStartY:666,
		wineHeight:580,
		wineWidth:170,
		wineLevel:0,
		maskPath:[{x:150, y:670}, {x:178, y:656}, {x:174, y:622}, {x:175, y:437}, {x:174, y:269}, {x:160, y:196}, {x:126, y:158}, {x:123, y:129}, {x:122, y:72}, {x:90, y:75}, {x:55, y:73}, {x:54, y:124}, {x:51, y:157}, {x:14, y:203}, {x:4, y:272}, {x:3, y:449}, {x:5, y:621}, {x:1, y:653}, {x:28, y:669}, ]
    });
	
	var vodkahandle = $( "#vodka-handle" );
	$( "#vodkaSlider" ).slider({
		create: function() {
			vodkahandle.text( $( this ).slider( "value" ) + '%' );
		},
		slide: function( event, ui ) {
			vodkahandle.text( ui.value + '%' );
			vodkaData.level = ui.value;
			$('#vodkaResult').val(vodkaData.level * range);
			
			clearTimeout(vodkaData.interval);
			vodkaData.interval = setTimeout(vodkaComplete, 100);
		}
	});
	
	$('#beerHolder').wineAnimation({
		image:'assets/beer_highlight.png',
		backgroundImage:'assets/beer.png',
		wineColour:'#662112',
		wineColourTop:'#3F160D',
		wineStartY:400,
		wineHeight:360,
		wineWidth:110,
		wineLevel:0,
		maskPath:[{x:109, y:405}, {x:133, y:402}, {x:130, y:375}, {x:131, y:282}, {x:131, y:206}, {x:134, y:187}, {x:119, y:150}, {x:108, y:99}, {x:96, y:45}, {x:77, y:46}, {x:53, y:43}, {x:45, y:99}, {x:31, y:148}, {x:22, y:174}, {x:18, y:201}, {x:18, y:270}, {x:20, y:376}, {x:20, y:403}, {x:43, y:406}, ]
    });
	
	var beerhandle = $( "#beer-handle" );
	$( "#beerSlider" ).slider({
		create: function() {
			beerhandle.text( $( this ).slider( "value" ) + '%' );
		},
		slide: function( event, ui ) {
			beerhandle.text( ui.value + '%' );
			beerData.level = ui.value;
			$('#beerResult').val(beerData.level * range);
			
			clearTimeout(beerData.interval);
			beerData.interval = setTimeout(beerComplete, 100);
		}
	});
	
	//edit marking shape
	$('#editWineHolder').wineAnimation({
		image:'assets/beer.png',
		wineColour:'#330606',
		wineStartY:480,
		wineHeight:372,
		wineLevel:70,
		maskPath:[{x:110, y:400}, {x:132, y:400}, {x:132, y:400}, {x:131, y:321}, {x:131, y:158}, {x:134, y:128}, {x:113, y:108}, {x:89, y:93}, {x:95, y:62}, {x:76, y:62}, {x:56, y:63}, {x:55, y:94}, {x:33, y:107}, {x:17, y:128}, {x:17, y:153}, {x:21, y:364}, {x:17, y:400}, {x:22, y:400}, {x:42, y:400}, ],
		edit:true
    });
	
	$('#addPoint').click(function(){
		$('#editWineHolder').wineAnimation('addPoint');
	});
	
	$('#removePoint').click(function(){
		$('#editWineHolder').wineAnimation('removePoint');
	});
	
	$('#outputPoint').click(function(){
		$('#editWineHolder').wineAnimation('outputPoint');
	});
});

var wineAlc = 0.0769275;
var vodkaAlc = 750;
var beerAlc = 750;
var range = 750

function wineComplete(){
	$('#wineHolder').wineAnimation('update','wineLevel', Number(wineData.level));
}

function vodkaComplete(){
	$('#vodkaHolder').wineAnimation('update','wineLevel', Number(vodkaData.level));	
}

function beerComplete(){
	$('#beerHolder').wineAnimation('update','wineLevel', Number(beerData.level));		
}