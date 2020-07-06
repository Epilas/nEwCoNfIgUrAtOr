var nameList = ["C1_000_TEMP_PANELU","C1_001_TEMP1","C1_002_TEMP2","C1_003_TEMP3","C1_004_TEMP4","C1_005_TEMP5","C1_006_TEMP6","C1_007_AN_IN1","C1_008_AN_IN2",
"C1_010_DIG_IN1","C1_011_DIG_IN2","C1_012_DIG_IN3","C1_013_DIG_IN4","C1_014_DIG_IN5","C1_015_DIG_IN6","C1_016_DIG_IN7","C1_017_DIG_IN8",
"C1_018_DIG_IN9","C1_019_DIG_IN10",	"C1_021_DIG_OUT1","C1_022_DIG_OUT2","C1_023_DIG_OUT3","C1_024_DIG_OUT4","C1_025_DIG_OUT5","C1_026_DIG_OUT6",
"C1_027_DIG_OUT7","C1_028_PHASE_OUT","C1_029_PHASE_OUT","C1_030_AN_OUT1","C1_031_AN_OUT2","C1_032_AN_OUT3","C1_033_AN_OUT4","C1_034_AN_OUT5",
"C1_035_ID_VER_A","C1_036_ID_VER_B","C1_037_COMPILE_SECOND","C1_038_COMPILE_MINUTE","C1_039_COMPILE_HOUR","C1_040_COMPILE_DAY","C1_041_COMPILE_MONTH",
"C1_042_COMPILE_YEAR","C1_043_CRC_UDID1","C1_044_CRC_UDID2","C1_045_APPID_VER_MAJOR","C1_046_APPID_VER_MINOR","ID_CRC1","ID_CRC2","C1_049_TEST",
"C1_051_PAR_T_ZAD","C1_052_PAR_T_ZAD_PRZ_NOC","C1_053_PAR_T_LATO_ZIMA","C1_054_PAR_bieg","C1_055_PROGRAMY_CZASOWE","C1_056_PAR_czas_wygrzewu_nagrzewnicy",
"C1_057_SETTING_FLOW_PRESSURE_WYW","C1_058_STALY_PRZEPLYW_SENS_PRES_CONFIG_NAW","C1_059_STALY_PRZEPLYW_SENS_PRES_CONFIG_WYW","C1_060_FILTR_SENS_PRES_CONFIG_NAW",
"C1_061_FILTR_SENS_PRES_CONFIG_WYW","C1_062_LEVEL_CLEAN_FILTR_NAW","C1_063_PAR_MIN_OTW_ZAW","C1_064_PAR_CHLODNICA_FREON_MIN_CZAS_ZMIANY_SEKCJI",
"C1_065_DI1_ACTIVE","C1_066_RANGE_PRESS_SENSOR_WYW","C1_067_CONST_K_WYW","C1_068_NEW_ON_OFF","C1_069_DI2_ACTIVE","C1_070_AUTO_ZIMA_LATO","C1_071_MIN_TEMP_BEHIND_NEW",
"C1_072_HISTEREZA_LATO_ZIMA","C1_073_TEMP1_CALIBRATION","C1_074_TEMP2_CALIBRATION","C1_075_TEMP3_CALIBRATION","C1_076_TEMP4_CALIBRATION","C1_077_TEMP5_CALIBRATION",
"C1_078_TEMP6_CALIBRATION","C1_079_TEMP7_CALIBRATION","C1_080_TEMP8_CALIBRATION","C1_081_PAR_pid_k","C1_082_PAR_pid_Ti","C1_083_MAX_TEMP_BEHIND_NEW",
"C1_084_UNIC_TIM1_PERIOD","C1_085_UNIC_TIM2_PERIOD","C1_086_DI3_ACTIVE","C1_087_TIMER_NEW","C1_088_SP_RegLiniowaNocOd","C1_089_SP_RegLiniowaNocDo",
"C1_090_COOLING_PID_K","C1_091_COOLING_PID_Ti","C1_92_INPUT_TYPE_T1","C1_93_INPUT_TYPE_T2","C1_94_INPUT_TYPE_T3","C1_95_INPUT_TYPE_T4","C1_96_INPUT_TYPE_T5",
"C1_97_INPUT_TYPE_T6","C1_98_INPUT_TYPE_T7","C1_99_INPUT_TYPE_T8","C1_100_DI4_ACTIVE","C1_101_TURNED_ON","C1_102_PROGRAM","C1_103_DI5_ACTIVE",
"C1_104_MODE_WENTYLATORY","C1_105_MODE_GRZANIE","C1_106_MODE_CHLODZENIE","C1_107_MODE_WYMIENNIK","C1_108_MODE_RECYRKULACJA","C1_109_MODE_TEMP_WIODACY",
"C1_110_MODE_ALARM","C1_111_WENT_MODE","C1_112_SP_BIEG1_NAW","C1_113_SP_BIEG1_WYW","C1_114_SP_BIEG2_NAW","C1_115_SP_BIEG2_WYW","C1_116_SP_BIEG3_NAW",
"C1_117_SP_BIEG3_WYW","C1_118_DI6_ACTIVE","C1_119_DI7_ACTIVE","C1_120_DI8_ACTIVE","C1_121_DI9_ACTIVE","C1_122_DI10_ACTIVE","C1_123_RegLiniowaWydajnosNoc",
"C1_123_HARM_USAGE","C1_125_PID_TI_NAW_STALY_SPREZ","C1_126_PID_TI_WYW_STALY_SPREZ","C1_127_PID_K_NAW_STALY_SPREZ","C1_128_PID_K_WYW_STALY_SPREZ",
"C1_129_PID_KI_NAW_STALY_SPREZ","C1_130_PID_KI_WYW_STALY_SPREZ","C1_131_MAX_NAW","C1_132_MIN_NAW","TIME_WORK_CENTRAL_133","C1_134_USED_SENSORS",
"C1_129_TEMP1_HARMON","C1_130_FLAG1_HARMON","C1_131_TEMP2_HARMON","C1_132_FLAG2_HARMON","C1_140_REGISTER_SECOND","C1_141_REGISTER_MINUTE",
"C1_142_REGISTER_HOUR","C1_143_REGISTER_WEEK","C1_144_REGISTER_DAY","C1_145_REGISTER_MONTH","C1_146_REGISTER_YEAR","C1_150_REGISTER_SECOND",
"C1_151_REGISTER_MINUTE","C1_152_REGISTER_HOUR","C1_153_REGISTER_WEEK","C1_154_REGISTER_DAY","C1_155_REGISTER_MONTH","C1_156_REGISTER_YEAR",	
"C1_147_START_FAILS","C1_148_PAR_stan_centrali","C1_157_PAR_WINTER_IS_HERE","C1_158_PAR_wygrzew_nagrzewnicy_cnt","C1_159_PAR_otwieranie_przepustnic_cnt",
"C1_160_PAR_reinit_after_alarm_cnt","ALARM_EFICIENTY_FAN_FILTR_TEST","C1_170_PROCESS_LOCKED_DCNT","C1_171_ALARM","C1_172_ALARM","C1_173_ALARM",
"C1_174_ALARM","C1_175_ALARM","C1_176_ALARM","C1_177_ALARM","C1_178_ALARM","C1_179_ALARM","C1_180_ALARM","C1_181_ALARM","C1_182_ALARM","C1_183_ALARM",
"C1_009_TEMP_ERRORS","C1_185_TRYB_SERWISOWY","C1_186_ALARM_11_MAX_SUPLY_TEMP","C1_187_ALARM_12_MIN_SUPLY_TEMP","C1_188_ALARM_13_NO_CONFIRM_DAMPERS",
"C1_189_ALARM_14_NO_SENSOR_PRESSURE","C1_190_INFO_TEMPERATURA_ZADANA_PROCESU","C1_192_INFO_TEMPERATURA_ZADANA_SYSTEMU","C1_193_INFO_PARAMETR_REGULACJI_TEMPERATURY",
"C1_193_WERSJA_PROGRAMU","C1_195_CHLODNICA_BLOKADA_ZMIANY_STANU_CNT","C1_196_CHLODNICA_FREON_SEKCJA","C1_197_APSTRACT_CHLODNICA_FREON_SEKCJA","C1_198_APSTRACT_ON_OF_NEW",
"C1_199_INFO_WYSTEROWANIE_ZADANE_SYSTEMU","C1_200_STAN_WYMIENNIKA","APSTRACT_P1_PWM_nawiew","APSTRACT_P1_PWM_wywiew","C1_219_ERROR_CONFIG",
"C1_220_PANE_PRESENCE","C1_221_Pane_FanLevel","C1_222_Pane_TemperaturaAktualna","C1_223_Pane_heatingCooling","C1_224_Pane_onOff_state",
"C1_225_Pane_Rejestr_dla_Mastera","C1_226_Pane_Rejestr_dla_mastera_dekrementowany","C1_227_Pane_Flaga_zmiana_nastawy","C1_229_Pane_debug_var",
"C1_232_INFO_BIEG_ZADANY_SYSTEMU","C1_237_APSTRACT_PK_RECIRCULATION_ON_OFF","C1_239_APSTRACT_JAKOSC_POWETRZA_ZWIEK_WYD","C1_240_APSTRACT_recyrkulacja_polozenia",
"C1_241_APSTRACT_APSTRACT_REG_LIN_010","APSTRACT_SPRAWNOSC_WYMIENNIKA_242","APSTRACT_ODZYSK_AKTYWNY_243","APSTRACT_NAWIEW_OPTYMALIZACJA_ODZYSK_244",
"APSTRACT_WYWIEW_OPTYMALIZACJA_ODZYSK_245","APSTRACT_OPTYMALIZACJA_ODZYSK_ASYMETRIA_246","REJESTRACJA_REKUPERATORA_247","OSTRZEZENIE_WYMAGANY_SERWIS_CENTRALI_248",
"C1_250_T_ZAD_RECZNY_TYMCZASOWY","C1_251_WENT_WYDAJNOSC_RECZNY_TYMCZASOWY","C1_252_T_ZAD_KOMFORT1","C1_253_WENT_WYDAJNOSC_KOMFORT1","C1_254_T_ZAD_KOMFORT2",
"C1_255_WENT_WYDAJNOSC_KOMFORT2","C1_256_T_ZAD_EKONOMICZNY1","C1_257_WENT_WYDAJNOSC_EKONOMICZNY1","C1_258_T_ZAD_EKONOMICZNY2","C1_259_WENT_WYDAJNOSC_EKONOMICZNY2",
"C1_260_BIEG_RECZNY_STALY","C1_261_BIEG_RECZNY_TYMCZASOWY","C1_262_BIEG_KOMFORT1","C1_263_BIEG_KOMFORT2","C1_264_BIEG_EKONOMICZNY1","C1_265_BIEG_EKONOMICZNY2",
"C1_266_SHIFT_EFFICIENCY_SUPPLY_FAN","C1_267_SHIFT_EFFICIENCY_EXTRACT_FAN","C1_268_MODE_GRZANIE_CHLODZENIE","C1_269_MODE_GWC","SP_upTempWorkGWC_270",
"SP_downTempWorkGWC_271","SP_timeTestGWC_272","SP_timeWorkGWCtoTest_273","przesuniecieGWC_274","SP_mode_recyrkulacja_275","SP_T_naw_min_276","SP_T_zew_min_277",
"SP_Hrec_min_278","SP_Hrec_max_279","SP_recyrkZwiekszWydaj_280","SP_regLinWydWen_Hmin_281","SP_regLinWydWen_Wmin_282","SP_regLinWydWen_Hmax_283","SP_regLinWydWen_Wmax_284",
"SP_regLinWydWen_Alarm_285","SP_regLinWydWen_T_286","SP_WENT_MODE_287","SP_ODZYSK_MIN_288","SP_ODZYSK_MAX_289","SP_ODZYSK_TRYB_ZIMOWY_290","SP_ODZYSK_ASYMETRIA_291",
"SP_ODZYSK_POWROT_292","T_ODZYSK_293","SP_KOD_AKTYWACYNY_1","SP_KOD_AKTYWACYNY_2","SP_KOD_AKTYWACYNY_3","C1_297_BMS_SLAVE_ADRES","C1_298_SP_TRYB_WENT_WYDAJNOSC",
"C1_299_MODE_PRZEPUSTNICA","C1_300_SET_WEEK_TO_SERVICE","C1_301_SP_TIME_TO_ALERT_SERVICE","C1_302_TIME_DAY_TO_ALERT_SERVICE","C1_303_MODE_OPTYMALIZACJA_ODZYSKU",
"C1_304_JOG_MODE","C1_306_TIME_CHANGE_ELCETRIC_HEAT_PART","C1_307_PRZESUNIECIE_STALY_PRZEPLYW_NAW","C1_308_PRZESUNIECIE_STALY_PRZEPLYW_WYW","C1_309_CONST_K",
"C1_310_SETTING_FLOW_PRESSURE","C1_311_EXCHANGER_MODE","C1_312_RANGE_PRESS_SENSOR","C1_313_LEVEL_DIRTY_FILTR_NAW","C1_314_LEVEL_CLEAN_FILTR_WYW","C1_315_LEVEL_DIRTY_FILTR_WYW",
"STALY_SPREZ_SENS_PRES_CONFIG_NAW","STALY_SPREZ_SENS_PRES_CONFIG_WYW","RANGE_FLOW_SENSOR_NAW","RANGE_FLOW_SENSOR_WYW","VAL_FLOW_DIRTY_CLEAN_FILTR_NAW",
"VAL_FLOW_DIRTY_CLEAN_FILTR_WYW","FILTRY_MODE","PK1_CONFIG","PK2_CONFIG","PK3_CONFIG","PK4_CONFIG","PK5_CONFIG","PK6_CONFIG","PK7_CONFIG","TK1_CONFIG","TK2_CONFIG",
"AO1_CONFIG","AO2_CONFIG","AO3_CONFIG","AO4_CONFIG","AO5_CONFIG","SLAVE_PK1_CONFIG","SLAVE_PK2_CONFIG","SLAVE_PK3_CONFIG","SLAVE_PK4_CONFIG","SLAVE_PK5_CONFIG",
"SLAVE_PK6_CONFIG","SLAVE_PK7_CONFIG","SLAVE_TK1_CONFIG","SLAVE_TK2_CONFIG","SLAVE_AO1_CONFIG","SLAVE_AO2_CONFIG","SLAVE_AO3_CONFIG","SLAVE_AO4_CONFIG","MIN_WYD_WYMUSZENIE_WYD", 
"FLOW_100_PER_WYD_NAW","WENT_MIN_0_OUT_VOLTAGE","WENT_MAX_100_OUT_VOLTAGE","RECYRKULACJA_0_10_MAX","RECYRKULACJA_0_10_MIN","RECYRKULACJA_REKA_ZAD","RECYRKULACJA_PID_P",
"RECYRKULACJA_PID_I","RECYRKULACJA_PID_TI","FLOW_100_PER_WYD_WYW","JAKOSC_POWIETRZA_ZAD_AI8","RECYRKULACJA_BLOKREC_TYPE","RECYRKULACJA_BLOKREC_VALUEFOR_10V",
"RECYRKULACJA_BLOKREC_VALUEFOR_0V","RECYRKULACJA_CZERPNIA_PERCENT_10V","RECYRKULACJA_CZERPNIA_PERCENT_0V","RECYRKULACJA_WYRZUTNIA_PERCENT_10V","RECYRKULACJA_WYRZUTNIA_PERCENT_0V",		 
"PRZEPUSTNICA_010CZERPNI_MODE","PRZEPUSTNICA_010WYRZUTNI_MODE","WARTOSC_ZADANA_PRZEPUSTNICA_CZERPNI_010","WARTOSC_ZADANA_PRZEPUSTNICA_WYRZUTNIA_010","HIST_BLOKREC",     
"ZWLOKA_RECYRKULACJA","LANGUAGE_MODE","CIRCLE_PANEL_SET_MODE","CIRCLE_PANE_WYD_1BIEG","CIRCLE_PANE_WYD_2BIEG","CIRCLE_PANE_WYD_3BIEG","C1_400_RESET_500h_TIME_WORK_CENTRAL",
"C1_401_RESET_ALERT_SERVICE","C1_403_OSTRZEZENIE_USZKODZONY_TEMP_WYWIEW","C1_404_OSTRZEZENIE_TRYB_ZIMOWY","C1_405_TRYB_ZIMOWY_wymiennikMode","C1_406_TRYB_ZIMOWY_time",
"C1_407_CENTRALA_ZABLOKOWANA","C1_408_NAGRZEWNICA_3SEKCJE_CNT","C1_409_NAGRZEWNICA_SEKCJA","C1_412_APSTRACT_WYDAJNOSC_NEW","ALARM_BRAK_FILTRU_NAW","ALARM_BRAK_FILTRU_WYW",	
"C1_413_APSTRACT_LEVEL_DIRTY_NAW","C1_414_APSTRACT_LEVEL_DIRTY_WYW","TIME_RUTIN_TEST_FILTR","C1_415_APSTRACT_FILTR_NAW_TEST","C1_416_APSTRACT_FILTR_WYW_TEST",	  
"APSTRACT_ODCZYT_CZUJ_WILGOTNOSCI","APSTRACT_ODCZYT_JAKOS_POWIETRZA","APSTRACT_BLOKREC","C1_450_MODBUS_READ_PRESSURE_SENSOR1_SLAVE50","C1_451_MODBUS_READ_PRESSURE_SENSOR2_SLAVE50",
"C1_452_MODBUS_READ_TEMP_SENSOR1_SLAVE50","C1_453_MODBUS_READ_TEMP_SENSOR2_SLAVE50","C1_454_CALC_READ_PRESS_SEONSOR1","C1_455_CALC_READ_PRESS_SEONSOR2",
"MODBUS_READ_PRESSURE_SENSOR1_SLAVE51","MODBUS_READ_PRESSURE_SENSOR2_SLAVE51","MODBUS_READ_TEMP_SENSOR1_SLAVE51","MODBUS_READ_TEMP_SENSOR2_SLAVE51",
"MODBUS_READ_PRESSURE_SENSOR1_SLAVE52","MODBUS_READ_PRESSURE_SENSOR2_SLAVE52","MODBUS_READ_TEMP_SENSOR1_SLAVE52","MODBUS_READ_TEMP_SENSOR2_SLAVE52",
"MODBUS_READ_PRESSURE_SENSOR1_SLAVE53","MODBUS_READ_PRESSURE_SENSOR2_SLAVE53","MODBUS_READ_TEMP_SENSOR1_SLAVE53","MODBUS_READ_TEMP_SENSOR2_SLAVE53",
"READ_CHOSE_PRESS_SENS_NAW","READ_CHOSE_PRESS_SENS_WYW","READ_CHOSE_PRESS_SENS_FILTR_NAW","READ_CHOSE_PRESS_SENS_FILTR_WYW","PRESENCE_SLAVE50",
"PRESENCE_SLAVE51","PRESENCE_SLAVE52","PRESENCE_SLAVE53","PRESENCE_CIRCLE_PANEL","PRESENCE_SLAVE_AI_PK_AO","ERROR_MODBUS_SLAVE50","ERROR_MODBUS_SLAVE51",
"ERROR_MODBUS_SLAVE52","ERROR_MODBUS_SLAVE53","ERROR_MODBUS_CIRCLE_PANEL","READ_PRESS_CHOSE_PRESS_SENS_NAW","READ_PRESS_CHOSE_PRESS_SENS_WYW",
"CALC_FLOW_SEONSOR1_NAW","CALC_FlOW_SEONSOR2_WYW","debug1","debug2","debug3","debug4","debug5","debug6","debug7","debug8","debug9","debug10",
"UDID_1a","UDID_1b","UDID_2a","UDID_2b","maxValue","minValue","activeCodeWrite1","activeCodeWrite2","generateActiveCode1","generateActiveCode2",
"SLAVE_TEMP1","SLAVE_TEMP2","SLAVE_TEMP3","SLAVE_TEMP4","SLAVE_TEMP5","SLAVE_TEMP6","SLAVE_AN_IN1","SLAVE_AN_IN2","SLAVE_DIG_IN1","SLAVE_DIG_IN2",
"SLAVE_DIG_IN3","SLAVE_DIG_IN4","SLAVE_DIG_IN5","SLAVE_DIG_IN6","SLAVE_DIG_IN7","SLAVE_DIG_IN8","SLAVE_DIG_IN9","SLAVE_DIG_IN10","SLAVE_DIG_OUT1",
"SLAVE_DIG_OUT2","SLAVE_DIG_OUT3","SLAVE_DIG_OUT4","SLAVE_DIG_OUT5","SLAVE_DIG_OUT6","SLAVE_DIG_OUT7","SLAVE_PHASE_OUT","SLAVE_PHASE_OUT","SLAVE_AN_OUT1",
"SLAVE_AN_OUT2","SLAVE_AN_OUT3","SLAVE_AN_OUT4"
];

var actualState = [];
var loadedFile;
var errNum = 0;
var limit = 0;

var onLoad = false;
var onUpload = false;

var openHABadr = window.location.hostname;
// port ten sam co w etc/nginx/sites-enable/cross

function setState(item, state)	{
		var request = $.ajax
		({
			url        : "http://"+openHABadr+"/rest/items/"+item+"",
			timeout		:	3000, 
			type       	: 	"POST",
			data       	: 	state.toString(), 
			headers    	: 	{"Content-Type": "text/plain", "Accept": "application/json"},
			dataType	:	"text"
		});
		
		request.done( function(data) 
		{ 
			//console.log( "Success" );
			//updateElement(item, state);
		});
		
		request.fail( function(jqXHR, textStatus ) 
		{ 
			console.log( "Failure: " + textStatus );
		});
}

function getState(item)	{
	var result = "";
	$.ajax({
		url: "http://"+openHABadr+"/rest/items/"+item+"/state",
		async: false,
		success: function(data) {
			result = data; 
		}
	});
	return result;
}

function getAllState(id)	{
	console.log(id);
	if ( !id ) {
		id = 0;
		errNum = 0;
	}

	setTimeout(() => { 
		if( onLoad ) {
			//actualState.push(data); 
			$("#loadConfig").css({"width":(id/limit)*100+"%"})
			.text("Pobieranie konfiguracji "+(Math.round((id/limit)*100))+"% [ "+id+" / "+limit+" ]");
			if( id == limit ) {
				$("#loadConfig")
				.removeClass("progress-bar progress-bar-striped progress-bar-animated btn-primary")
				.addClass("btn-success")
				.text("Pobierz konfigurację na dysk")
				.attr("onclick", "downloadConfig()");
			} else {
				id += 1;
				getAllState(id);
			}
		}
	},100);
	/*item = nameList[id];
	$.ajax({
		url: "http://"+openHABadr+"/rest/items/"+item+"/state",
		async: false,
		success: function(data) {
			actualState.push(data); 
			$("#loadConfig").css({"width":(limit/id)*100+"%"})
			.text("Pobieranie <b>(</b>"+id+"/"+limit+"<b>)</b>"+((id/limit)*100)+"%");
			if( id == limit ) {
				$("#loadConfig")
				.removeClass("progress-bar progress-bar-striped progress-bar-animated btn-primary")
				.addClass("btn-success")
				.text("Pobierz konfigurację na dysk")
				.attr("onclick", "downloadConfig()");
			} else {
				getAllState(id++);
			}
		},
		error: () => {
			errNum++;
			//getAllState(id);
		}
	});*/
}

function sendAllState(id)	{
	 
		if ( !id ) {
			id = 0;
			errNum = 0;
		}

		var request = $.ajax
		({
			url        : "rest/items/"+nameList[id],
			timeout		:	3000, 
			type       	: 	"POST",
			data       	: 	loadedFile[id], 
			headers    	: 	{"Content-Type": "text/plain", "Accept": "application/json"},
			dataType	:	"text"
		});
		
		request.done( function(data) 
		{ 
			if( onUpload ) {
				actualState.push(data); 
				$("#uploadConfig").css({"width":(id/limit)*100+"%"})
				.text("Wgrywanie konfiguracji "+(Math.round((id/limit)*100))+"% [ "+id+" / "+limit+" ]");
				if( id == limit ) {
					$("#uploadConfig")
					.removeClass("progress-bar progress-bar-striped progress-bar-animated btn-primary")
					.addClass("btn-success")
					.text("Konfiguracja została wysłana");
				} else {
					id += 1;
					sendAllState(id);
				}
			}
		});
		
		request.fail( function(jqXHR, textStatus ) 
		{ 
			errNum++;
			console.log( "Failure: " + textStatus );
		});
}

var config = [];

var loadConfig = () => {
	if( !onLoad )	{
		onLoad = true;
		$("#loadConfig")
		.addClass("progress-bar progress-bar-striped progress-bar-animated")
		.css({"width": "0%"});
		limit = nameList.length;
		getAllState();
	}else{
		var r = confirm("Zatrzymać pobieranie?");

		if( r ) {
			onLoad = false;
			$("#loadConfig")
			.removeClass("progress-bar progress-bar-striped progress-bar-animated")
			.css({"width":"100%"})
			.text("Zczytaj konfigurację ze sterownika");
		}
	}
}

var downloadConfig = () => {
	var r = prompt("Wprowadź nazwę ...");
	if( r )	{
		download(actualState,r,"json");
	}
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename+"."+type);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename+"."+type;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

let uploadConfig = () => {
	var input = document.createElement('input');
	input.type = 'file';
	
	input.onchange = e => { 
		var file = e.target.files[0]; 

		var reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = readerEvent => {
			var content = readerEvent.target.result; 
			loadedFile = content;
			onUpload = true;
			sendAllState();
		}
	
	}
	
	input.click();
}

var checkConnection = () => {
	item = "C1_101_TURNED_ON";
	$.ajax({
		url: "http://"+openHABadr+"/rest/items/"+item+"/state",
		async: false,
		success: (data) => {
			$("#connection")
			.css({"color":"green"})
			.text("sterownik połączony");

			$("#loadConfig")
			.removeClass("disabled")
			.attr("onclick","loadConfig()");

			$("#uploadConfig")
			.removeClass("disabled")
			.attr("onclick","uploadConfig()");
		},
		error: () => {
			$("#connection")
			.css({"color":"red"})
			.text("brak połączenia");

			$("#loadConfig")
			.addClass("disabled")
			.attr("onclick","");

			$("#uploadConfig")
			.addClass("disabled")
			.attr("onclick","");
		}
	});

	setTimeout(() => checkConnection(), 5000);
}

$(document).ready( () => {
	checkConnection();
})