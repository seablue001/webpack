import _ from 'lodash';
import printMe from './print.js';

import '../scss/index.scss';
import '../scss/common.scss';



component();
function component(){
	//创建div元素
	var element = document.createElement('div');
	element.innerHTML = _.join(['hello','夏天'],'===');  //hello===夏天
	
	element.onclick = printMe;
	document.body.appendChild(element);
}



