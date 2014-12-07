/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 254 2010-07-23 05:14:44Z emartin24 $
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#nav .novedades').click(function (e) {
		$('#pup-novedades').modal();

		return false;
	});
	$('#nav .historia').click(function (e) {
		$('#pup-historia').modal();

		return false;
	});
	$('#nav .locales').click(function (e) {
		$('#pup-locales').modal();

		return false;
	});
	$('#nav .hombre').click(function (e) {
		$('#pup-hombre').modal();

		return false;
	});
	$('#nav .mujer').click(function (e) {
		$('#pup-mujer').modal();

		return false;
	});
	$('#nav .accesorios').click(function (e) {
		$('#pup-accesorios').modal();

		return false;
	});
});