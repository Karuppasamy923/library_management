# Copyright (c) 2023, Faris Ansari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Client(Document):
	@frappe.whitelist()
	def calll(self,msg):
		import time
		time.sleep(40)
		frappe.msgprint(msg)
		return "vanthuda bro"
