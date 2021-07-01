/*global QUnit*/

sap.ui.define([
	"Piper/piperdemo0701/controller/piperDemo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("piperDemo Controller");

	QUnit.test("I should test the piperDemo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
