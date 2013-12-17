if(!Array.indexOf) {
	Array.prototype.indexOf = function(obj) {               
		for(var i=0; i<this.length; i++) if(this[i]==obj) return i;
		return -1;
	}
}


var TypeEffects = {
	5 : [
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 2.0, 1.0, 0.5, 0.5, 1.0, 2.0, 0.5, 0.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0 ], 
		[ 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 1.0, 0.0, 2.0, 1.0, 2.0, 0.5, 1.0, 2.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0 ], 
		[ 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 2.0 ], 
		[ 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 2.0, 0.5, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0 ], 
		[ 1.0, 1.0, 0.5, 0.5, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0 ], 
		[ 1.0, 1.0, 2.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 0.5, 1.0 ], 
		[ 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.0 ], 
		[ 1.0, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 1.0, 1.0, 0.5, 2.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0 ], 
		[ 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5 ]
	],
	6 : [
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 2.0, 1.0, 0.5, 0.5, 1.0, 2.0, 0.5, 0.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5 ], 
		[ 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0 ], 
		[ 1.0, 1.0, 0.0, 2.0, 1.0, 2.0, 0.5, 1.0, 2.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5 ], 
		[ 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 1.0, 0.5, 0.5, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 1.0, 2.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.0, 1.0 ], 
		[ 1.0, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.0 ], 
		[ 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5 ], 
		[ 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0 ]
	]
};

var
	TYPE_NORMAL   =  0,
	TYPE_FIGHTING =  1,
	TYPE_FLYING   =  2,
	TYPE_POISON   =  3,
	TYPE_GROUND   =  4,
	TYPE_ROCK     =  5,
	TYPE_BUG      =  6,
	TYPE_GHOST    =  7,
	TYPE_STEEL    =  8,
	TYPE_FIRE     =  9,
	TYPE_WATER    = 10,
	TYPE_GRASS    = 11,
	TYPE_ELECTRIC = 12,
	TYPE_PSYCHIC  = 13,
	TYPE_ICE      = 14,
	TYPE_DRAGON   = 15,
	TYPE_DARK     = 16,
	TYPE_FAIRY    = 17
;

function checkAbility(Ability, AttackTypes) {
	return 
		( Ability == 10 && AttackTypes.indexOf(TYPE_ELECTRIC)>-1 ) ||
		( Ability == 11 && AttackTypes.indexOf(TYPE_WATER)>-1 ) ||
		( Ability == 18 && AttackTypes.indexOf(TYPE_FIRE)>-1 ) ||
		( Ability == 26 && AttackTypes.indexOf(TYPE_GROUND)>-1 ) ||
		( Ability == 31 && AttackTypes.indexOf(TYPE_ELECTRIC)>-1 ) ||
		( Ability == 47 && ( AttackTypes.indexOf(TYPE_FIRE)>-1 || AttackTypes.indexOf(TYPE_ICE)>-1 ) ) ||
		( Ability == 78 && AttackTypes.indexOf(TYPE_ELECTRIC)>-1 ) ||
		( Ability == 85 && AttackTypes.indexOf(TYPE_FIRE)>-1 ) ||
		( Ability == 87 && ( AttackTypes.indexOf(TYPE_WATER)>-1 || AttackTypes.indexOf(TYPE_FIRE)>-1 ) ) ||
		( Ability == 114 && AttackTypes.indexOf(TYPE_WATER)>-1 ) ||
		( Ability == 157 && AttackTypes.indexOf(TYPE_GRASS)>-1 ) ||
	false;
}

function calcTypeEffect(AttackType, DefendType1, DefendType2, Ability) {
	var m = TypeEffects[6][AttackType][DefendType1];
	if ( DefendType2!=DefendType1 ) m *= TypeEffects[6][AttackType][DefendType2];
	//if (STAB) m*=1.5;
	switch (Ability){
		case 0:
			break;
		case 10: //蓄电
			if (AttackType == TYPE_ELECTRIC) m = 0;
			break;
		case 11: //贮水
			if (AttackType == TYPE_WATER) m = 0;
			break;
		case 18: //引火
			if (AttackType == TYPE_FIRE) m = 0;
			break;
		case 25: //奇异守护
			if (m <= 1) m = 0;
			break;
		case 26: //浮游
			if (AttackType == TYPE_GROUND) m = 0;
			break;
		case 31: //避雷针
			if (AttackType == TYPE_ELECTRIC) m = 0;
			break;
		case 47: //厚脂肪
			if (AttackType == TYPE_FIRE) m /= 2;
			if (AttackType == TYPE_ICE) m /= 2;
			break;
		case 78: //电引擎
			if (AttackType == TYPE_ELECTRIC) m = 0;
			break;
		case 85: //耐热
			if (AttackType == TYPE_FIRE) m /= 2;
			break;
		case 87: //干燥肌肤
			if (AttackType == TYPE_WATER) m = 0; 
			else if (AttackType == TYPE_FIRE) m *= 1.25;
			break;
		case 111: //过滤器
			if (m > 1) m *= 0.75;
			break;
		case 114: //引水
			if (AttackType == TYPE_WATER) m = 0;
			break;
		case 116: //坚岩
			if (m > 1) m *= 0.75;
			break;
		case 157: //食草
			if (AttackType == TYPE_GRASS) m = 0;
			break;
	}
	return m;
}

var Type_Names = ["普","斗","飞","毒","地","岩","虫","鬼","钢","火","水","草","电","超","冰","龙","恶","妖"];

var html = '<table class="colortable colorize colortable-colborder-none colortable-rowborder-single double-indent text-center"><tbody>';
html += '<tr><th colspan="4">选择属性</th></tr>';
html += '<tr><td colspan="4" id="typebuttons">';
$.each(Type_Names, function(i,v){ html += '<span class="colorcell type-' + v + ' option-off">' + v + '</span>'; } );
html += '</td></tr>';
html += '<tr><th colspan="4"><input id="calc" type="button" value="计算" /></th></tr>';
html += '<tr><th colspan="4"><hr /></th></tr>';
html += '<tr><th colspan="4">计算结果</th></tr>';
html += '<tr><th style="width:10%">编号</th><th style="width:40%">精灵</th><th style="width:20%">属性</th><th style="width:20%">倍率</th></tr>';
html += '</tbody><tbody id="results">';
html += '</tbody>';
html += '</table>';

$("#calculator").html(html);

$("#typebuttons .colorcell").click(function(){
	$(this).toggleClass('option-off option-on');
});

$('#calc').click(function(){
	if ( $('#typebuttons .option-on').length == 0 ) return;
	var tbody = '';
	var types = [];
	$('#typebuttons .colorcell').each(function(i,v){
		if ( $(this).hasClass('option-on') ) types.push(i);
	});

	$.each( Pokemon_Data, function(k,data) {
		var r = [];
		$.each( data['a'], function(j,a) {
			var t = [];
			$.each( types,function(i,type) {
				t[i] = calcTypeEffect( type, data['t'][0], data['t'][1], a);
			});
			r[j] = Math.max.apply(null,t);
		});
		var m = Math.min.apply(null,r);

		if (m <= 1) {
			var num = k.split('.')[0];
			var name = getPokemonName(num);
			var fullname = getPokemonName(k);
			var a = '<a href="/wiki/'+name+'">'+fullname+'</a>';
			var type = '<span class="colorcells"><span class="colorcell type-'+Type_Names[data['t'][0]]+'">'+Type_Names[data['t'][0]]+'</span>';
			if ( data['t'][0] != data['t'][1] ) type += '<span class="colorcell type-'+Type_Names[data['t'][1]]+'">'+Type_Names[data['t'][1]]+'</span>';
			type += '</span>';
			tbody += '<tr><td>#'+num+'</td><td>'+a+'</td><td>'+type+'</td><td>'+m+'</td></tr>';
		}
	});
	$("#results").html(tbody);
});