// Copyright (c) 2023, Faris Ansari and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["ServerSR"] = {
	"filters": [
		{
			"fieldname":"clientd",
			"label":__("ClientID"),
			"fieldtype":"Link",
			"options":"Client"
		},
		{
			"fieldname":"age",
			"label":__("Age"),
			"fieldtype":"Int"
		}
	]
};
