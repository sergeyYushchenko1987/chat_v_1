#
# This file has been generated by Cycloid, please DO NOT modify.
# Any manual modifications done to this file, WILL be lost on the
# next project edition via the forms.
#
# Please note that comments in sample files will have been dropped
# due to some limitations upon files' generation.
#
# Any extra variables not found in the original file have been ignored.
#

module "instance" {
  source = "./module-aws"

  customer      = var.customer
  env           = var.env
  instance_type = "t3.micro"
  project       = var.project
}

