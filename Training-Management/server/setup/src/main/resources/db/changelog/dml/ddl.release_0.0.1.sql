set search_path to master;

------insert data-------

INSERT INTO role_permission (id,manage_client,manage_package,manage_permission,manage_product,manage_role,manage_user) VALUES
	 (1,true,true,true,true,true,true),
	 (2,false,true,false,true,false,false);

INSERT INTO access_management (id,role_edit,role_add,role_view) VALUES (1,true,true,true),(2,false,false,true);

INSERT INTO role(id,active,description,name,access_management_id,permission_id) VALUES
    (1,true,'all access','super admin',1,1),
    (2,true,'manage access','admin',2,1),
    (3,true,'view','normal_user',2,2);

INSERT INTO userdata (id,fname,lname,username,email,password,role_id,profile,active,confirmotp,phone,otp) VALUES
    (1,'Saran','Saravanan', 'saran.s@netlink.com','saran.s@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (2,'HarshaVardhan','K', 'harshavardhan.k@netlink.com','harshavardhan.k@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (3,'Seshan','Rajavelu', 'seshan.r@netlink.com','seshan.r@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (4,'Tamilselvan','S', 'tamilselvan.s@netlink.com','tamilselvan.s@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (5,'GokulRaj','K', 'gokulraj.k@netlink.com','gokulraj.k@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (6,'Sakthivel','P', 'sakthivel.p@netlink.com','sakthivel.p@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (7,'Vikalp Dutt','Sharma', 'VikalpDS@netlink.com','VikalpDS@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (8,'Kapil','Namdev', 'Kapil.N@netlink.com','Kapil.N@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (9,'Super','admin', 'admin@netlink.com','admin@netlink.com','Welcome@123', 1,null, true, null,9876543210,null),
    (10,'Generic','Role', 'generic@netlink.com','generic@netlink.com','Welcome@123', 1,null, true, null,9876543210,null);

--INSERT INTO Packages (id, name, description, price, active, duration, savedamount) VALUES
--    (1, )
