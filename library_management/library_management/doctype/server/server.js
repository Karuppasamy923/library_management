// Copyright (c) 2023, Faris Ansari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Server', {
	validate:function(frm){
		frappe.call({
			method:'library_management.library_management.doctype.client.client.py.calll',
			args:{
				msg:"success"
			},
			freeze:true,
			freeze_message: ("Loading...."),
			callback:function(res){
				// setTimeout(function(par1){
				// 	frappe.msgprint(par1)
				// },1000,res.message)
				frappe.msgprint("sddsdsd")
			}
		});
	}
});
