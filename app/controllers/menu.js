var args = arguments[0] || {};
/*
var data=[];



for (i=0;i<=10;i++){
	var row=Alloy.createController('menurow').getView();
	data.push(row);
	
}
*/

// $.menuTable.data=data;

function doMenuClick(e){
		var rowId=e.rowData.rowId;
	
	switch (rowId){
		case "1":
			var main = Alloy.createController('main').getView();
            Alloy.CFG.contentView.add(main);
            
			break;
		case "2":
			var pagina1 = Alloy.createController('pagina1').getView();
            Alloy.CFG.contentView.add(pagina1);
	}
	Alloy.CFG.drawer.toggleLeftWindow();  
}

/*
function generateColor(){
	return (function lol(m, s, c) {
                    return s[m.floor(m.random() * s.length)] +
                        (c && lol(m, s, c - 1));
                })(Math, '3456789ABCDEF', 4);
}
*/