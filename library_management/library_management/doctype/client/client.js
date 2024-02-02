// Copyright (c) 2023, Faris Ansari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client', {
	refresh: function(frm) {
		frm.add_custom_button('click me 1',()=>{
			frappe.msgprint("complete")
		},'click me')
		frm.add_custom_button('click me 2',()=>{
			frappe.msgprint("complete")
		},'click me')
	}
});
