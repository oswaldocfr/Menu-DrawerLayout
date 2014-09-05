function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doMenuClick(e) {
        var rowId = e.rowData.rowId;
        switch (rowId) {
          case "1":
            var main = Alloy.createController("main").getView();
            Alloy.CFG.contentView.add(main);
            break;

          case "2":
            var pagina1 = Alloy.createController("pagina1").getView();
            Alloy.CFG.contentView.add(pagina1);
        }
        Alloy.CFG.drawer.toggleLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#4F4F4F",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "1",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Inicio",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "2",
        id: "__alloyId7"
    });
    __alloyId1.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Pagina 1",
        id: "__alloyId11"
    });
    $.__views.__alloyId8.add($.__views.__alloyId11);
    $.__views.menuTable = Ti.UI.createTableView({
        backgroundColor: "#343434",
        top: "0",
        height: Ti.UI.SIZE,
        data: __alloyId1,
        id: "menuTable"
    });
    $.__views.menu.add($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;