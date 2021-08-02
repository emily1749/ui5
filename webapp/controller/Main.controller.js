sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"tcs/hr/payroll/models/models"
], function(Controller, modelDep) {
	"use strict";

	return Controller.extend("tcs.hr.payroll.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tcs.hr.payroll.view.Main
		 */
		oCore: sap.ui.getCore(),
		onInit: function() {
			
			var oModel = modelDep.createJSONModel("models/mockData/sampledata.json");
			//oModel.setDefaultBindingMode("OneWay");
			//Step 3: Make the model aware to app
			//default model - model w/o a name
			this.oCore.setModel(oModel);
			
			//Create another model instance - 2 models of same type
			var oModel2 = modelDep.createJSONModel("models/mockData/another.json");
			//named model
			this.oCore.setModel(oModel2, "got");
			
			
		},
		onFlipFlop: function(){
			
		},
		onTry: function(){
			// var oSal = this.getView().byId("fieldSal");
			// var oCurr = this.getView().byId("fieldCurr");
			// oSal.bindValue('/empStr/salary');
			// oCurr.bindProperty("value", "/empStr/currency");
			var oModel = sap.ui.getCore().getModel();
			var currVal = oModel.getProperty("/empStr/magic");
			if(currVal === true){
				currVal = false;
			}else{
				currVal = true;
			}
			oModel.setProperty("/empStr/magic", currVal);
		},
		printData: function(){
			var oModel = this.oCore.getModel();
			//oModel.getProperty("address of the data you want to read");
			var empName = oModel.getProperty("/empStr");
			console.log(empName);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tcs.hr.payroll.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tcs.hr.payroll.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tcs.hr.payroll.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});