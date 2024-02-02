# Copyright (c) 2023, Faris Ansari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Server(Document):
	@frappe.whitelist()
	def call(self,msg):
		import time
		time.sleep(4)
		return "vanthuda"
	


