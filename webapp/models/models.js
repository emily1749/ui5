sap.ui.define(
	["sap/ui/model/json/JSONModel"]
	,function(JSONModel){
	return {
		createJSONModel: function(filePath){
			//Step 1: Create a brand new model object
			var oModel = new JSONModel();
			//Step 2: Set The data
			oModel.loadData(filePath);
			return oModel;
		}
	};
});